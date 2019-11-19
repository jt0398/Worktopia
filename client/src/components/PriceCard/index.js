import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StripeCheckout from "react-stripe-checkout";
import API from "../../utils/API";
import bookingAPI from "../../utils/BookingAPI";
import axios from "axios";

class PriceCard extends Component {
  onToken = token => {
    API.makePayment(token)
      .then(response => {
        console.log(response.status, response.statusText);

        const booking = {
          start_date: localStorage.getItem("checkinDate"),
          end_date: localStorage.getItem("checkoutDate"),
          rental_price: parseFloat(this.props.rental_price).toFixed(2),
          UserId: localStorage.getItem("UserId"),
          WorkspaceId: this.props.id
        };

        axios.post("/booking/workspace", { booking }).then(respsonse => {
          console.log(response.status, response.statusText);
        });
      })
      .catch(err => {
        console.log("Error");
        console.error(err);
      });
  };

  render() {
    return (
      <Card className="my-3">
        <Card.Body>
          <Card.Text>
            <Row>
              <Col>Price:</Col>
              <Col className="text-right">
                ${parseFloat(this.props.rental_price).toFixed(2)}
              </Col>
            </Row>
            <Row>
              <Col>Tax:</Col>
              <Col className="text-right">
                ${(this.props.rental_price * 0.1).toFixed(2)}
              </Col>
            </Row>
            <Row>
              <Col>Total</Col>
              <Col className="text-right">
                ${(this.props.rental_price * 1.1).toFixed(2)}
              </Col>
            </Row>
            <Row>
              <Col className="mt-2">
                <StripeCheckout
                  name="Worktopia.com"
                  description={this.props.name}
                  amount={parseFloat(
                    this.props.rental_price * 1.1 * 100
                  ).toFixed(2)} //cents
                  currency="CAD"
                  billingAddress
                  locale="auto"
                  stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
                  token={this.onToken}
                  zipCode
                  panelLabel="Pay: " // prepended to the amount in the bottom pay button
                />
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default PriceCard;
