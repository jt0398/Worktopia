const router = require("express").Router();
const ownerController = require("../../controllers/ownerController");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/owner/locations:id"
router
  .route("/locations/:id")
  .get(isAuthenticated, ownerController.findDistinctLocations);

module.exports = router;
