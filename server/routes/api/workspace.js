const router = require("express").Router();
const workspaceController = require("../../controllers/workspaceController");

// Matches with "/api/workspace"
router.route("/").get(workspaceController.findAll);
//.post(workspaceController.create);

// Matches with "/api/workspace/:id"
router
  .route("/:id")
  .get(workspaceController.findDetailById)
  .put(workspaceController.updateWorkSpaceDetail);
/*.delete(workspaceController.remove); */

// Matches with "/api/workspace/search/result"
router
  .route(
    "/search/results/:location/:checkindate/:checkoutdate/:peoplecount/:roomcount"
  )
  .get(workspaceController.findBySearch);

module.exports = router;
