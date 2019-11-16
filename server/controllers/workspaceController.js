const db = require("../models");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;
const moment = require("moment");

async function updateWorkSpace(workSpaceId, workSpace, transaction) {
  return db.Workspace.update(
    workSpace,
    { where: { id: workSpaceId } },
    { transaction }
  );
}

async function updateWorkSpaceFeatures(workSpaceId, featureArray, transaction) {
  var workSpaceFeaturePromises = [];

  featureArray.forEach(feature => {
    var workSpaceFeature = {
      status: feature.status,
      WorkspaceId: workSpaceId,
      FeatureId: feature.label
    };
    workSpaceFeaturePromises.push(
      db.WorkspaceFeature.upsert(
        workSpaceFeature,
        {
          where: {
            WorkspaceId: workSpaceId,
            FeatureId: feature.label
          }
        },
        { transaction }
      )
    );
  });
  return Sequelize.Promise.all(workSpaceFeaturePromises);
  // return workSpaceFeaturePromises;
}

async function updateWorkSpacePic(workSpacePic, transaction) {
  return db.WorkspacePic.upsert(
    workSpacePic,
    {
      where: {
        image_path: workSpacePic.image_path,
        // image_path: null,
        WorkspaceId: workSpacePic.workSpaceId
      }
    },
    { transaction }
  );
}

async function deleteWorkSpaceAvailability(WorkspaceId, transaction) {
  console.log("delete11", WorkspaceId);
  return db.WorkspaceAvailability.destroy(
    {
      where: {
        WorkspaceId: WorkspaceId
      }
    },
    { transaction }
  );
}

async function createCalendarAvailability(
  WorkspaceId,
  startDate,
  endDate,
  transaction
) {
  var bookedDates = [];
  var currentDate = moment(startDate);
  var stopDate = moment(endDate);
  while (currentDate <= stopDate) {
    bookedDates.push({
      date: moment(currentDate).format("MM/DD/YYYY"),
      WorkspaceId: WorkspaceId
    });
    currentDate = moment(currentDate).add(1, "days");
  }
  return db.WorkspaceAvailability.bulkCreate(bookedDates, { transaction });
}

async function updateWorkSpaceDetail(workSpaceDetailObject) {
  var workSpaceId = workSpaceDetailObject.workSpaceId;
  var workSpace = {
    name: workSpaceDetailObject.workSpaceName,
    description: workSpaceDetailObject.workspaceDescription,
    dimension: workSpaceDetailObject.workSpaceDimensions,
    no_occupants: workSpaceDetailObject.workSpaceOccupancy,
    floor: 1,
    rental_price: workSpaceDetailObject.workSpaceDailyRate,
    isActive: workSpaceDetailObject.activateWorkSpace,
    WorkspaceLocationId: workSpaceDetailObject.workSpaceLocation
  };
  var workSpacePic = {
    image_path: workSpaceDetailObject.imageFileName,
    // image_path: null,
    WorkspaceId: workSpaceDetailObject.workSpaceId
  };
  let transaction;
  try {
    transaction = await db.sequelizeConnection.transaction();

    var updateWorkSpaceTable = await updateWorkSpace(
      workSpaceId,
      workSpace,
      transaction
    );
    var updateWorkSpaceFeaturesTable = await updateWorkSpaceFeatures(
      workSpaceId,
      workSpaceDetailObject.FEATURE_LIST,
      transaction
    );
    if (workSpacePic.image_path) {
      var updateWorkSpacePicTable = await updateWorkSpacePic(
        workSpacePic,
        transaction
      );
    }
    var deleteCalendarDates = await deleteWorkSpaceAvailability(
      workSpaceId,
      transaction
    );
    var createCalendarDates = await createCalendarAvailability(
      workSpaceId,
      workSpaceDetailObject.startDate,
      workSpaceDetailObject.endDate,
      transaction
    );
    await transaction.commit();
    return {
      updateWorkSpaceTable: updateWorkSpaceTable,
      updateWorkSpaceFeaturesTable: updateWorkSpaceFeaturesTable,
      updateWorkSpacePicTable: updateWorkSpacePicTable,
      deleteCalendarDates: deleteCalendarDates,
      createCalendarDates: createCalendarDates
    };
  } catch (err) {
    await transaction.rollback();
  }
}


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
    /*  console.log(
      //moment(req.body.checkinDate).diff(moment(req.body.checkoutDate), "days")
      moment().subtract(2, "months")
    ); */
    const location = req.body.location;
    const checkindate = req.body.checkinDate;
    const checkoutdate = req.body.checkoutDate;
    const people = parseInt(req.body.people);
    const room = parseInt(req.body.room);

    const occupancy = Math.floor(people / room);

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
          where: { date: { [Op.between]: [checkindate, checkoutdate] } } //{ id: { [Op.gt]: [0] } }
        }
      ]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateWorkSpaceDetail1: function(req, res) {
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

    var workSpacePic = {
      image_path: req.body.imageFileName,
      // image_path: null,
      WorkspaceId: req.body.workSpaceId
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
          console.log("Finished workspace and features");
          return Sequelize.Promise.all(workSpacePromises).then(count => {
            var workSpacePicPromises = [];
            workSpacePicPromises.push(
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
            return Sequelize.Promise.all(workSpacePicPromises);
          });
        });
      })
      .then(() => {
        res.json(updatedWorkSpaceHeader);
      })
      .catch(function(error) {
        console.log(error);
        res.sendStatus(400);
      });
  },

  updateWorkSpaceDetail: function(req, res) {
    var workSpaceDetailObject = req.body;
    updateWorkSpaceDetail(workSpaceDetailObject).then(data =>
      res.json("Success OK")
    );
    console.log("567");
  }
};
