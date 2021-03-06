const router = require("express").Router();
const stripeController = require("../../controllers/stripeController");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../../config/middleware/isAuthenticated");

router.route("/").post(isAuthenticated, stripeController.makePayment);

module.exports = router;
