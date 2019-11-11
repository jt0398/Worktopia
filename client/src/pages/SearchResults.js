import React, { Component } from "react";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FeatureList from "../components/FeatureList";
import WorkspaceCard from "../components/WorkspaceCard";

class SearchResults extends Component {
  state = {
    location: "",
    checkInDate: "",
    checkOutDate: "",
    rooms: 0,
    workspaces: [
      {
        name: "Workspace 1",
        src:
          "https://www.spacesworks.com/wp-content/uploads/2016/03/membership-coworking-spaces.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        dimension: "10ft x 10ft",
        price: "$100.00"
      }
    ],
    features: [
      "Free Parking",
      "Free Wifi",
      "Playing Area",
      "Lake View",
      "Garden View",
      "Projector",
      "Computers"
    ]
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

  render() {
    return (
      <Container>
        <Row>
          <Col>{/* Search component */}</Col>
        </Row>
        <Row>
          <Col md="3">
            {/* Map component */}
            <FeatureList {...this.state.features} />
          </Col>
          <Col md="9" sm="12">
            {this.state.workspaces.map(workspace => {
              return <WorkspaceCard {...workspace} />;
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchResults;
