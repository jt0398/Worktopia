const router = require("express").Router();
const featureController = require("../../controllers/featureController");

// Matches with "/api/feature"
router.route("/").get(featureController.findAll);


module.exports = router;
