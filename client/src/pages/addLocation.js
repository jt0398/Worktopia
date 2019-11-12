import React, { Component } from "react";
import { Input, DropBox, DropBoxItem, FormBtn, Label } from "../components/Form/index";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown"

const provinceList = ["Ontario", "Alberta"];

class AddLocation extends Component {
    state = {
        locationName: "",
        address: "",
        city: "",
        province: "",
        postalCode: ""
    }
    handleInputChange = event => {
        const {name, value} = event.target;
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
        event.preventdefault();

    };

    handleCancel = event => {
        event.preventdefault();
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Form>
                            <Form.Group>
                                <Form.Label>Location Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter location name"
                                    value={this.state.locationName}
                                    onChange={this.handleInputChange}
                                    name="locationName"
                                />
                                <br></br>
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter address"
                                    value={this.state.address}
                                    onChange={this.handleInputChange}
                                    name="address"
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
                                    value={this.state.postalCode}
                                    onChange={this.handleInputChange}
                                    name="postalCode"
                                />
                                <br></br>
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                className="btn btn-success"
                                disabled={
                                    !(
                                        this.state.locationName &&
                                        this.state.address &&
                                        this.state.city &&
                                        this.state.province &&
                                        this.state.postalCode
                                        
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