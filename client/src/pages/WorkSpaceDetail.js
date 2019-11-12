import React, { Component } from "react";
import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Jumbotron from "react-bootstrap/Jumbotron";
import FileUpload from "../components/FileUpload";
import FeatureList from "../components/FeatureList";

const LOCATION_LIST = ["Mississauga", "Toronto"];

const NUMBER_OF_PEOPLE = [1, 2, 3];

class WorkSpaceDetail extends Component {
  state = {
    workSpaceName: "",
    workspaceDescription: "",
    workSpaceLocation: "",
    workSpaceOccupancy: 0,
    workSpaceDimensions: "",
    workSpaceDailyRate: "",
    selectedFile: null,
    message: "Choose a file...",
    defaultmessage: "Choose a file...",
    uploading: false,
    imageFileName: "",
    activateWorkSpace: false,
    features: {}
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleDropDownSelection = (eventKey, event) => {
    this.setState({
      [event.target.name]: eventKey
    });
  };

  validateFormCompletion = () => {
    return !(
      this.state.workSpaceName &&
      this.state.workspaceDescription &&
      this.state.workSpaceLocation &&
      this.state.workSpaceOccupancy &&
      this.state.workSpaceDimensions &&
      this.state.workSpaceDailyRate
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleFileChange = event => {
    console.log("Detected file selection");
    this.setState({
      selectedFile: event.target.files[0],
      message: event.target.files[0]
        ? event.target.files[0].name
        : this.state.defaultmessage
    });
  };
  handleUpload = event => {
    console.log("Going to upload selected file");

    event.preventDefault();
    if (this.state.uploading) {
      return;
    }
    if (!this.state.selectedFile) {
      this.setState({ message: "Select a file first" });
      return;
    }
    this.setState({ uploading: true });

    const data = new FormData();
    data.append("file", this.state.selectedFile, this.state.selectedFile.name);
    API.fileUpload(data)
      .then(res => {
        this.setState({
          selectedFile: null,
          message: "Uploaded successfully",
          uploading: false,
          imageFileName: res.data.saveAs
        });
      })
      .catch(err => {
        console.error(err);
        this.setState({
          uploading: false,
          message: "Failed to upload"
        });
      });
  };

  handleFeatureSelection = event => {
    this.setState({
      features: {
        ...this.state.features,
        [event.target.id]: !this.state.features[event.target.id]
      }
    });
  };

  handleSwitchChange = event => {
    console.log(event.target);
    this.setState({
      [event.target.id]: !this.state[event.target.id]
    });
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
                        key={location}
                        onSelect={this.handleDropDownSelection}
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
                        key={number}
                        onSelect={this.handleDropDownSelection}
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
                  id="activateWorkSpace"
                  label="Activate Workspace"
                  onChange={this.handleSwitchChange}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                className="btn btn-success"
                disabled={this.validateFormCompletion()}
                onClick={this.handleFormSubmit}
              >
                Submit
              </Button>
            </Form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <FileUpload
                handleUpload={this.handleUpload.bind(this)}
                handleFileChange={this.handleFileChange.bind(this)}
                message={this.state.message}
              ></FileUpload>
              <FeatureList
                handleFeatureSelection={this.handleFeatureSelection.bind(this)}
              ></FeatureList>
            </Jumbotron>
            <Jumbotron>Calendar function</Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WorkSpaceDetail;
