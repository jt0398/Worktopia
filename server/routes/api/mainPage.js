const router = require("express").Router();
const mainPageController = require("../../controllers/mainPageController");


// Matches with "/api/mainPage"
router.route("/main").get(mainPageController.WorkspaceLocation);
router.route("/main").get(mainPageController.WorkspaceType);

module.exports = router;
