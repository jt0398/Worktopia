import React, { Component } from "react";
import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Jumbotron from "react-bootstrap/Jumbotron";
import Modal from "react-bootstrap/Modal";
import FileUpload from "../components/FileUpload";
import FeatureList from "../components/FeatureList";
import "react-dates/initialize";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import Footer from "../components/Footer";
import { RemainingChar } from "../components/Form";
import "./css/WorkSpaceDetail.css";
var moment = require("moment");

const NUMBER_OF_PEOPLE = [1, 2, 3, 4, 5];
const OWNER_ID = localStorage.getItem("UserId");

class WorkSpaceDetail extends Component {
  state = {
    workSpaceId: null,
    workSpaceName: "",
    workspaceDescription: "",
    workSpaceLocation: "",
    workSpaceLocationName: "",
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
    FEATURE_LIST: [],
    BOOKED_DATES: [],
    modalStatus: false,
    validated: false
  };

  handleDateSelection = ({ startDate, endDate }) => {
    this.setState({ startDate, endDate });
  };

  handleFocusChange = focusedInput => this.setState({ focusedInput });

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleDropDownSelection = (eventKey, event) => {
    const { name, id } = event.target;
    this.setState({
      [name]: parseInt(id)
    });
    if (name === "workSpaceLocation") {
      this.setState({
        workSpaceLocationName: eventKey
      });
    }
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      this.setState({ validated: true });
    } else {
      this.setState({ validated: true });
      let workSpaceDetailObject = this.state;
      delete workSpaceDetailObject.selectedFile;
      delete workSpaceDetailObject.message;
      delete workSpaceDetailObject.defaultmessage;
      delete workSpaceDetailObject.uploading;
      delete workSpaceDetailObject.focusedInput;
      // delete workSpaceDetailObject.LOCATION_LIST;
      if (workSpaceDetailObject.workSpaceId) {
        API.updateWorkSpaceObject(workSpaceDetailObject)
          .then(res => {
            this.handleShow();
          })
          .catch(err => console.error(err));
      } else {
        API.createWorkSpaceObject(workSpaceDetailObject)
          .then(res => {
            this.handleShow();
          })
          .catch(err => console.error(err));
      }
    }
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
          imageFileName: res.data.publicUrl
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
    this.setState({
      FEATURE_LIST: tempArray
    });
  };

  handleSwitchChange = event => {
    this.setState({
      [event.target.id]: !this.state[event.target.id]
    });
  };

  loadLocationsByOwner = ownerId => {
    API.getDistinctLocationsForOwner(ownerId)
      .then(res => {
        res.data.forEach(location => {
          this.setState({
            LOCATION_LIST: [
              ...this.state.LOCATION_LIST,
              { fullAdress: location.full_address, locationId: location.id }
            ]
          });
        });
      })
      .catch(err => console.error(err));
  };

  loadFeaturesForWorkSpace = async currentFeatures => {
    var tempFeatureList = [];
    const res = await API.getFeatureList();
    res.data.forEach(feature => {
      tempFeatureList.push({
        name: feature.name,
        label: feature.id,
        status: false
      });
    });

    if (currentFeatures) {
      currentFeatures.forEach(workspaceFeature => {
        let featureIdToBeUpated = workspaceFeature.WorkspaceFeature.FeatureId;
        let featureStatusToBeUpdated = workspaceFeature.WorkspaceFeature.status;
        let tempFeature = tempFeatureList.find(
          x => x.label === featureIdToBeUpated
        );
        if (tempFeature) {
          tempFeature.status = featureStatusToBeUpdated;
        }
      });
      this.setState({
        FEATURE_LIST: tempFeatureList
      });
    } else {
      this.setState({
        FEATURE_LIST: tempFeatureList
      });
    }
  };

  loadWorkSpaceDetails = () => {
    API.getWorkSpaceById(this.props.match.params.id)
      .then(res => {
        let fetchedWorkSpaceDetail = res.data[0];
        let availabilityArray = fetchedWorkSpaceDetail.WorkspaceAvailabilities;
        this.setState({
          workSpaceId: parseInt(fetchedWorkSpaceDetail.id),
          workSpaceName: fetchedWorkSpaceDetail.name,
          workspaceDescription: fetchedWorkSpaceDetail.description,
          workSpaceLocationName:
            fetchedWorkSpaceDetail.WorkspaceLocation.full_address,
          workSpaceLocation: fetchedWorkSpaceDetail.WorkspaceLocation.id,
          workSpaceOccupancy: fetchedWorkSpaceDetail.no_occupants,
          workSpaceDimensions: fetchedWorkSpaceDetail.dimension,
          workSpaceDailyRate: fetchedWorkSpaceDetail.rental_price,
          activateWorkSpace: fetchedWorkSpaceDetail.isActive,
          startDate: moment(availabilityArray[0].date),
          endDate: moment(availabilityArray[availabilityArray.length - 1].date)
        });
        this.loadFeaturesForWorkSpace(fetchedWorkSpaceDetail.Features);
        let ownerId = fetchedWorkSpaceDetail.WorkspaceLocation.UserId;
        this.loadLocationsByOwner(ownerId);
      })
      .catch(err => console.error(err));
  };

  componentDidMount = () => {
    API.getBookingByWorkspace(this.props.match.params.id).then(res => {
      var tempBookingList = [];
      res.data.forEach(booking => {
        var currentDate = moment(booking.start_date);
        var stopDate = moment(booking.end_date).add(1, "days");
        while (currentDate <= stopDate) {
          tempBookingList.push(moment(currentDate).format("MM/DD/YYYY"));
          currentDate = moment(currentDate).add(1, "days");
        }
      });
      this.setState({
        BOOKED_DATES: tempBookingList
      });
    });

    if (this.props.match.params.id) {
      this.loadWorkSpaceDetails();
    } else {
      this.loadFeaturesForWorkSpace();
      this.loadLocationsByOwner(OWNER_ID);
    }
  };

  checkIfDayIsBlocked = momentDate => {
    let dateBeingChecked = momentDate.format("MM/DD/YYYY");
    if (this.state.BOOKED_DATES.indexOf(dateBeingChecked) === -1) {
      return false;
    } else {
      return true;
    }
  };

  handleShow = () => {
    this.setState({
      modalStatus: true
    });
  };

  handleClose = () => {
    this.setState({
      modalStatus: false
    });
  };

  render() {
    return (
      <Container fluid>
        <div className="bg">
          <div className="header">WorkSpace</div>
          <div className="paddingWD">
            <Row>
              <Col size="md-6">
                <Form
                  noValidate
                  validated={this.state.validated}
                  onSubmit={this.handleFormSubmit}
                >
                  <Form.Group>
                    <div className="titleText">
                      <Form.Label>Work Space Name</Form.Label>
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Enter your workspace name..."
                      value={this.state.workSpaceName}
                      onChange={this.handleInputChange}
                      name="workSpaceName"
                      maxLength={50}
                      required
                    />
                    <RemainingChar
                      remainingCharCount={50 - this.state.workSpaceName.length}
                    ></RemainingChar>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                    <br></br>
                    <div className="titleText">
                      <Form.Label>Workspace Description</Form.Label>
                    </div>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      value={this.state.workspaceDescription}
                      onChange={this.handleInputChange}
                      name="workspaceDescription"
                      placeholder="Describe your workspace"
                      maxLength={250}
                      required
                    />
                    <RemainingChar
                      remainingCharCount={
                        250 - this.state.workspaceDescription.length
                      }
                    ></RemainingChar>
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                    <br></br>
                    <div className="titleText">
                      <Form.Label>Workspace Location</Form.Label>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle variant="info" id="dropdown-basic">
                        {this.state.workSpaceLocationName ||
                          "Choose from your locations..."}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {this.state.LOCATION_LIST.map(location => (
                          <Dropdown.Item
                            eventKey={location.fullAdress}
                            key={location.locationId}
                            id={location.locationId}
                            onSelect={this.handleDropDownSelection}
                            name="workSpaceLocation"
                          >
                            {location.fullAdress}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <br></br>
                    <div className="titleText">
                      <Form.Label>Workspace Occupancy</Form.Label>
                    </div>
                    <Dropdown>
                      <Dropdown.Toggle variant="info" id="dropdown-basic">
                        {this.state.workSpaceOccupancy ||
                          "How many people can occupy the workspace?"}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        {NUMBER_OF_PEOPLE.map(number => (
                          <Dropdown.Item
                            eventKey={number}
                            key={number}
                            id={number}
                            onSelect={this.handleDropDownSelection}
                            name="workSpaceOccupancy"
                          >
                            {number}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <br></br>
                    <div className="titleText">
                      <Form.Label>Work Space dimensions</Form.Label>
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Enter your workspace dimensions..."
                      value={this.state.workSpaceDimensions}
                      onChange={this.handleInputChange}
                      name="workSpaceDimensions"
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

                    <br></br>
                    <div className="titleText">
                      <Form.Label>Work Space rates</Form.Label>
                    </div>
                    <Form.Control
                      type="text"
                      placeholder="Enter the daily rate for the workspace.."
                      value={this.state.workSpaceDailyRate}
                      onChange={this.handleInputChange}
                      name="workSpaceDailyRate"
                      required
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

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
                    id="subBtn"
                    variant="info"
                    type="submit"
                    className="btn btn-success"
                  >
                    Submit
                  </Button>
                </Form>
              </Col>

              <Col size="md-6">
                <Jumbotron className="bg-white">
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
                    isDayBlocked={this.checkIfDayIsBlocked}
                  ></DateRangePicker>
                  <br></br>
                  <br></br>

                  <FeatureList
                    handleFeatureSelection={this.handleFeatureSelection.bind(
                      this
                    )}
                    features={this.state.FEATURE_LIST}
                  ></FeatureList>
                </Jumbotron>
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
                  Workspace has been succesfully updated!!!
                </Modal.Title>
              </Modal.Header>
              <Modal.Footer>
                <Button onClick={this.handleClose}>OK</Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>

        <div className="footerBorder">
          <Footer />
        </div>
      </Container>
    );
  }
}

export default WorkSpaceDetail;
