const router = require("express").Router();
const passport = require("../../config/passport");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/login"
router.post("/", passport.authenticate("local"), function(req, res) {
  res.json(req.user);
});

module.exports = router;
