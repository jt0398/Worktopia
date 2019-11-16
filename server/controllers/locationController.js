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
    db.WorkspaceLocation.findAll({ where: { UserId: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body);
    db.WorkspaceLocation.create(req.body)
      .then(dbModel => res.status(200))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.WorkspaceLocation.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
