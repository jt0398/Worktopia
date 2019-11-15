const db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  findAll: function(req, res) {
    db.Workspace.findAll({
      include: [
        { model: db.WorkspaceLocation, include: [db.User] },
        { model: db.WorkspacePic }
      ]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByLocation: function(req, res) {
    db.Workspace.findAll({
      include: [
        { model: db.WorkspaceLocation, where: { id: req.parms.id } },
        { model: db.WorkspacePic }
      ]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllDetail: function(req, res) {
    db.Workspace.findAll({
      include: [
        { model: db.WorkspaceLocation, include: [db.User] },
        { model: db.Feature },
        { model: db.WorkspaceAvailability },
        { model: db.WorkspacePic }
      ]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findDetailById: function(req, res) {
    db.Workspace.findAll({
      where: { id: req.params.id },
      include: [
        { model: db.WorkspaceLocation },
        { model: db.Feature },
        { model: db.WorkspaceAvailability },
        { model: db.WorkspacePic }
      ]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findBySearch: function(req, res) {
    const {
      location,
      checkindate,
      checkoutdate,
      peoplecount,
      roomcount
    } = req.params;

    const occupancy = peoplecount / roomcount;

    db.Workspace.findAll({
      where: {
        [Op.and]: [
          { isActive: true },
          { no_occupants: { [Op.gte]: occupancy } }
        ]
      },
      include: [
        {
          model: db.WorkspaceLocation,
          where: {
            [Op.or]: [
              { addr1: { [Op.like]: `%${location}%` } },
              { addr2: { [Op.like]: `%${location}%` } },
              { city: { [Op.like]: `%${location}%` } },
              { province: { [Op.like]: `%${location}%` } },
              { postal_code: { [Op.like]: `%${location}%` } }
            ]
          }
        },
        { model: db.WorkspacePic, limit: 1 },
        {
          model: db.WorkspaceAvailability,
          where: { date: { [Op.between]: [checkindate, checkoutdate] } }
        }
      ]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateWorkSpaceDetail: function(req, res) {
    // res.send(req.body);
    var workSpaceDetailObject = req.body;
    var updatedWorkSpaceHeader;

    var workSpace = {
      name: req.body.workSpaceName,
      description: req.body.workspaceDescription,
      dimension: req.body.workSpaceDimensions,
      no_occupants: req.body.workSpaceOccupancy,
      floor: 1,
      rental_price: req.body.workSpaceDailyRate,
      isActive: req.body.activateWorkSpace,
      WorkspaceLocationId: req.body.workSpaceLocation
    };

    db.sequelizeConnection
      .transaction(t => {
        return db.Workspace.update(
          workSpace,
          { where: { id: req.body.workSpaceId } },
          { transaction: t }
        ).then(updatedWorkSpace => {
          updatedWorkSpaceHeader = updatedWorkSpace;
          var workSpacePromises = [];
          req.body.FEATURE_LIST.forEach(feature => {
            var workSpaceFeature = {
              status: feature.status,
              WorkspaceId: req.body.workSpaceId,
              FeatureId: feature.label
            };
            workSpacePromises.push(
              db.WorkspaceFeature.upsert(
                workSpaceFeature,
                {
                  where: {
                    WorkspaceId: req.body.workSpaceId,
                    FeatureId: feature.label
                  }
                },
                { transaction: t }
              )
            );
          });
          var workSpacePic = {
            image_path: req.body.imageFileName,
            // image_path: null,
            WorkspaceId: req.body.workSpaceId
          };
          workSpacePromises.push(
            db.WorkspacePic.upsert(
              workSpacePic,
              {
                where: {
                  image_path: req.body.imageFileName,
                  // image_path: null,
                  WorkspaceId: req.body.workSpaceId
                }
              },
              { transaction: t }
            )
          );
          return Sequelize.Promise.all(workSpacePromises);
        });
      })
      .then(() => {
        res.json(updatedWorkSpaceHeader);
      })
      .catch(function(error) {
        console.log(error);
        res.sendStatus(400);
      });
  }
};
