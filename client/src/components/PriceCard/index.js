import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StripeCheckout from "react-stripe-checkout";
import API from "../../utils/API";
import bookingAPI from "../../utils/BookingAPI";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class PriceCard extends Component {
  state = {
    modalStatus: false
  };

  //Return price in cents as numeric. Stripe requirement.
  getAmountInCents() {
    return parseInt(
      this.props.rental_price *
        1.1 *
        100 *
        parseInt(localStorage.getItem("room"))
    );
  }

  //Return price with decimal
  getAmountDisplay() {
    return (
      parseFloat(this.props.rental_price) *
      parseInt(localStorage.getItem("room"))
    );
  }

  //Data submitted to Stripe API
  onToken = token => {
    token.amount = this.getAmountInCents();
    token.description = this.props.name + " booking";

    API.makePayment(token)
      .then(response => {
        console.log(
          "Stripe response = " + response.status + " " + response.statusText
        );

        //Create booking in the database
        const booking = {
          start_date: localStorage.getItem("checkinDate"),
          end_date: localStorage.getItem("checkoutDate"),
          rental_price: (
            parseFloat(this.props.rental_price) *
            parseInt(localStorage.getItem("room")) *
            1.1
          ).toFixed(2),
          UserId: 2,
          WorkspaceId: this.props.id
        };

        bookingAPI.bookWorkspace(booking).then(respsonse => {
          //Remove search params
          localStorage.removeItem("location");
          localStorage.removeItem("checkinDate");
          localStorage.removeItem("checkoutDate");
          localStorage.removeItem("room");
          localStorage.removeItem("people");

          this.handleShow();
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  handleShow = () => {
    this.setState({
      modalStatus: true
    });
  };

  handleClose = () => {
    this.setState({
      modalStatus: false
    });

    //Send user to the My Booking page
    window.location.href = "/user/booking";
  };

  render() {
    return (
      <>
        <Card className="my-3">
          <Card.Body>
            <Row>
              <Col>Price:</Col>
              <Col className="text-right">
                ${this.getAmountDisplay().toFixed(2)}
              </Col>
            </Row>
            <Row>
              <Col>Tax:</Col>
              <Col className="text-right">
                ${(this.getAmountDisplay() * 0.1).toFixed(2)}
              </Col>
            </Row>
            <Row>
              <Col>Total</Col>
              <Col className="text-right">
                ${(this.getAmountDisplay() * 1.1).toFixed(2)}
              </Col>
            </Row>
            <Row>
              <Col className="mt-2">
                {/*Stripe Form */}
                <StripeCheckout
                  name="Worktopia.com"
                  description={this.props.name}
                  amount={this.getAmountInCents()} //cents
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
          </Card.Body>
        </Card>
        <Modal
          show={this.state.modalStatus}
          onHide={this.handleClose}
          size="lg"
          aria-labelledby="Payment processed"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Your payment has been processed.
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={this.handleClose}>OK</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default PriceCard;
