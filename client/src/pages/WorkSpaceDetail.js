import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

const LOCATION_LIST = ["Mississauga", "Toronto"];

const NUMBER_OF_PEOPLE = [1, 2, 3];

class WorkSpaceDetail extends Component {
  state = {
    workSpaceName: "",
    workspaceDescription: "",
    workSpaceLocation: "",
    workSpaceOccupancy: 0,
    workSpaceDimensions: "",
    workSpaceDailyRate: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleLocationSelection = (eventKey, event) => {
    // const { name, value } = {event.target.name, eventKey};
    this.setState({
      workSpaceLocation: eventKey
    });
  };

  handleOccupancySelection = (eventKey, event) => {
    this.setState({
      workSpaceOccupancy: eventKey
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Form>
              <Form.Group>
                <Form.Label>Work Space Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your workspace name..."
                  value={this.state.workSpaceName}
                  onChange={this.handleInputChange}
                  name="workSpaceName"
                />
                <br></br>
                <Form.Label>Workspace Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="3"
                  value={this.state.workspaceDescription}
                  onChange={this.handleInputChange}
                  name="workspaceDescription"
                  placeholder="Describe your workspace"
                />
                <br></br>
                <Form.Label>Workspace Location</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.state.workSpaceLocation ||
                      "Choose from your locations..."}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {LOCATION_LIST.map(location => (
                      <Dropdown.Item
                        eventKey={location}
                        onSelect={this.handleLocationSelection}
                        name="workSpaceLocation"
                      >
                        {location}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <br></br>
                <Form.Label>Workspace Occupancy</Form.Label>
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {this.state.workSpaceOccupancy ||
                      "How many people can occupy the workspace?"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {NUMBER_OF_PEOPLE.map(number => (
                      <Dropdown.Item
                        eventKey={number}
                        onSelect={this.handleOccupancySelection}
                        name="workSpaceOccupancy"
                      >
                        {number}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
                <br></br>
                <Form.Label>Work Space dimensions</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your workspace dimensions..."
                  value={this.state.workSpaceDimensions}
                  onChange={this.handleInputChange}
                  name="workSpaceDimensions"
                />
                <br></br>
                <Form.Label>Work Space rates</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the daily rate for the workspace.."
                  value={this.state.workSpaceDailyRate}
                  onChange={this.handleInputChange}
                  name="workSpaceDailyRate"
                />
                <br></br>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Activate Workspace"
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="btn btn-success"
                disabled={
                  !(
                    this.state.workSpaceName &&
                    this.state.workspaceDescription &&
                    this.state.workSpaceLocation &&
                    this.state.workSpaceOccupancy &&
                    this.state.workSpaceDimensions &&
                    this.state.workSpaceDailyRate
                  )
                }
                onClick={this.handleFormSubmit}
              >
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WorkSpaceDetail;
