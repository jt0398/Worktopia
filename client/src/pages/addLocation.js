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


const provinceList = [["Alberta", "AB"], ["British Columbia", "BC"], ["Manitoba", "MB"], ["New Brunswick", "NB"], ["Newfoundland and Labrador", "NL"], ["Northwest Territories", "NT"], ["Nova Scotia", "NS"], ["Nunavut", "NU"], ["Ontario", "ON"], ["Prince Edward Island", "PE"], ["Quebec", "QC"], ["Saskatchewan", "SK"], ["Yukon Territory", "YT"]];

class AddLocation extends Component {
    state = {
        addr1: "",
        addr2: "",
        city: "",
        province: "",
        postal_code: "",
        locationId: null,
        userId: null,
        isSubmitAllowed: false
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
                country: "Canada",
                locationId: null,
                userId: null
            });
        }
    };

    componentDidMount = () => {
        this.updateLocation(this.props.match.params.id);
    };

    updateLocation = id => {
        if (id) {
            API.getLocationById(id)
                .then(res => {
                    let fetchedLocationDetail = res.data[0];
                    this.setState({
                        addr1: fetchedLocationDetail.addr1,
                        addr2: fetchedLocationDetail.addr2,
                        city: fetchedLocationDetail.city,
                        province: fetchedLocationDetail.province,
                        postal_code: fetchedLocationDetail.postal_code,
                        country: fetchedLocationDetail.country,
                        locationId: parseInt(fetchedLocationDetail.id),
                        userId: parseInt(fetchedLocationDetail.UserId)

                    });
                })
        }
        else {
            this.setState({
                addr1: "",
                addr2: "",
                city: "",
                province: "",
                postal_code: "",
                country: "Canada",
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
                country: this.state.country,
                postal_code: this.state.postal_code,
                UserId: 2
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
        else {
            API.saveLocation({

                addr1: this.state.addr1,
                addr2: this.state.addr2,
                city: this.state.city,
                province: this.state.province,
                postal_code: this.state.postal_code,
                country: this.state.country,
                UserId: 2
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
            postal_code: "",
            country: "Canada"
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
                                        <Dropdown.Toggle
                                            variant="dark"
                                            className="dropdown-basic"
                                            id="dropdownBasic"
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
                                <Col md={6}>
                                    <div className="formLabel">
                                        <Form.Label>Country</Form.Label>
                                    </div>
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
                            <div className="locationFooter">
                                <Footer />
                            </div>
                        </div>
                    </Form>
                </div>
            </Container>
        );
    };

};


export default AddLocation;