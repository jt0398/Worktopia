import React, { Component } from "react";
import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Alert from "react-bootstrap/Alert";

const provinceList = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"];

class AddLocation extends Component {
    state = {
        addr1: "",
        addr2: "",
        city: "",
        province: "",
        postal_code: ""
    }

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
    };

    handleCancel = event => {
        event.preventdefault();
        this.setState({
            addr1: "",
            addr2: "",
            city: "",
            province: "",
            postal_code: ""
        });
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Form>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter address"
                                    value={this.state.addr1}
                                    onChange={this.handleInputChange}
                                    name="addr1"
                                />
                                <br></br>
                                <Form.Label>Address 2</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter address"
                                    value={this.state.addr2}
                                    onChange={this.handleInputChange}
                                    name="addr2"
                                />
                                <br></br>
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter city"
                                    value={this.state.city}
                                    onChange={this.handleInputChange}
                                    name="city"
                                />
                                <br></br>
                                <Form.Label>Province</Form.Label>
                                <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
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
                                <br></br>
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter postal code"
                                    value={this.state.postal_code}
                                    onChange={this.handleInputChange}
                                    name="postal_code"
                                />
                                <br></br>
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-success"
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
                            <Button
                                variant="secondary"
                                type="button"
                                className="btn btn-success"
                                onClick={this.handleCancel}
                            >
                                Cancel
                            </Button>

                        </Form>
                    </Col>
                </Row>
            </Container>

        );
    }


}

export default AddLocation;