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
import HashMap from "hashmap";

class SearchResults extends Component {
  state = {
    addresses: new HashMap(), //Keeps address unique to avoid rendering in map multiple times
    workspaces: [],
    searchParams: {
      location: "",
      checkinDate: moment(new Date(), "yyyy-mm-dd"),
      checkoutDate: moment(new Date(), "yyyy-mm-dd"),
      room: 0,
      people: 0
    },
    locations: []
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

  //Update Check In state
  handleCheckInChange = date =>
    this.setState({
      searchParams: { ...this.state.searchParams, checkinDate: date }
    });

  //Update Check Out state
  handleCheckOutChange = date =>
    this.setState({
      searchParams: { ...this.state.searchParams, checkoutDate: date }
    });

  componentDidMount() {
    //this.loadWorkspaces();
    //TODO: add search input to cache to load it in different pages
  }

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
    this.loadWorkspaces();
  };

  handleFeatureSelect = event => {};

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
            />
          </Col>
        </Row>
        <Row>
          <Col md="3">
            {/*Map*/}
            <Map locations={this.state.locations} />
            {/*Feature List*/}
            <Form>
              {/*  <FeatureList onClick={this.handleFeatureSelect} /> */}
            </Form>
          </Col>
          <Col md="9" sm="12">
            {/*Search Result*/}
            {this.state.workspaces.map((workspace, index) => {
              return (
                <WorkspaceCard
                  key={index}
                  rowStyle="row no-gutters"
                  imgStyle="col-md-4"
                  bodyStyle="col-md-6"
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
        </Row>
      </Container>
    );
  }
}

export default SearchResults;
