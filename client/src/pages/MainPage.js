import React, { Component } from "react";
//import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//import Grid from "../components/Grid";
import Search from "../components/Search";
// import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import "./css/MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <Container fluid>
        <div className="demo">dhsfgs</div>
        <div className="contentOnScroll">
          <Row>
            <Col size="md-12">
              <div className="searchBox">
                <Search />
              </div>

              {/* <Carousel /> */}
            </Col>
          </Row>
        </div>
        <div className="searchBars"></div>
        <div className="textNimg">
          <Row className="text-center">
            <Col md={4} id="textimg">
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
            <Col md={4} id="textimg">
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
            <Col md={4} id="textimg">
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
        <div className="searchBars"></div>
        <div className="textNimg">
          <p>
            <h1>Here well include why worktopia?</h1>
            Where work meets play Toronto is known for its ‘work hard, play
            hard’ attitude, but a new cache of coworking spaces are bringing
            these spheres together under one roof. Creatives in Canada’s biggest
            metropolis – one of our ‘cities to watch in 2018‘ – are ditching the
            sterility of a serviced office and seeking out hybrid hubs that
            cater to their business, as well as their personal interests. Sited
            in former factories and warehouses, these professional playgrounds
            offer wellness classes, networking and social events, from concerts
            to pot-lucks. Here are seven of Toronto’s best coworking spaces.
          </p>
        </div>
        <div className="searchBars"></div>
        <div className="textNimg">
          <p>
            <h1>Here well include testimonials</h1>
            Where work meets play Toronto is known for its ‘work hard, play
            hard’ attitude, but a new cache of coworking spaces are bringing
            these spheres together under one roof. Creatives in Canada’s biggest
            metropolis – one of our ‘cities to watch in 2018‘ – are ditching the
            sterility of a serviced office and seeking out hybrid hubs that
            cater to their business, as well as their personal interests. Sited
            in former factories and warehouses, these professional playgrounds
            offer wellness classes, networking and social events, from concerts
            to pot-lucks. Here are seven of Toronto’s best coworking spaces.
          </p>
        </div>
        <div className="searchBars"></div>'
        <Footer />
      </Container>
    );
  }
}

export default MainPage;
