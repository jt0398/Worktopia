const db = require("../models");

// Defining methods for the booksController
module.exports = {
  validate: function(req, res) {
    console.log(req.body);
    db.User.findOne({
      where: { username: req.body.username, password: req.body.password },
      include: [{ model: db.UserRole }]
    })
      .then(userData => {
        console.log(userData.dataValues);
        res.json(userData.dataValues);
      })
      .catch(err => {
        console.error(err);
        res.status(422).json(err);
      });
  }
};
