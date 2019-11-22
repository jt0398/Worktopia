import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Search from "../components/Search";
import Footer from "../components/Footer";
import { Animated } from "react-animated-css";
import "./css/MainPage.css";
import OfferCard from "../components/Offer";
import Testimonials from "../components/Testimonails";
import moment from "moment";
import { Slide } from "react-reveal";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";

class MainPage extends Component {
  state = {
    searchParams: {
      location: localStorage.getItem("location") || "",
      checkinDate:
        (localStorage.getItem("checkinDate") &&
          moment(localStorage.getItem("checkinDate"), "yyyy-mm-dd")) ||
        moment(new Date(), "yyyy-mm-dd"),
      checkoutDate:
        (localStorage.getItem("checkoutDate") &&
          moment(localStorage.getItem("checkoutDate"), "yyyy-mm-dd")) ||
        moment(new Date(), "yyyy-mm-dd"),
      room: localStorage.getItem("room") || 0,
      people: localStorage.getItem("people") || 0
    }
  };

  // Handles updating component state when the user types into the input field
  handleSearchInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      searchParams: {
        ...this.state.searchParams,
        [name]: value
      }
    });

    localStorage.setItem(name, value);
  };

  //Update Location state
  handleLocationChange = location => {
    this.setState({
      searchParams: { ...this.state.searchParams, location: location }
    });

    localStorage.setItem("location", location);
  };

  //Handle Google dropdown select
  handleLocationSelect = location => {
    this.setState({
      searchParams: { ...this.state.searchParams, location: location }
    });

    localStorage.setItem("location", location);
  };

  //Update Check In state
  handleCheckInChange = date => {
    this.setState({
      searchParams: { ...this.state.searchParams, checkinDate: date }
    });

    localStorage.setItem("checkinDate", date);
  };

  //Update Check Out state
  handleCheckOutChange = date => {
    this.setState({
      searchParams: { ...this.state.searchParams, checkoutDate: date }
    });

    localStorage.setItem("checkoutDate", date);
  };

  componentDidMount() {
    //If there's no Check-In or Check-Out data, set the same default value as state
    if (!localStorage.getItem("checkinDate")) {
      localStorage.setItem("checkinDate", moment(new Date(), "yyyy-mm-dd"));
    }

    if (!localStorage.getItem("checkoutDate")) {
      localStorage.setItem("checkoutDate", moment(new Date(), "yyyy-mm-dd"));
    }
  }

  handleFormSearch = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    form.classList.remove("was-validated");

    const locationField = document.getElementsByName("location")[0];
    const peopleField = document.getElementsByName("people")[0];
    const roomField = document.getElementsByName("room")[0];

    if (locationField.value === "") {
      locationField.setCustomValidity("Invalid field.");
    } else {
      locationField.setCustomValidity("");
    }

    if (peopleField.value.includes("Choose")) {
      peopleField.setCustomValidity("Invalid field.");
    } else {
      peopleField.setCustomValidity("");
    }

    if (roomField.value.includes("Choose")) {
      roomField.setCustomValidity("Invalid field.");
    } else {
      roomField.setCustomValidity("");
    }

    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      return;
    }

    this.setState({ validated: true });

    window.location.href = "/searchresults";
  };

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
              <h1 className="md-8 sm-4 xs-2" id="heading">
                Welcome to Worktopia
              </h1>
            </Animated>
          </div>
        </div>

        <Row>
          <Col size="md-12">
            <div className="boxShadow">
              <div className="searchSection">
                <Search
                  {...this.state.searchParams}
                  validated={this.state.validated}
                  onChange={this.handleSearchInputChange}
                  onSubmit={this.handleFormSearch}
                  onCheckInChange={this.handleCheckInChange}
                  onCheckOutChange={this.handleCheckOutChange}
                  onLocationChange={this.handleLocationChange}
                  onSelectLocation={this.handleLocationSelect}
                />
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
                  animationInDelay={1000}
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
                  animationInDelay={1000}
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
                  animationInDelay={1000}
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
          <Container>
            <Row style={{ margin: "100px;" }}>
              <Col md="12" sm="4" style={{ "text-align": "center" }}>
                <Slide>
                  <h3>OUR SERVICES</h3>
                </Slide>
              </Col>
            </Row>
            <Row>
              <OfferCard></OfferCard>
            </Row>
          </Container>
        </div>

        <div className="boxShadow">
          <div className="parallaxImg"></div>
        </div>

        <div className="testflex">
          <Container>
            <Row style={{ margin: "100px;" }}>
              <Col md="12" sm="4" style={{ "text-align": "center" }}>
                <h3>TESTIMONIALS</h3>
              </Col>
            </Row>
            <Row>
              <Testimonials></Testimonials>
            </Row>
          </Container>
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
