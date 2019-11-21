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
import OfferCard from "../components/Offer";
import Testimonials from "../components/Testimonails";

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
              <div className="searchSection">
                <Search />
              </div>
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

        <div className="testflex ">
          <Row>
            <OfferCard></OfferCard>
          </Row>
        </div>

        <div className="boxShadow">
          <div className="parallaxImg"></div>
        </div>
        {/* 
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
        </div> */}

        <div className="testflex">
          <Testimonials></Testimonials>
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
