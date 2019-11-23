const router = require("express").Router();
const passport = require("../../config/passport");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/login"
router.get("/logout", passport.authenticate("local"), function(req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
