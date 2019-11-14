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
  }
};
