import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StripeCheckout from "react-stripe-checkout";
import API from "../../utils/API";
import bookingAPI from "../../utils/BookingAPI";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class PriceCard extends Component {
  state = {
    modalStatus: false
  };

  onToken = token => {
    const payment = {
      id: token,
      amount: parseFloat(this.props.rental_price * 1.1 * 100).toFixed(2),
      description: this.props.name + " booking"
    };

    API.makePayment(token)
      .then(response => {
        console.log(
          "Stripe response = " + response.status + " " + response.statusText
        );

        const booking = {
          start_date: localStorage.getItem("checkinDate"),
          end_date: localStorage.getItem("checkoutDate"),
          rental_price: parseFloat(this.props.rental_price).toFixed(2),
          UserId: localStorage.getItem("UserId"),
          WorkspaceId: this.props.id
        };

        axios.post("/booking/workspace", { booking }).then(respsonse => {
          console.log(
            "Create booking response = " +
              response.status +
              " " +
              response.statusText
          );

          localStorage.removeItem("location");
          localStorage.removeItem("checkinDate");
          localStorage.removeItem("checkoutDate");
          localStorage.removeItem("room");
          localStorage.removeItem("people");

          this.handleShow();
        });
      })
      .catch(err => {
        console.log("Error");
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

    window.location.href = "/user/booking";
  };

  render() {
    return (
      <>
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
