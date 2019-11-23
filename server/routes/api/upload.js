const router = require("express").Router();
const uploadController = require("../../controllers/uploadController");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/upload"
router.route("/").post(isAuthenticated, uploadController.upload);

module.exports = router;
