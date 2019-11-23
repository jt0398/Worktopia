const router = require("express").Router();
const locationController = require("../../controllers/locationController");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/location"
router.route("/add").post(isAuthenticated, locationController.create);
router.route("/").get(isAuthenticated, locationController.findAll);

// Matches with "/api/location/:id"
router
  .route("/:id")
  .get(isAuthenticated, locationController.findById)
  .put(isAuthenticated, locationController.update);

// Matches with "/api/location/owner/:id"
router
  .route("/owner/:id")
  .get(isAuthenticated, locationController.findAllByOwner);

module.exports = router;
