
const db = require("../models");

module.exports = {
  findDistinctLocations: function(req, res) {
    db.WorkspaceLocation.findAll({
      where: { UserId: req.params.id }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
