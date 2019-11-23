import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import API from "../../utils/API";

class UserRegistration extends Component {
  state = {
    validated: false,
    username: "alex",
    password: "abc",
    email: "alex@gmail.com",
    address: "address",
    city: "city",
    province: "ON",
    postalcode: "L",
    phoneno: "1",
    userrole: 2,
    modalStatus: false
  };
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = event => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();

      return;
    }

    event.preventDefault();
    event.stopPropagation();

    const user = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      addr1: this.state.address,
      city: this.state.city,
      province: this.state.province,
      postal_code: this.state.postalcode,
      phone_no: this.state.phoneno,
      UserRoleId: this.state.userrole
    };

    API.createUser(user)
      .then(response => {
        console.log("Succesfully SignedUp");
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("Error");
        this.setState({
          modalStatus: true
        });
        console.error(err);
      });

    this.setState({
      validated: true
    });
  };

  handleClose = () => {
    this.setState({
      modalStatus: false
    });
  };

  render() {
    const provinceList = [
      ["Alberta", "AB"],
      ["British Columbia", "BC"],
      ["Manitoba", "MB"],
      ["New Brunswick", "NB"],
      ["Newfoundland and Labrador", "NL"],
      ["Northwest Territories", "NT"],
      ["Nova Scotia", "NS"],
      ["Nunavut", "NU"],
      ["Ontario", "ON"],
      ["Prince Edward Island", "PE"],
      ["Quebec", "QC"],
      ["Saskatchewan", "SK"],
      ["Yukon Territory", "YT"]
    ];

    return (
      <Container>
        <Row>
          <Col>
            <Form
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleOnSubmit}
            >
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Username</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.username}
                    name="username"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid username.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Email</strong>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.email}
                    name="email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Password</strong>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.password}
                    name="password"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid password.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Address</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.address}
                    name="address"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid address.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>City</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.city}
                    name="city"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Province</strong>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.province}
                    name="province"
                  >
                    <option>Choose...</option>
                    {provinceList.map((province, index) => {
                      return (
                        <option key={province[1]} value={province[1]}>
                          {province[0]}
                        </option>
                      );
                    })}
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid province.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Postal Code</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.postalcode}
                    name="postalcode"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid postal code.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Phone No</strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.phoneno}
                    name="phoneno"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid phone no.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>User Role</strong>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    required
                    onChange={this.handleInputChange}
                    value={this.state.userrole}
                    name="userrole"
                  >
                    <option>Choose...</option>
                    <option key="1" value="1">
                      Owner
                    </option>
                    <option key="2" value="2">
                      Customer
                    </option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid uesr role.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Button type="submit" className="btn btn-info">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Modal
          show={this.state.modalStatus}
          onHide={this.handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Something went wrong!!!
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={this.handleClose}>OK</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default withRouter(UserRegistration);
