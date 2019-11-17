import React, { Component } from "react";
//import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Search from "../components/Search";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUsCard";
import Testimonials from "../components/Testimonails";
import "./css/MainPage.css";

class MainPage extends Component {
  data = [
    {
      upperText: "Flexible",
      image_path: "images/Flexible.png",
      lowerText: "Any dates you can choose"
    },
    {
      upperText: "Flexible",
      image_path: "images/Flexible.png",
      lowerText: "Any dates you can choose"
    },
    {
      upperText: "Flexible",
      image_path: "images/Flexible.png",
      lowerText: "Any dates you can choose"
    }
  ];

  render() {
    return (
      <Container fluid>
        <div className="demo">
          <div id="text1" className="col-md-5 ">
            <h1>Probably the best Co-Working Space in the city</h1>
            <div class="btn btn-primary btn1">Click Here</div>
          </div>
        </div>
        <div className="contentOnScroll">
          <Row>
            <Col size="md-12">
              <div className="searchBox">
                <Search />
              </div>
            </Col>
          </Row>
        </div>
        <div className="searchBars"></div>
        <Row>
          {this.data.map(element => {
            return (
              <Col md="4" sm="12">
                <AboutUs {...element}></AboutUs>
              </Col>
            );
          })}
          ;
        </Row>
        <br></br>
        <Row className="text-center"></Row>
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
          <Row>
            {this.data.map(element => {
              return (
                <Col md="4" sm="12">
                  <Testimonials {...element}></Testimonials>
                </Col>
              );
            })}
            ;
          </Row>
        </div>
        <div className="searchBars"></div>'
        <Footer />
      </Container>
    );
  }
}

export default MainPage;
