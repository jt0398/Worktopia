const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.WorkspaceLocation.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.WorkspaceLocation.findOne({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   findByUsername: function(req, res) {
//     db.User.findOne({
//       where: { username: req.params.username },
//       include: [{ model: db.UserRole }]
//     })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
  create: function(req, res) {
    db.WorkspaceLocation.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.WorkspaceLocation.update(req.body, { where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
//   remove: function(req, res) {
//     db.User.destroy({ id: req.params.id }).catch(err =>
//       res.status(422).json(err)
//     );
//   }
};
