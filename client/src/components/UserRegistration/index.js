import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import API from "../../utils/API";

const styles = {
  border: "none",
  borderBottom: "1px solid black"
};

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
    modalStatus: false,
    validateformModel: false,
    modalMessage: null
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
        console.error(err);
        this.setState({
          modalStatus: true,
          modalMessage:
            err.response.data === 1062
              ? "Sorry, user name is already taken!!"
              : null
        });
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

  handleFormClose = () => {
    this.setState({
      validateformModel: false
    });
  };

  validatefunction = () => {
    if (
      this.state.username === "" ||
      this.state.password === "" ||
      this.state.email === "" ||
      this.state.address === "" ||
      this.state.city === "" ||
      this.state.province === "" ||
      this.state.postalcode === "" ||
      this.state.phoneno === "" ||
      this.state.userrole === ""
    ) {
      this.setState({
        validateformModel: true
      });
    }
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
          <Col className="text-center">
            <h3 style={{ color: "darkorange" }}>SIGNUP FORM</h3>
          </Col>
        </Row>
        <Row
          style={{
            width: "32rem",
            margin: "auto"
          }}
        >
          <Col
            style={{
              boxShadow: "0px 0px 15px #b3b3b3",
              padding: "25px",
              border: "1px solid black"
            }}
          >
            <Form
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleOnSubmit}
            >
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>
                    <span style={{ color: "red" }}>
                      <sup>* &nbsp;</sup>Required Fields
                    </span>
                  </Form.Label>
                  <br></br>
                  <Form.Label>
                    <strong>
                      Username &nbsp;<sup style={{ color: "red" }}>*</sup>
                    </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    style={styles}
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
                    <strong>
                      Email &nbsp;<sup style={{ color: "red" }}>*</sup>
                    </strong>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    required
                    style={styles}
                    onChange={this.handleInputChange}
                    value={this.state.email}
                    name="email"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>
                      Password &nbsp;<sup style={{ color: "red" }}>*</sup>
                    </strong>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    required
                    style={styles}
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
                    <strong>
                      Address &nbsp;<sup style={{ color: "red" }}>*</sup>
                    </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    style={styles}
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
                    <strong>
                      City&nbsp;<sup style={{ color: "red" }}>*</sup>
                    </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    style={styles}
                    onChange={this.handleInputChange}
                    value={this.state.city}
                    name="city"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>Province</strong>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    required
                    style={styles}
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
                    <strong>
                      Postal Code&nbsp;<sup style={{ color: "red" }}>*</sup>
                    </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    style={styles}
                    onChange={this.handleInputChange}
                    value={this.state.postalcode}
                    name="postalcode"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid postal code.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>
                    <strong>
                      Phone No&nbsp;<sup style={{ color: "red" }}>*</sup>
                    </strong>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    required
                    style={styles}
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
                    <strong>
                      User Role&nbsp;<sup style={{ color: "red" }}>*</sup>
                    </strong>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    required
                    style={styles}
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
                    Please provide a valid user role.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Button
                type="submit"
                className="btn btn-info"
                onClick={this.validatefunction}
              >
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
              {this.state.modalMessage || "Something went wrong!!!"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={this.handleClose}>OK</Button>
          </Modal.Footer>
        </Modal>
        {/*  */}
        <Modal
          show={this.state.validateformModel}
          onHide={this.handleFormClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Please Enter all required Fields.. !!
            </Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Button onClick={this.handleFormClose}>OK</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default withRouter(UserRegistration);
