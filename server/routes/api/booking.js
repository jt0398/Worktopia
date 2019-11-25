const router = require("express").Router();
const bookingController = require("../../controllers/bookingController");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/booking"
router.route("/").get(isAuthenticated, bookingController.findAll);

// Matches with "/api/booking/user/:id"
router.route("/user/:id").get(isAuthenticated, bookingController.findAllByUser);
/* .post(bookingController.create); */

// Matches with "/api/booking/owner/:id"
router
  .route("/owner/:id")
  .get(isAuthenticated, bookingController.findAllByOwner);

// Matches with "/api/booking/workspace/:id"
router
  .route("/workspace/:id")
  .get(isAuthenticated, bookingController.findAllByWorkSpaceId)
  .post(isAuthenticated, bookingController.create);

// Matches with "/api/booking/workspace
router.route("/workspace").post(isAuthenticated, bookingController.create);

// Matches with "/api/booking/workspace/availability
router
  .route("/workspace/availability")
  .post(isAuthenticated, bookingController.checkAvailability);

module.exports = router;
