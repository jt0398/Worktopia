import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FeatureList from "../components/FeatureList";
import WorkspaceCard from "../components/WorkspaceCard";
import Search from "../components/Search";
import Map from "../components/Map";
import moment from "moment";
import API from "../utils/workspaceAPI";
import miscAPI from "../utils/API";
import HashMap from "hashmap";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import Footer from "../components/Footer";
import "./css/SearchResult.css";
import Nav from "../components/Nav";

class SearchResults extends Component {
  state = {
    addresses: new HashMap(), //Keeps address unique to avoid rendering in map multiple times
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
      people: localStorage.getItem("people") || 0,
      selectedFeatures:
        (localStorage.getItem("features") &&
          localStorage.getItem("features").split(",")) ||
        []
    },
    locations: [], //geolocations based on address
    centerGeoLoc: [43.6532, -79.3832],
    FEATURE_LIST: [],
    hashFeatures: new HashMap(),
    searching: false,
    searchComplete: false,
    validated: false
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

  updateLocation = location => {
    this.setState({
      searchParams: { ...this.state.searchParams, location: location }
    });

    localStorage.setItem("location", location);

    geocodeByAddress(location)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          centerGeoLoc: [latLng.lat, latLng.lng]
        });
      })
      .catch(error => console.error("Error", error));
  };

  //Update Location state
  handleLocationChange = location => {
    this.updateLocation(location);
  };

  //Handle Google dropdown select
  handleLocationSelect = location => {
    this.updateLocation(location);
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
    this.loadFeatures();

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

    //If the user submitted search from homepage or booking page, load data on page load
    if (
      this.state.searchParams.location &&
      this.state.searchParams.room &&
      this.state.searchParams.people
    ) {
      this.loadWorkspaces();
    }
  }

  //Loads feature list
  loadFeatures = () => {
    let tempFeatureList = [];
    const selectedFeatures = this.state.searchParams.selectedFeatures;

    miscAPI.getFeatureList().then(res => {
      res.data.forEach(feature => {
        tempFeatureList.push({
          name: feature.name,
          label: feature.id,
          status: selectedFeatures.indexOf(feature.id.toString()) !== -1
        });
      });

      this.setState({ FEATURE_LIST: tempFeatureList });
    });
  };

  //Load workspace data from API call
  loadWorkspaces = () => {
    API.searchWorkspace(this.state.searchParams)
      .then(res => {
        let addrList = new HashMap();

        //Add unique address to the list
        for (const workspace of res.data) {
          addrList.set(
            "L" + workspace.WorkspaceLocation.id,
            workspace.WorkspaceLocation.full_address
          );
        }

        //Update workspace and address state to render results and map
        this.setState({ workspaces: res.data, addresses: addrList });
      })
      .then(() => {
        //Get geolocation of the addresses
        this.loadLocations();

        this.setState({ searchComplete: true, searching: false });
      })
      .catch(err => console.log(err));
  };

  //Get geolocation from API
  loadLocations = () => {
    let locationList = [];

    //Loops thru unique addresses
    for (let address of this.state.addresses) {
      //Get geolocation
      API.getGeoLoc(address.value)
        .then(res => {
          //Adds geolocation into an array
          locationList.push([
            address.value,
            res.data.results[0].locations[0].latLng.lat,
            res.data.results[0].locations[0].latLng.lng
          ]);

          //Updates geolocation array to render in map
          this.setState({ locations: locationList });
        })
        .catch(err => console.log(err));
    }
  };

  //Handle search button submit event
  handleFormSearch = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    form.classList.remove("was-validated");

    const locationField = document.getElementsByName("location")[0];
    const peopleField = document.getElementsByName("people")[0];
    const roomField = document.getElementsByName("room")[0];

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

    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      return;
    }

    this.setState({ searchComplete: false, searching: true, validated: true });
    this.loadWorkspaces();
  };

  handleFeatureSelection = event => {
    let tmpHash = this.state.hashFeatures;
    const featureIdToBeUpated = event.target.id;
    let tempArray = this.state.FEATURE_LIST;

    for (var i in tempArray) {
      if (tempArray[i].label.toString() === featureIdToBeUpated) {
        tempArray[i].status = !tempArray[i].status; //Updates the checkbox checked property

        if (tempArray[i].status) {
          tmpHash.set(featureIdToBeUpated, parseInt(featureIdToBeUpated));
        } else {
          tmpHash.delete(featureIdToBeUpated);
        }

        break; //Stop this loop, we found it!
      }
    }

    const features = tmpHash.values();

    this.setState({
      searchParams: { ...this.state.searchParams, selectedFeatures: features }
    });

    this.setState({
      FEATURE_LIST: tempArray,
      hashFeatures: tmpHash
    });

    localStorage.setItem("features", features);
  };

  render() {
    return (
      <>
        <Nav isLoggedIn={this.props.isLoggedIn} isOwner={this.props.isOwner} />
        <Container fluid>
          <div className="SRbg">
            <div className="SRheader">Your Search Result</div>
            <div className="SRPadding">
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
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  {/*Feature List*/}
                  <div className="featureList">
                    <Form>
                      <FeatureList
                        handleFeatureSelection={this.handleFeatureSelection.bind(
                          this
                        )}
                        features={this.state.FEATURE_LIST}
                      ></FeatureList>
                    </Form>
                  </div>
                  {/*Map*/}
                  <div className="mapborder">
                    <Map
                      locations={this.state.locations}
                      centerGeoLoc={this.state.centerGeoLoc}
                    />
                  </div>
                </Col>
                <Col md="9" sm="12">
                  <div className="h6">
                    {this.state.searchComplete && (
                      <>{this.state.workspaces.length} result(s) found.</>
                    )}
                  </div>
                  {/*Search Result*/}
                  {this.state.workspaces.map(workspace => {
                    return (
                      <WorkspaceCard
                        key={workspace.id}
                        cardStyle="my-3"
                        rowStyle="row no-gutters"
                        imgStyle="col-md-4"
                        bodyStyle="col-md-6"
                        name={workspace.name}
                        src={
                          workspace.WorkspacePics &&
                          workspace.WorkspacePics[0].image_path
                        }
                        rental_price={workspace.rental_price}
                        fulladdress={workspace.WorkspaceLocation.full_address}
                        features={workspace.Features}
                        workspaceID={workspace.id}
                        occuppants={workspace.no_occupants}
                      />
                    );
                  })}
                </Col>
              </Row>
            </div>
          </div>
          <Footer />
        </Container>
      </>
    );
  }
}

export default SearchResults;
