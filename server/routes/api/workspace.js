const router = require("express").Router();
const workspaceController = require("../../controllers/workspaceController");

// Matches with "/api/workspace"
router.route("/").get(workspaceController.findAll);
//.post(workspaceController.create);

// Matches with "/api/workspace/:id"
router.route("/:id").get(workspaceController.findDetailById);
/* .put(workspaceController.update)
  .delete(workspaceController.remove); */

module.exports = router;
