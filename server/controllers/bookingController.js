const db = require("../models");

module.exports = {
  findAllBy: function(req, res) {
    db.Booking.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByUser: function(req, res) {
    db.Booking.findAll({
      include: [
        { model: [db.User], where: { id: req.params.id } },
        { model: db.Workspace, include: [{ model: db.WorkspacePic }] }
      ]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByOwner: function(req, res) {
    db.Booking.findAll({
      include: [
        {
          model: db.Workspace,
          include: [
            { model: db.WorkspacePic },
            {
              model: db.WorkspaceLocation,
              include: [
                {
                  model: db.User,
                  where: { id: req.params.id }
                }
              ]
            }
          ]
        }
      ]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
