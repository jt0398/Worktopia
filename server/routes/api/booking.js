const router = require("express").Router();
const bookingController = require("../../controllers/bookingController");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/booking"
router.route("/", isAuthenticated).get(bookingController.findAll);

// Matches with "/api/booking/user/:id"
router.route("/user/:id", isAuthenticated).get(bookingController.findAllByUser);
/* .post(bookingController.create); */

// Matches with "/api/booking/owner/:id"
router
  .route("/owner/:id", isAuthenticated)
  .get(bookingController.findAllByOwner);

// Matches with "/api/booking/workspace/:id"
router
  .route("/workspace/:id", isAuthenticated)
  .get(bookingController.findAllByWorkSpaceId)
  .post(bookingController.create);

// Matches with "/api/booking/workspace
router.route("/workspace", isAuthenticated).post(bookingController.create);

module.exports = router;
