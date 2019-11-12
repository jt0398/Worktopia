import React, { Component } from "react";
//import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Search from "../components/Search";
import Carousel from "../components/Carousel";

class MainPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Search />
            <Carousel />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainPage;
