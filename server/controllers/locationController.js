const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.WorkspaceLocation.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.WorkspaceLocation.findAll({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllByOwner: function(req, res) {
    db.WorkspaceLocation.findAll({
      include: [{ model: [db.User], where: { id: req.params.id } }]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
