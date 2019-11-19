import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WorkspaceCard from "../components/WorkspaceCard";
import Search from "../components/Search";
import Map from "../components/Map";
import moment from "moment";
import API from "../utils/workspaceAPI";
import PriceCard from "../components/PriceCard";
import Button from "react-bootstrap/Button";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from "react-places-autocomplete";

class BookWorkspace extends Component {
  state = {
    workspaces: [],
    searchParams: {
      location: "",
      checkinDate: moment(new Date(), "yyyy-mm-dd"),
      checkoutDate: moment(new Date(), "yyyy-mm-dd"),
      room: 0,
      people: 0
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
  };

  //Update Location state
  handleLocationChange = location => {
    this.setState({
      searchParams: { ...this.state.searchParams, location: location }
    });
  };

  handleLocationSelect = location => {
    this.setState({
      searchParams: { ...this.state.searchParams, location: location }
    });

    geocodeByAddress(location)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        this.setState({
          centerGeoLoc: [latLng.lat, latLng.lng]
        });
        console.log("Success", latLng);
      })
      .catch(error => console.error("Error", error));
  };

  //Update Check In state
  handleCheckInChange = date => {
    this.setState({
      searchParams: { ...this.state.searchParams, checkinDate: date }
    });
  };

  //Update Check Out state
  handleCheckOutChange = date => {
    this.setState({
      searchParams: { ...this.state.searchParams, checkoutDate: date }
    });
  };

  componentDidMount() {
    this.loadWorkspaces();
  }

  loadWorkspaces = () => {
    API.getWorkspace(this.props.match.params.id)
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
    API.getGeoLoc(address)
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
            <Button type="submit" href="#">
              Confirm Booking
            </Button>

            {/*<PriceCard {...this.state.workspaces[0].rental_price} />*/}
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
