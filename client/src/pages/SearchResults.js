import React, { Component } from "react";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FeatureList from "../components/FeatureList";
import WorkspaceCard from "../components/WorkspaceCard";
import Search from "../components/Search";
import Map from "../components/Map";
import axios from "axios";
import Moment from "moment";

class SearchResults extends Component {
  state = {
    addresses: [],
    workspaces: [],
    searchParams: {
      location: "",
      checkinDate: new Moment().format("YYYY-MM-DD"),
      checkoutDate: new Moment().format("YYYY-MM-DD"),
      room: 0,
      people: 0
    }
  };

  // Handles updating component state when the user types into the input field
  handleSearchInputChange = event => {
    const { name, value } = event.target;
    console.log(name, value);

    this.setState({
      searchParams: {
        ...this.state.searchParams,
        [name]: value
      }
    });
  };

  componentDidMount() {
    this.loadWorkspaces();
  }

  loadWorkspaces = () => {
    /*  API.getWorkspaces()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err)); */
  };

  handleFormSearch = event => {
    event.preventDefault();
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
