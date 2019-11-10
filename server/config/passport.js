const SECRET = "jwt-secret";
const passport = require("passport");
const passportJWT = require("passport-jwt");

var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");
// ExtractJwt to help extract the token
let ExtractJwt = passportJWT.ExtractJwt;

// JwtStrategy which is the strategy for the authentication
let JwtStrategy = passportJWT.Strategy;

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
  "login",
  new LocalStrategy(
    // Our user will sign in using an email, rather than a "username"
    {
      usernameField: "username",
      passwordField: "password",
      session: false
    },
    function(username, password, done) {
      // When a user tries to sign in this code runs
      db.User.findOne({
        where: {
          username: username
        }
      }).then(function(dbUser) {
        // If there's no user with the given email
        if (!dbUser) {
          return done(null, false, {
            message: "Incorrect User Id."
          });
        } else if (!dbUser.validPassword(password)) {
          // If there is a user with the given email, but the password the user gives us is incorrect
          return done(null, false, {
            message: "Incorrect password."
          });
        }
        // If none of the above, return the user
        return done(null, dbUser);
      });
    }
  )
);
module.exports = passport;
