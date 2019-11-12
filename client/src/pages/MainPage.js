import React, { Component } from "react";
//import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

class MainPage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Search />
            <Carousel />
            <br></br>
            <br></br>
          </Col>
        </Row>

        <Row className="text-center">
          <Col md={4}>
            <h1>Flexible</h1>
          </Col>
          <Col md={4}>
            <h1>Convenient</h1>
          </Col>
          <Col md={4}>
            <h1>Comfortable</h1>
          </Col>
        </Row>
        <br></br>
        <Row className="text-center">
          <Col md={4}>
            <img
              src="images/Flexible.png"
              width={80}
              height={90}
              alt="flexibility"
            ></img>
          </Col>

          <Col md={4}>
            <img
              src="images/Convenient.png"
              width={90}
              height={110}
              alt="flexibility"
            ></img>
          </Col>

          <Col md={4}>
            <img
              src="images/Comfortable.png"
              width={80}
              height={100}
              alt="flexibility"
            ></img>
          </Col>
        </Row>
        <br></br>
        <Row className="text-center">
          <Col md={4}>
            <h5>Any dates you can choose</h5>
          </Col>
          <Col md={4}>
            <h5>Anywhere you can choose</h5>
          </Col>
          <Col md={4}>
            <h5>Any styles you can choose</h5>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </Container>
    );
  }
}

export default MainPage;
