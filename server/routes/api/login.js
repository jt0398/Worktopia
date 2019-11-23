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

  console.log("---------Login passport.authenticate " + req.user);

  req.session.save(err => {
    if (err) {
      console.log(err);
      res.json({});
    }
    res.json(req.user);
  });
});

router.route("/checksession").get(function(req, res) {
  console.log("---------Login checksession " + req.user);

  if (req.user) {
    res.json({
      is_logged: true,
      is_owner: req.user.UserRoleId === 1
    });
  } else {
    res.json({
      is_logged: false,
      is_owner: false
    });
  }
});

module.exports = router;
