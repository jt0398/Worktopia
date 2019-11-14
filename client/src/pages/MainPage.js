import React, { Component } from "react";
//import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//import Grid from "../components/Grid";
import Search from "../components/Search";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import "./css/MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <Container fluid>
        <div className="contentOnScroll">
          <div className="stickyPart">
            <Row>
              <Col size="md-12">
                <div className="searchBox">
                  <Search />
                </div>
                <Carousel />
                <br></br>
                <br></br>
              </Col>
            </Row>
          </div>

          <div className="textNimg">
            <Row className="text-center">
              <Col md={4}>
                <h1>Flexible</h1>
                <img
                  src="images/Flexible.png"
                  width={90}
                  height={120}
                  alt="flexibility"
                ></img>
                <br></br>
                <br></br>
                <h5>Any dates you can choose</h5>
              </Col>
              <Col md={4}>
                <h1>Convenient</h1>
                <img
                  src="images/Convenient.png"
                  width={90}
                  height={120}
                  alt="flexibility"
                ></img>
                <br></br>
                <br></br>
                <h5>Anywhere you can choose</h5>
              </Col>
              <Col md={4}>
                <h1>Comfortable</h1>
                <img
                  src="images/Comfortable.png"
                  width={80}
                  height={120}
                  alt="flexibility"
                ></img>
                <br></br>
                <br></br>
                <h5>Any styles you can choose</h5>
              </Col>
            </Row>
            <br></br>
            <Row className="text-center"></Row>
          </div>
          <br></br>
          <br></br>
          <br></br>
          <Footer />
        </div>
      </Container>
    );
  }
}

export default MainPage;
