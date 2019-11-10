const router = require("express").Router();
const mainPageController = require("../../controllers/mainPageController");

// Matches with "/api/login"
router.route("/main").get(mainPageController.WorkspaceLocation);

module.exports = router;
