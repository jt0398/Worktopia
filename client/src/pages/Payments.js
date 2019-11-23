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
        console.log("Error");
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
          // image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png"
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
