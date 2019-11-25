import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WorkspaceCard from "../components/WorkspaceCard";
import Search from "../components/Search";
import Map from "../components/Map";
import moment from "moment";
import workspaceAPI from "../utils/workspaceAPI";
import PriceCard from "../components/PriceCard";
// import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Footer from "../components/Footer";
import "./css/BkgWorkSpace.css";
import Nav from "../components/Nav";
import { withRouter } from "react-router-dom";

class BookWorkspace extends Component {
  state = {
    workspaces: [],
    searchParams: {
      location: localStorage.getItem("location") || "",
      checkinDate:
        localStorage.getItem("checkinDate") ||
        moment(new Date()).format("MM/DD/YYYY"),
      checkoutDate:
        localStorage.getItem("checkoutDate") ||
        moment(new Date()).format("MM/DD/YYYY"),
      room: localStorage.getItem("room") || 0,
      people: localStorage.getItem("people") || 0
    },
    locations: [], //geolocations based on address
    centerGeoLoc: [43.6532, -79.3832],
    invalidDateMsg: ""
  };

  // Handles updating component state when the user types into the input field
  handleSearchInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      searchParams: {
        ...this.state.searchParams,
        [name]: value
      }
    });

    localStorage.setItem(name, value);
  };

  //Update Location state
  handleLocationChange = location => {
    this.setState({
      searchParams: { ...this.state.searchParams, location: location }
    });

    localStorage.setItem("location", location);
  };

  //Handle Google dropdown select
  handleLocationSelect = location => {
    this.setState({
      searchParams: { ...this.state.searchParams, location: location }
    });

    localStorage.setItem("location", location);
  };

  //Update Check In state
  handleCheckInChange = date => {
    this.setState({
      searchParams: { ...this.state.searchParams, checkinDate: date }
    });

    localStorage.setItem("checkinDate", date.format("MM/DD/YYYY"));
  };

  //Update Check Out state
  handleCheckOutChange = date => {
    this.setState({
      searchParams: { ...this.state.searchParams, checkoutDate: date }
    });

    localStorage.setItem("checkoutDate", date.format("MM/DD/YYYY"));
  };

  componentDidMount() {
    //If there's no Check-In or Check-Out data, set the same default value as state
    if (!localStorage.getItem("checkinDate")) {
      localStorage.setItem(
        "checkinDate",
        moment(new Date()).format("MM/DD/YYYY")
      );
    }

    if (!localStorage.getItem("checkoutDate")) {
      localStorage.setItem(
        "checkoutDate",
        moment(new Date()).format("MM/DD/YYYY")
      );
    }

    this.loadWorkspaces();
  }

  loadWorkspaces = () => {
    workspaceAPI
      .getWorkspace(this.props.match.params.id)
      .then(res => {
        const workspace = res.data.length && res.data[0];

        //Get geolocation of the address
        this.loadLocations(workspace.WorkspaceLocation.full_address);

        //Update workspace and address state to render results and map
        this.setState({ workspaces: res.data });
      })
      .catch(err => console.log(err));
  };

  //Get geolocation from API
  loadLocations = address => {
    workspaceAPI
      .getGeoLoc(address)
      .then(res => {
        //Updates geolocation array to render in map
        this.setState({
          locations: [
            [
              address,
              res.data.results[0].locations[0].latLng.lat,
              res.data.results[0].locations[0].latLng.lng
            ]
          ],
          centerGeoLoc: [
            res.data.results[0].locations[0].latLng.lat,
            res.data.results[0].locations[0].latLng.lng
          ]
        });
      })
      .catch(err => console.log(err));
  };

  handleFormSearch = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    form.classList.remove("was-validated");

    const locationField = document.getElementsByName("location")[0];
    const peopleField = document.getElementsByName("people")[0];
    const roomField = document.getElementsByName("room")[0];
    const checkinField = document.getElementsByName("checkinDate")[0];
    const checkoutField = document.getElementsByName("checkoutDate")[0];
    const checkOutInvalid = document.getElementsByName("checkOutInvalid")[0];

    checkOutInvalid.innerHTML = "";

    if (locationField.value.trim() === "") {
      locationField.setCustomValidity("Invalid field.");
    } else {
      locationField.setCustomValidity("");
    }

    if (peopleField.value.includes("Choose")) {
      peopleField.setCustomValidity("Invalid field.");
    } else {
      peopleField.setCustomValidity("");
    }

    if (roomField.value.includes("Choose")) {
      roomField.setCustomValidity("Invalid field.");
    } else {
      roomField.setCustomValidity("");
    }

    const dateDiff = moment(checkinField.value).diff(
      moment(checkoutField.value),
      "days"
    );

    if (dateDiff > 0) {
      this.setState = {
        invalidDateMsg: "Please choose a Check-Out Date that is a future date."
      };
      checkoutField.setCustomValidity("Invalid field.");
    } else {
      this.setState = {
        invalidDateMsg: ""
      };

      checkoutField.setCustomValidity("");
    }

    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      return;
    }

    this.setState({ validated: true });

    this.props.history.push("/searchresults");
  };

  render() {
    return (
      <>
        <Nav></Nav>
        <Container fluid>
          <div className="bkgWsBg">
            <div className="bkgWSheader">Booking Review</div>
            <div className="wholePagePadding">
              <Row>
                <Col>
                  {/*Search Box*/}
                  <Search
                    {...this.state.searchParams}
                    validated={this.state.validated}
                    onChange={this.handleSearchInputChange}
                    onSubmit={this.handleFormSearch}
                    onCheckInChange={this.handleCheckInChange}
                    onCheckOutChange={this.handleCheckOutChange}
                    onLocationChange={this.handleLocationChange}
                    onSelectLocation={this.handleLocationSelect}
                    errorMsg={this.state.invalidDateMsg}
                  />
                </Col>
              </Row>
              <Row>
                <Col md="8" sm="12">
                  {this.state.workspaces.map((workspace, index) => {
                    return (
                      <WorkspaceCard
                        key={index}
                        cardStyle="my-3"
                        rowStyle=""
                        imgStyle=""
                        bodyStyle=""
                        {...workspace}
                        src={
                          workspace.WorkspacePics &&
                          workspace.WorkspacePics[0].image_path
                        }
                        fulladdress={workspace.WorkspaceLocation.full_address}
                        occuppants={workspace.no_occupants}
                      />
                    );
                  })}
                </Col>
                <Col md="4">
                  <div className="pricebreakdown">
                    <PriceCard {...this.state.workspaces[0]} />
                  </div>
                  {/*Map*/}
                  {this.state.locations.length > 0 && (
                    <Map
                      locations={this.state.locations}
                      centerGeoLoc={this.state.centerGeoLoc}
                    />
                  )}
                </Col>
              </Row>
            </div>
          </div>
          <div className="bkgSpFooter">
            <Footer />
          </div>
        </Container>
      </>
    );
  }
}

export default withRouter(BookWorkspace);
