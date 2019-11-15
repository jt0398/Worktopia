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
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

const NUMBER_OF_PEOPLE = [1, 2, 3, 4, 5];

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
    startDate: null,
    endDate: null,
    focusedInput: null,
    LOCATION_LIST: [],
    FEATURE_LIST: []
  };

  handleDateSelection = ({ startDate, endDate }) =>
    this.setState({ startDate, endDate });

  handleFocusChange = focusedInput => this.setState({ focusedInput });

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
      this.state.workSpaceDailyRate &&
      this.state.startDate &&
      this.state.endDate &&
      this.state.imageFileName
    );
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  handleFileChange = event => {
    this.setState({
      selectedFile: event.target.files[0],
      message: event.target.files[0]
        ? event.target.files[0].name
        : this.state.defaultmessage
    });
  };

  handleUpload = event => {
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
    let featureIdToBeUpated = event.target.id;
    let tempArray = this.state.FEATURE_LIST;
    for (var i in tempArray) {
      if (tempArray[i].label.toString() === featureIdToBeUpated) {
        tempArray[i].status = !tempArray[i].status;
        break; //Stop this loop, we found it!
      }
    }
    console.log(tempArray);
    this.setState({
      FEATURE_LIST: tempArray
    });
  };

  handleSwitchChange = event => {
    this.setState({
      [event.target.id]: !this.state[event.target.id]
    });
  };

  componentDidMount = () => {
    console.log("Component Did mount");
    var tempFeatureList = [];
    API.getFeatureList().then(res => {
      res.data.forEach(feature => {
        tempFeatureList.push({
          name: feature.name,
          label: feature.id,
          status: false
        });
      });
    });
    API.getWorkSpaceById(this.props.match.params.id)
      .then(res => {
        let fetchedWorkSpaceDetail = res.data[0];
        this.setState({
          workSpaceName: fetchedWorkSpaceDetail.name,
          workspaceDescription: fetchedWorkSpaceDetail.description,
          workSpaceLocation:
            fetchedWorkSpaceDetail.WorkspaceLocation.full_address,
          workSpaceOccupancy: fetchedWorkSpaceDetail.no_occupants,
          workSpaceDimensions: fetchedWorkSpaceDetail.dimension,
          workSpaceDailyRate: fetchedWorkSpaceDetail.rental_price,
          activateWorkSpace: fetchedWorkSpaceDetail.isActive
        });

        fetchedWorkSpaceDetail.Features.forEach(workspaceFeature => {
          let featureIdToBeUpated = workspaceFeature.WorkspaceFeature.FeatureId;
          let featureStatusToBeUpdated =
            workspaceFeature.WorkspaceFeature.status;
          for (var i in tempFeatureList) {
            if (tempFeatureList[i].label === featureIdToBeUpated) {
              tempFeatureList[i].status = featureStatusToBeUpdated;
              break; //Stop this loop, we found it!
            }
          }
          this.setState({
            FEATURE_LIST: tempFeatureList
          });
        });

        let ownerId = fetchedWorkSpaceDetail.WorkspaceLocation.UserId;
        API.getDistinctLocationsForOwner(ownerId)
          .then(res => {
            res.data.forEach(location => {
              this.setState({
                LOCATION_LIST: [
                  ...this.state.LOCATION_LIST,
                  location.full_address
                ]
              });
            });
          })
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
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
                    {this.state.LOCATION_LIST.map(location => (
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
                  checked={this.state.activateWorkSpace}
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
              <br></br>
              <DateRangePicker
                startDate={this.state.startDate}
                startDateId="startDate"
                endDate={this.state.endDate}
                endDateId="endDate"
                onDatesChange={this.handleDateSelection}
                focusedInput={this.state.focusedInput}
                onFocusChange={this.handleFocusChange}
              ></DateRangePicker>
              <br></br>
              <br></br>

              <FeatureList
                handleFeatureSelection={this.handleFeatureSelection.bind(this)}
                features={this.state.FEATURE_LIST}
              ></FeatureList>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default WorkSpaceDetail;
