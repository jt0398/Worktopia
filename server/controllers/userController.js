const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.User.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User.findOne({ where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUsername: function(req, res) {
    db.User.findOne({
      where: { username: req.params.username },
      include: [{ model: db.UserRole }]
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err.parent);
        res.status(400).json(err.parent.errno);
      });
  },
  update: function(req, res) {
    db.User.update(req.body, { where: { id: req.params.id } })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User.destroy({ id: req.params.id }).catch(err =>
      res.status(422).json(err)
    );
  }
};
