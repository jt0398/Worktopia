const router = require("express").Router();
const passport = require("../../config/passport");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/login"
router.post("/", passport.authenticate("local"), function(req, res) {
  /* 
  After logging in the user needs to be redirected to 
  the correct or previous page. Should the logic be here or isAuthenticate?
 */
  res.json(req.user);
});

module.exports = router;
