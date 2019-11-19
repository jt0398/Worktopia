const router = require("express").Router();
const bookingController = require("../../controllers/bookingController");

// Matches with "/api/booking"
router.route("/").get(bookingController.findAll);

// Matches with "/api/booking/user/:id"
router.route("/user/:id").get(bookingController.findAllByUser);
/* .post(bookingController.create); */

// Matches with "/api/booking/owner/:id"
router.route("/owner/:id").get(bookingController.findAllByOwner);

// Matches with "/api/booking/workspace/:id"
router
  .route("/workspace/:id")
  .get(bookingController.findAllByWorkSpaceId)
  .post(bookingController.create);

// Matches with "/api/booking/workspace
router.route("/workspace").post(bookingController.create);

module.exports = router;
