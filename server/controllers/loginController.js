const db = require("../models");
var passport = require("../config/passport");
const SECRET = "jwt-secret";
const jwt = require("jsonwebtoken");

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
        let payload = { id: userData.dataValues.id };
        const token = jwt.sign(payload, SECRET);
        res.status(200).send({
          auth: true,
          token: token,
          message: "user found & logged in"
        });
      })
      .catch(err => {
        console.error(err);
        res.status(422).json(err);
      });
  }
};
