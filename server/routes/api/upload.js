const router = require("express").Router();
const uploadController = require("../../controllers/uploadController");

// Matches with "/api/login"
router
  .route("/")
  .post(uploadController.upload);

module.exports = router;
