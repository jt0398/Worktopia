const router = require("express").Router();
const stripeController = require("../../controllers/stripeController");

console.log("In Stripe Routes");
// Matches with "/api/workspace"
router.route("/").post(stripeController.makePayment);

module.exports = router;
