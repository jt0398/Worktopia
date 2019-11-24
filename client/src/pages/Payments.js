// Import required Components
import React from "react";
import StripeCheckout from "react-stripe-checkout";
import API from "../utils/API";

// export the Payment class
export default class Payments extends React.Component {
  onToken = token => {
    API.makePayment(token)
      .then(response => {
        console.log(response.status, response.statusText);
      })
      .catch(err => {
        console.error(err);
      });
  };

  // Render the page
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        {/* Calling the stripeCheckout Component */}
        <StripeCheckout
          name="Worktopia.com"
          description="Payment for booking id"
          amount={100} //cents
          currency="CAD"
          billingAddress
          locale="auto"
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
          token={this.onToken}
          zipCode
          panelLabel="Pay: " // prepended to the amount in the bottom pay button
        />
      </div>
    );
  }
}
