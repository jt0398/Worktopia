const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SECRET_KEY);

module.exports = {
  makePayment: async function(req, res) {
    const token = req.body.id; // Using Express
    const charge = await stripe.charges
      .create({
        amount: 100, //Make sure this is passed in CENTS
        currency: "cad",
        description: "Example charge",
        source: token
      })
      .then(resp => {
        console.log(
          `Payment Success for request token ${token} charge ${resp.id}`
        );
        res.json(resp);
      })
      .catch(err => {
        console.log("Payment Failed for request");
        console.error(err);
        res.status(400);
      });
  }
};
