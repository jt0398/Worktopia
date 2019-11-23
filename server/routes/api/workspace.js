const router = require("express").Router();
const workspaceController = require("../../controllers/workspaceController");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/workspace"
router
  .route("/")
  .get(workspaceController.findAll)
  .post(workspaceController.createWorkSpaceDetail);

// Matches with "/api/workspace/:id"
router
  .route("/:id")
  .get(workspaceController.findDetailById)
  .put(workspaceController.updateWorkSpaceDetail);

// Matches with "/api/workspace/search/result"
router.route("/search/results/").post(workspaceController.findBySearch);

router
  .route("/location/:id", isAuthenticated)
  .get(workspaceController.findAllByLocation);

module.exports = router;
