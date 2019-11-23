import React, { Component } from "react";
import Bookingapi from "../utils/BookingAPI";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserBooking from "../components/BookingCard/userbooking";
import Footer from "../components/Footer";
import "./css/UserBkgPage.css";

class userBooking extends Component {
  state = {
    workspaces: [],
    hasError: false,
    error: ""
  };

  componentDidMount() {
    localStorage.setItem("UserId", 1);
    this.loadWorkspaces();
  }

  loadWorkspaces = () => {
    Bookingapi.getUserData(localStorage.getItem("UserId")).then(res => {
      {
        console.log(res.data.length);
      }
      if (res.data.length != 0) {
        this.setState({
          workspaces: res.data
        });
      } else {
        // window.location.pathname = "/booking/user";
        this.componentDidCatch("error", "No user data Found");
      }
    });
  };

  //Catch error if no data found
  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error: info
    });
  }

  handleFormSearch = event => {
    event.preventDefault();
  };

  handleFeatureSelect = event => {};

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
      //  window.location.pathname =
      //   "/booking/user";
    } else {
      return (
        <Container fluid>
          <div className="pbg">
            <h5 className="yourBooking text-center">Your Booking</h5>
          </div>
          <Row text-center>
            <Col md="12" sm="12">
              {this.state.workspaces.map(workspace => {
                return (
                  <UserBooking
                    className="text-center"
                    rowStyle="row no-gutters"
                    idStyle="col-md-0.8"
                    imgStyle="col-md-3"
                    desStyle="col-md-2"
                    chkinoutStyle="col-md-1.5"
                    {...workspace}
                    {...workspace.Workspace}
                    {...workspace.Workspace.WorkspaceLocation}
                    {...workspace.Workspace.WorkspacePics[0]}
                    // errorStatus={this.state.hasError}
                    // error={this.state.error}
                  />
                );
              })}
            </Col>
          </Row>
          <div className="pbg"></div>
          <br></br>
          <Footer />
        </Container>
      );
    }
    // }
  }
}
export default userBooking;
