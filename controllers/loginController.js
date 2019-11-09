const db = require("../models");
// import passport and passport-jwt modules
const passport = require("passport");
const passportJWT = require("passport-jwt");
// ExtractJwt to help extract the token
let ExtractJwt = passportJWT.ExtractJwt;
// JwtStrategy which is the strategy for the authentication
let JwtStrategy = passportJWT.Strategy;
let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "wowwow";


// Defining methods for the booksController
module.exports = {
  checkLogIn : function(req, res) {
    console.log("Validating login");
    console.log(req.body)
    db.User.findOne({
      where: {
        user_name: req.body.user_name,
        user_password: req.body.user_password
      }
    }).then(userData => {
      if (userData) {
        res.json({
          userId: userData.dataValues.id,
          userName: userData.dataValues.user_name
        });
      } else {
        res.json(null);
      }
    })
    .catch(error => {
      console.error(error);
      res.sendStatus(400);
    });

  }
};
