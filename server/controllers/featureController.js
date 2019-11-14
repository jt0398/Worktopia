const db = require("../models");
var Sequelize = require("sequelize");

module.exports = {
  findAll: function(req, res) {
    db.Feature.findAll({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
