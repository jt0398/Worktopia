const router = require("express").Router();
const passport = require("../../config/passport");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/logout"
router.get("/", function(req, res) {
  console.log("Back end logout");
  // req.logout();
  res.sendStatus(200)
});

module.exports = router;
