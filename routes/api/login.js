const router = require("express").Router();
const loginController = require("../../controllers/loginController");


// Matches with "/api/books"
router.route("/")
  .post(loginController.checkLogIn);


module.exports = router;
