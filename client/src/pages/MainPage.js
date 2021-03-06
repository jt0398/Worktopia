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
import { Element } from "react-scroll";
import Nav from "../components/Nav";
import { withRouter } from "react-router-dom";

class MainPage extends Component {
  state = {
    searchParams: {
      location: localStorage.getItem("location") || "",
      checkinDate:
        localStorage.getItem("checkinDate") ||
        moment(new Date()).format("MM/DD/YYYY"),
      checkoutDate:
        localStorage.getItem("checkoutDate") ||
        moment(new Date()).format("MM/DD/YYYY"),
      room: localStorage.getItem("room") || 0,
      people: localStorage.getItem("people") || 0
    },
    invalidDateMsg: ""
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

    localStorage.setItem("checkinDate", date.format("MM/DD/YYYY"));
  };

  //Update Check Out state
  handleCheckOutChange = date => {
    this.setState({
      searchParams: { ...this.state.searchParams, checkoutDate: date }
    });

    localStorage.setItem("checkoutDate", date.format("MM/DD/YYYY"));
  };

  componentDidMount() {
    //If there's no Check-In or Check-Out data, set the same default value as state
    if (!localStorage.getItem("checkinDate")) {
      localStorage.setItem(
        "checkinDate",
        moment(new Date()).format("MM/DD/YYYY")
      );
    }

    if (!localStorage.getItem("checkoutDate")) {
      localStorage.setItem(
        "checkoutDate",
        moment(new Date()).format("MM/DD/YYYY")
      );
    }

    localStorage.setItem("room", 1);
  }

  handleFormSearch = event => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    form.classList.remove("was-validated");

    const locationField = document.getElementsByName("location")[0];
    const peopleField = document.getElementsByName("people")[0];
    //const roomField = document.getElementsByName("room")[0];
    const checkinField = document.getElementsByName("checkinDate")[0];
    const checkoutField = document.getElementsByName("checkoutDate")[0];
    const checkOutInvalid = document.getElementsByName("checkOutInvalid")[0];

    checkOutInvalid.innerHTML = "";

    if (locationField.value.trim() === "") {
      locationField.setCustomValidity("Invalid field.");
    } else {
      locationField.setCustomValidity("");
    }

    if (peopleField.value.includes("Choose")) {
      peopleField.setCustomValidity("Invalid field.");
    } else {
      peopleField.setCustomValidity("");
    }

    /*  if (roomField.value.includes("Choose")) {
      roomField.setCustomValidity("Invalid field.");
    } else {
      roomField.setCustomValidity("");
    } */

    const dateDiff = moment(checkinField.value).diff(
      moment(checkoutField.value),
      "days"
    );

    if (dateDiff > 0) {
      /*   this.setState = {
        invalidDateMsg: "Please choose a Check-Out Date that is a future date."
      }; */
      checkoutField.setCustomValidity("Invalid field.");
    } else {
      /*   this.setState = {
        invalidDateMsg: ""
      }; */

      checkoutField.setCustomValidity("");
    }

    if (form.checkValidity() === false) {
      form.classList.add("was-validated");
      return;
    }
    this.setState({ validated: true });

    this.props.history.push("/searchresults");
  };

  render() {
    return (
      <>
        <Nav isLoggedIn={this.props.isLoggedIn} isOwner={this.props.isOwner} />
        <Container fluid>
          <Element name="test" className="element">
            <div>
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
          </Element>
          <Row>
            <Col size="md-12">
              <div className="borderdisplay">
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
                    errorMsg={this.state.invalidDateMsg}
                  />
                </div>
              </div>
            </Col>
          </Row>

          <div className="boxShadow">
            <div className="parallaxImg"></div>
          </div>

          <Element name="test1" className="element">
            <div className="boxShadow">
              <div className="imgNtext">
                <Container>
                  <Row style={{ margin: "20px" }}>
                    <Col md="12" sm="4" style={{ textAlign: "center" }}>
                      <h3>WHY WORKTOPIA ?</h3>
                    </Col>
                  </Row>
                  <Row className="text-center imageRow">
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
                </Container>
              </div>
            </div>
          </Element>

          <div className="boxShadow">
            <div className="parallaxImg"></div>
          </div>

          <Element name="test2" className="element">
            <div className="testflex ">
              <Container>
                <Row>
                  <Col md="12" sm="4" style={{ textAlign: "center" }}>
                    <Slide>
                      <h3 id="headcolor">FEATURED WORKSPACES</h3>
                    </Slide>
                  </Col>
                </Row>
                <Row>
                  <OfferCard></OfferCard>
                </Row>
              </Container>
            </div>
          </Element>

          <div className="boxShadow">
            <div className="parallaxImg"></div>
          </div>

          <Element name="test3" className="element">
            <div className="testflex">
              <Container>
                <Row>
                  <Col md="12" sm="4" style={{ textAlign: "center" }}>
                    <h3 id="headcolor">TESTIMONIALS</h3>
                  </Col>
                </Row>
                <Row>
                  <Testimonials></Testimonials>
                </Row>
              </Container>
            </div>
          </Element>

          <div className="boxShadow">
            <div className="parallaxImg"></div>
          </div>

          <div className="boxShadow">
            <div className="mainPageFooter">
              <Footer />
            </div>
          </div>
        </Container>
      </>
    );
  }
}

export default withRouter(MainPage);
