const router = require("express").Router();
const locationController = require("../../controllers/locationController");

// Matches with "/api/location"
router.route("/add")
  .post(locationController.create);
router.route("/")
  .get(locationController.findAll);
// Matches with "/api/location/:id"
router.route("/:id").get(locationController.findById)
  .put(locationController.update);
// .delete(locationController.remove);

// Matches with "/api/location/owner/:id"
router.route("/owner/:id").get(locationController.findAllByOwner);

module.exports = router;
