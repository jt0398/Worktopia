import React, { Component } from "react";
//import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Search from "../components/Search";

class MainPage extends Component {
  locations = ["Location 1", "Location 2", "Location 3"];
  people = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20
  ];
  rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Search
              locations={this.locations}
              people={this.people}
              rooms={this.rooms}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
