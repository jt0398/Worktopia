import React, { Component } from "react";
import API from "../utils/API";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Modal from "react-bootstrap/Modal";
import Footer from "../components/Footer";
import "./css/AddLocation.css";
import Nav from "../components/Nav";

//array of provinces in Canada
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

class AddLocation extends Component {
  state = {
    addr1: "",
    addr2: "",
    city: "",
    province: "",
    postal_code: "",
    country: "Canada",
    userId: null,
    validated: false,
    modalStatus: false,
    linkShow: false,
    display: null
  };
  //If URL includes locationId, pre-populates the fields on mounting
  componentDidMount = () => {
    this.updateLocation(this.props.match.params.id);
  };
  //function to get location details for edit location page
  updateLocation = id => {
    if (id) {
      API.getLocationById(id).then(res => {
        let fetchedLocationDetail = res.data[0];
        this.setState({
          addr1: fetchedLocationDetail.addr1,
          addr2: fetchedLocationDetail.addr2,
          city: fetchedLocationDetail.city,
          province: fetchedLocationDetail.province,
          postal_code: fetchedLocationDetail.postal_code,
          country: fetchedLocationDetail.country,
          userId: parseInt(fetchedLocationDetail.UserId)
        });
      });
    } else {
      this.setState({
        addr1: "",
        addr2: "",
        city: "",
        province: "",
        postal_code: "",
        country: "Canada",
        userId: null
      });
      this.handleDisplay();
    }
  };
  // function to handle input change for textboxes
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  //function to handle dropdown menu selection
  handleProvinceSelection = (eventKey, event) => {
    this.setState({
      province: eventKey
    });
  };
  // function invoked on form submit, included validations
  handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    form.classList.remove("was-validated");

    const addressInput = document.getElementsByName("addr1")[0];
    const cityInput = document.getElementsByName("city")[0];
    const provinceInput = document.getElementsByName("province")[0];
    const postalInput = document.getElementsByName("postal_code")[0];

    if (addressInput.value === " " || "") {
      addressInput.setCustomValidity("Invalid field.");
    } else {
      addressInput.setCustomValidity("");
    }

    if (cityInput.value === " " || "") {
      cityInput.setCustomValidity("Invalid field.");
    } else {
      cityInput.setCustomValidity("");
    }

    if (provinceInput.value.includes("Choose")) {
      provinceInput.setCustomValidity("Invalid field.");
    } else {
      provinceInput.setCustomValidity("");
    }

    if (postalInput.value === " " || "" || postalInput.value.length > 7) {
      postalInput.setCustomValidity("Invalid field.");
    } else {
      postalInput.setCustomValidity("");
    }

    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      this.setState({ validated: true });
    } else {
      //if URL contains location ID i.e edit location, update the DB, else insert new address into DB
      if (this.props.match.params.id) {
        API.updateLocation(this.props.match.params.id, {
          addr1: this.state.addr1,
          addr2: this.state.addr2,
          city: this.state.city,
          province: this.state.province,
          country: this.state.country,
          postal_code: this.state.postal_code,
          UserId: parseInt(localStorage.getItem("UserId"))
        })
          .then(res => this.handleShow())
          .catch(err => console.log(err));
      } else {
        API.saveLocation({
          addr1: this.state.addr1,
          addr2: this.state.addr2,
          city: this.state.city,
          province: this.state.province,
          postal_code: this.state.postal_code,
          country: this.state.country,
          UserId: parseInt(localStorage.getItem("UserId"))
        })
          .then(res => {
            this.setState({
              addr1: "",
              addr2: "",
              city: "",
              province: "",
              postal_code: "",
              country: "Canada"
            });
            this.handleShow();
          })
          .catch(err => console.log(err));
      }
    }
  };
  //reset state on cancel, clears all fields

  handleCancel = event => {
    event.preventDefault();
    let path = "/owner";
    this.props.history.push(path);
  };
  //sets modal
  handleShow = () => {
    this.setState({
      modalStatus: true
    });
  };
  //handles modal close
  handleClose = () => {
    this.setState({ modalStatus: false });
  };
  //handles link
  handleDisplay = () => {
    this.setState({ display: "none" });
  };

  render() {
    return (
      <>
        <Nav isLoggedIn={this.props.isLoggedIn} isOwner={this.props.isOwner} />
        <Container fluid>
          <div className="locationBg">
            <div className="locheader">Add Location</div>
            <br />
            <Row>
              <Col size="md-2">
                &nbsp;&nbsp;&nbsp;
                <Link style={{ display: this.state.display }} to="/owner">
                  ← Back to Dashboard
                </Link>
              </Col>
            </Row>
            <Form
              noValidate
              validated={this.state.validated}
              onSubmit={this.handleSubmit}
            >
              {/* <div className="formAddress"> */}
              <Form.Group className="formAddress">
                <Col md={12}>
                  {/* <div className="formLabel"> */}
                  <Form.Label className="formLabel">Address</Form.Label>
                  {/* </div> */}
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter address"
                    value={this.state.addr1}
                    onChange={this.handleInputChange}
                    name="addr1"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter an address
                  </Form.Control.Feedback>
                </Col>
                <br></br>
                <Col md={12}>
                  {/* <div className="formLabel"> */}
                  <Form.Label className="formLabel">Address 2</Form.Label>
                  {/* </div> */}
                  <Form.Control
                    type="text"
                    placeholder="Enter address"
                    value={this.state.addr2}
                    onChange={this.handleInputChange}
                    name="addr2"
                  />
                </Col>
                <br></br>
                <Col md={6}>
                  {/* <div className="formLabel"> */}
                  <Form.Label className="formLabel">City</Form.Label>
                  {/* </div> */}
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter city"
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    name="city"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city
                  </Form.Control.Feedback>
                </Col>
                <br></br>
                <Col md={4}>
                  {/* <div className="formLabel"> */}
                  <Form.Label className="formLabel">Province</Form.Label>
                  {/* </div> */}
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="dark"
                      className="dropdown-basic"
                      id="dropdownBasic"
                      name="province"
                    >
                      {this.state.province || "Choose Province"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {provinceList.map((province, index) => (
                        <Dropdown.Item
                          key={province[1]}
                          eventKey={province[1]}
                          onSelect={this.handleProvinceSelection}
                          name="province"
                        >
                          {province[0]}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <br></br>
                <Col md={4}>
                  {/* <div className="formLabel"> */}
                  <Form.Label className="formLabel">Postal Code</Form.Label>
                  {/* </div> */}
                  <Form.Control
                    required
                    type="text"
                    placeholder="Enter postal code"
                    value={this.state.postal_code}
                    onChange={this.handleInputChange}
                    name="postal_code"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid postal code
                  </Form.Control.Feedback>
                </Col>
                <br></br>
                <Col md={6}>
                  {/* <div className="formLabel"> */}
                  <Form.Label className="formLabel">Country</Form.Label>
                  {/* </div> */}
                  <Form.Control
                    type="text"
                    placeholder={this.state.country}
                    value={this.state.country}
                    disabled="disabled"
                    onChange={this.handleInputChange}
                    name="country"
                  />
                </Col>
                <br></br>
              </Form.Group>
              <Col md={6}>
                {/* <div id="locationBtn1"> */}
                <Button
                  id="locationBtn"
                  variant="primary"
                  type="submit"
                  className="btn btn-dark"
                >
                  Save
                </Button>
                {/* </div> */}
                &nbsp;&nbsp;&nbsp;
                <Button
                  id="locationBtn"
                  variant="secondary"
                  type="button"
                  className="btn btn-dark"
                  onClick={this.handleCancel}
                >
                  Cancel
                </Button>
                {/* </div> */}
              </Col>
              {/* <div className="locationFooter"> */}
              <Footer className="locationFooter" />
              {/* </div> */}
              {/* </div> */}
            </Form>
            <Modal
              show={this.state.modalStatus}
              onHide={this.handleClose}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Location succesfully updated!
                </Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button onClick={this.handleClose}>OK</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Container>
      </>
    );
  }
}

export default withRouter(AddLocation);
