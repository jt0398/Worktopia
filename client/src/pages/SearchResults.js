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

class SearchResults extends Component {
  state = {
    addresses: [],
    workspaces: [],
    searchParams: {
      location: "",
      checkinDate: moment(new Date(), "yyyy-mm-dd"),
      checkoutDate: moment(new Date(), "yyyy-mm-dd"),
      room: 0,
      people: 0
    }
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

  handleCheckInChange = date =>
    this.setState({
      searchParams: { ...this.state.searchParams, checkinDate: date }
    });
  handleCheckOutChange = date =>
    this.setState({
      searchParams: { ...this.state.searchParams, checkoutDate: date }
    });

  componentDidMount() {
    //this.loadWorkspaces();
  }

  loadWorkspaces = () => {
    API.searchWorkspace(this.state.searchParams)
      .then(res => {
        console.log("test", res.data);
        this.setState({ workspaces: res.data });
      })
      .catch(err => console.log(err));
  };

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
            <Map />
            <Form>
              <FeatureList onClick={this.handleFeatureSelect} />
            </Form>
          </Col>
          <Col md="9" sm="12">
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
