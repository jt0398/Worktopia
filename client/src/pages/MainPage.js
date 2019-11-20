import React, { Component } from "react";
//import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//import Grid from "../components/Grid";
import Search from "../components/Search";
import Footer from "../components/Footer";
import { Animated } from "react-animated-css";
import "./css/MainPage.css";

class MainPage extends Component {
  render() {
    return (
      <Container fluid>
        <div className="boxShadow">
          <div className="demo text-center">
            <Animated
              animationIn="lightSpeedIn"
              animationInDelay={1000}
              animationOut="fadeOut"
              isVisible={true}
            >
              <h1 className="intro">Welcome to Worktopia</h1>
            </Animated>
          </div>
        </div>

        <Row>
          <Col size="md-12">
            <div className="boxShadow">
              <Search />
            </div>
          </Col>
        </Row>

        <div className="boxShadow">
          <div className="parallaxImg"></div>
        </div>

        <div className="boxShadow">
          <div class="imgNtext">
            <h2>Why Worktopia??</h2>
            <br></br>
            <Row className="text-center">
              <Col md={4} id="textimg">
                {/* <h1>Flexible</h1> */}
                <Animated
                  animationIn="rotateIn"
                  animationInDelay={3000}
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <img
                    src="images/Flexible.png"
                    width={90}
                    height={120}
                    alt="flexibility"
                  ></img>
                </Animated>
                <br></br>
                <h1>Flexible</h1>
                <h5>Any dates you can choose</h5>
              </Col>
              <Col md={4} id="textimg">
                {/* <h1>Convenient</h1> */}
                <Animated
                  animationIn="rotateIn"
                  animationInDelay={4000}
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <img
                    src="images/Convenient.png"
                    width={90}
                    height={120}
                    alt="flexibility"
                  ></img>
                </Animated>
                <br></br>
                <h1>Convenient</h1>
                <h5>Anywhere you can choose</h5>
              </Col>
              <Col md={4} id="textimg">
                {/* <h1>Comfortable</h1> */}
                <Animated
                  animationIn="rotateIn"
                  animationInDelay={5000}
                  animationOut="fadeOut"
                  isVisible={true}
                >
                  <img
                    src="images/Comfortable.png"
                    width={80}
                    height={120}
                    alt="flexibility"
                  ></img>
                </Animated>
                <br></br>
                <h1>Comfortable</h1>
                <h5>Any styles you can choose</h5>
              </Col>
            </Row>
          </div>
        </div>

        <div className="boxShadow">
          <div className="parallaxImg"></div>
        </div>

        <div className="boxShadow">
          <div className="whyGTA">
            <p>
              <h2> Why GTA??</h2>
              <Row>
                <Col md={6}>
                  <br></br>
                  Where work meets play Toronto is known for its 'work hard,
                  play hard' attitude, but a new cache of coworking spaces are
                  bringing these spheres together under one roof. Creatives in
                  Canada's biggest metropolis – one of our 'cities to watch in
                  2018' – are ditching the sterility of a serviced office and
                  seeking out hybrid hubs that cater to their business, as well
                  as their personal interests. Sited in former factories and
                  warehouses, these professional playgrounds offer wellness
                  classes, networking and social events, from concerts to
                  pot-lucks.
                </Col>
                <Col md={6}>
                  <br></br>
                  Workplace One offers small business, entrepreneurs,
                  professionals and anyone in between, a customized and unique
                  work environment in a shared office community. With
                  customizable offices and services, Workplace One caters to the
                  constant evolution of a small or growing business. The unique
                  space design encourages collaboration and provides an energy
                  that can not be found in a home office or other professional
                  work environment.
                </Col>
              </Row>
            </p>
          </div>
        </div>

        <div className="boxShadow">
          <div className="parallaxImg"></div>
        </div>

        <div className="boxShadow">
          <div class="youtubeVideo">
            <Row>
              <Col md={12}>
                <br></br>
                <h2>Why CoWorking Spaces??</h2>
              </Col>
            </Row>
            <Row>
              <Col md={6} className="text-center">
                <br></br>
                <iframe
                  class="coWorkingVideo"
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/C75o5Yw1Uc4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Col>
              <Col md={6} className="text-center">
                <br></br>
                <iframe
                  width="450"
                  height="315"
                  src="https://www.youtube.com/embed/Xx91WeRjVN4"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </Col>
            </Row>
          </div>
        </div>

        <div className="boxShadow">
          <div className="parallaxImg"></div>
        </div>

        <div className="boxShadow">
          <div className="mainPageFooter">
            <Footer />
          </div>
        </div>
      </Container>
    );
  }
}

export default MainPage;
