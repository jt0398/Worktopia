const router = require("express").Router();
const userController = require("../../controllers/userController");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/user"
router
  .route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(isAuthenticated, userController.remove);

module.exports = router;
