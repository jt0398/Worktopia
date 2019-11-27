import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StripeCheckout from "react-stripe-checkout";
import API from "../../utils/API";
import bookingAPI from "../../utils/BookingAPI";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import moment from "moment";
import { withRouter } from "react-router-dom";

class PriceCard extends Component {
  state = {
    modalStatus: false
  };

  getRentDays() {
    return (
      Math.abs(
        moment(localStorage.getItem("checkinDate")).diff(
          moment(localStorage.getItem("checkoutDate")),
          "days"
        )
      ) + 1
    );
  }

  //Return price in cents as numeric. Stripe requirement.
  getAmountInCents() {
    return parseInt(this.props.rental_price * 1.1 * 100 * this.getRentDays());
  }

  //Return price with decimal
  getAmountDisplay() {
    return parseFloat(this.props.rental_price) * this.getRentDays();
  }

  //Data submitted to Stripe API
  onToken = token => {
    token.amount = this.getAmountInCents();
    token.description = this.props.name + " booking";

    //Create booking in the database
    const booking = {
      start_date: moment(localStorage.getItem("checkinDate")).format(
        "MM/DD/YYYY"
      ),
      end_date: moment(localStorage.getItem("checkoutDate")).format(
        "MM/DD/YYYY"
      ),
      rental_price: (
        parseFloat(this.props.rental_price) *
        this.getRentDays() *
        1.1
      ).toFixed(2),
      UserId: parseInt(localStorage.getItem("UserId")),
      WorkspaceId: parseInt(this.props.id)
    };

    bookingAPI
      .bookWorkspace(booking)
      .then(response => {
        console.log(
          "Booking response = " + response.status + " " + response.statusText
        );

        API.makePayment(token).then(response => {
          console.log(
            "Stripe response = " + response.status + " " + response.statusText
          );

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
    this.props.history.push("/booking/user");
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
                CAD ${(this.getAmountDisplay() * 1.1).toFixed(2)}
                <br />
              </Col>
            </Row>
            <Row>
              <Col className="mt-2">
                {/*Stripe Form */}
                {this.props.allowBooking ? (
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
                ) : (
                  <div className="pt-2 text-danger">
                    Workspace not available on selected dates. Please choose
                    different Check-In/Check-Out dates
                  </div>
                )}
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

export default withRouter(PriceCard);
