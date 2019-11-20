import React, { Component } from "react";
import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Footer from "../components/Footer";
import "./css/AddLocation.css";

const provinceList = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Northwest Territories",
  "Nova Scotia",
  "Nunavut",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Yukon Territory"
];

class AddLocation extends Component {
  state = {
    addr1: "",
    addr2: "",
    city: "",
    province: "",
    postal_code: "",
    locationId: null,
    userId: null
  };

  componentDidMount = () => {
    this.updateLocation(this.props.match.params.id);
  };

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
          locationId: parseInt(fetchedLocationDetail.id),
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
        locationId: null,
        userId: null
      });
    }
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleProvinceSelection = (eventKey, event) => {
    this.setState({
      province: eventKey
    });
  };

  handleSave = event => {
    event.preventDefault();
    // event.stopPropagation();
    if (this.props.match.params.id) {
      API.updateLocation(this.props.match.params.id, {
        addr1: this.state.addr1,
        addr2: this.state.addr2,
        city: this.state.city,
        province: this.state.province,
        postal_code: this.state.postal_code,
        UserId: 2
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    } else {
      API.saveLocation({
        addr1: this.state.addr1,
        addr2: this.state.addr2,
        city: this.state.city,
        province: this.state.province,
        postal_code: this.state.postal_code,
        UserId: 2
      })
        .then(res => {
          this.setState({
            addr1: "",
            addr2: "",
            city: "",
            province: "",
            postal_code: ""
          });
        })
        .catch(err => console.log(err));
    }
  };

  handleCancel = event => {
    event.preventDefault();
    this.setState({
      addr1: "",
      addr2: "",
      city: "",
      province: "",
      postal_code: ""
    });
  };

  render() {
    return (
      <Container fluid>
        <div className="locationBg">
          <div className="locheader">Add Location</div>
          <Form>
            <div className="formAddress">
              <Form.Group>
                <Col md={12}>
                  <div className="formLabel">
                    <Form.Label>Address</Form.Label>
                  </div>

                  <Form.Control
                    type="text"
                    placeholder="Enter address"
                    value={this.state.addr1}
                    onChange={this.handleInputChange}
                    name="addr1"
                  />
                </Col>

                <br></br>
                <Col md={12}>
                  <div className="formLabel">
                    <Form.Label>Address 2</Form.Label>
                  </div>
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
                  <div className="formLabel">
                    <Form.Label>City</Form.Label>
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Enter city"
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    name="city"
                  />
                </Col>

                <br></br>
                <Col md={4}>
                  <div className="formLabel">
                    <Form.Label>Province</Form.Label>
                  </div>
                  <Dropdown>
                    <Dropdown.Toggle variant="dark" className="dropdown-basic" id="dropdownBasic">
                      {this.state.province || "Choose Province"}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {provinceList.map(province => (
                        <Dropdown.Item
                          key={province}
                          eventKey={province}
                          onSelect={this.handleProvinceSelection}
                          name="province"
                        >
                          {province}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>

                <br></br>
                <Col md={4}>
                  <div className="formLabel">
                    <Form.Label>Postal Code</Form.Label>
                  </div>
                  <Form.Control
                    type="text"
                    placeholder="Enter postal code"
                    value={this.state.postal_code}
                    onChange={this.handleInputChange}
                    name="postal_code"
                  />
                </Col>

                <br></br>
              </Form.Group>
              <Col md={6}>
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-dark"
                  disabled={
                    !(
                      this.state.addr1 &&
                      this.state.city &&
                      this.state.province &&
                      this.state.postal_code
                    )
                  }
                  onClick={this.handleSave}
                >
                  Save
                </Button>
                &nbsp;&nbsp;&nbsp;
                <Button
                  variant="secondary"
                  type="button"
                  className="btn btn-dark"
                  onClick={this.handleCancel}
                >
                  Cancel
                </Button>
              </Col>

              <div className="locationFooter">
                <Footer />
              </div>
            </div>
          </Form>
        </div>
      </Container>
    );
  }
}

export default AddLocation;
