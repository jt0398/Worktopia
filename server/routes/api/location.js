const router = require("express").Router();
const locationController = require("../../controllers/locationController");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/location"
router.route("/add", isAuthenticated).post(locationController.create);
router.route("/", isAuthenticated).get(locationController.findAll);

// Matches with "/api/location/:id"
router
  .route("/:id", isAuthenticated)
  .get(locationController.findById)
  .put(locationController.update);

// Matches with "/api/location/owner/:id"
router
  .route("/owner/:id", isAuthenticated)
  .get(locationController.findAllByOwner);

module.exports = router;
