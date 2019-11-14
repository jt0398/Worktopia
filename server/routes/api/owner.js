const router = require("express").Router();
const ownerController = require("../../controllers/ownerController");

// Matches with "/api/owner/locations:id"
router.route("/locations/:id").get(ownerController.findDistinctLocations);

module.exports = router;
