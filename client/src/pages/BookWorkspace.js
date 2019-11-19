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
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";

class BookWorkspace extends Component {
  state = {
    workspaces: [],
    searchParams: {
      location: localStorage.getItem("location") || "",
      checkinDate:
        (localStorage.getItem("checkinDate") &&
          moment(localStorage.getItem("checkinDate"), "yyyy-mm-dd")) ||
        moment(new Date(), "yyyy-mm-dd"),
      checkoutDate:
        (localStorage.getItem("checkoutDate") &&
          moment(localStorage.getItem("checkoutDate"), "yyyy-mm-dd")) ||
        moment(new Date(), "yyyy-mm-dd"),
      room: localStorage.getItem("room") || 0,
      people: localStorage.getItem("people") || 0,
      selectedFeatures: []
    },
    locations: [], //geolocations based on address
    centerGeoLoc: [43.6532, -79.3832]
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

  handleLocationSelect = location => {
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

  //Update Check In state
  handleCheckInChange = date => {
    this.setState({
      searchParams: { ...this.state.searchParams, checkinDate: date }
    });

    localStorage.setItem("checkinDate", date);
  };

  //Update Check Out state
  handleCheckOutChange = date => {
    this.setState({
      searchParams: { ...this.state.searchParams, checkoutDate: date }
    });

    localStorage.setItem("checkoutDate", date);
  };

  componentDidMount() {
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
    window.location.href = "/searchresults";
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            {/*Search Box*/}
            <Search
              {...this.state.searchParams}
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
          <Col md="8" sm="12">
            {this.state.workspaces.map((workspace, index) => {
              return (
                <WorkspaceCard
                  key={index}
                  rowStyle=""
                  imgStyle=""
                  bodyStyle=""
                  {...workspace}
                  src={
                    workspace.WorkspacePics &&
                    workspace.WorkspacePics[0].image_path
                  }
                  fulladdress={workspace.WorkspaceLocation.full_address}
                />
              );
            })}
          </Col>
          <Col md="3">
            <PriceCard {...this.state.workspaces[0]} />
            {/*Map*/}
            {this.state.locations.length > 0 && (
              <Map
                locations={this.state.locations}
                centerGeoLoc={this.state.centerGeoLoc}
              />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookWorkspace;
