// Importing all required Components.
import React, { Component } from "react";
import Bookingapi from "../utils/BookingAPI";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserBooking from "../components/BookingCard/userbooking";
import Footer from "../components/Footer";
import "./css/UserBkgPage.css";

class userBooking extends Component {
  // Declaring state of the class.
  state = {
    workspaces: []
  };

  // Funtion ComponentDidMount.
  componentDidMount() {
    this.loadWorkspaces();
  }

  // Funtion to get all the workspaces booked by an Indiviual.
  loadWorkspaces = () => {
    Bookingapi.getUserData(localStorage.getItem("UserId")).then(res => {
      // Set the state of worspace to the response recieved.
      this.setState({
        workspaces: res.data
      });
    });
  };

  // Handle Form submit event , prevent default behaviour
  handleFormSearch = event => {
    event.preventDefault();
  };

  handleFeatureSelect = event => {};

  render() {
    return (
      <Container fluid>
        {/* Header */}
        <div className="pbg">
          <h5 className="yourBooking text-center">Your Booking</h5>
        </div>

        {/* Div Row to Display Output */}

        <Row className="text-center">
          <Col md="12" sm="12">
            {/* Check whether there is any workspace for the user and if there use map function to get each workspaces */}

            {this.state.workspaces.length > 0 &&
              this.state.workspaces.map(workspace => {
                return (
                  // Display each workspaces in the UserBooking Component by passing required props
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
                  />
                );
              })}
            {/* If there are no results found for the workspaces then display proper Output */}
            {this.state.workspaces.length === 0 && (
              <div style={{ height: "50vh" }}>
                <Row className="text-center" style={{ "margin-top": "200px" }}>
                  <Col>
                    <h3 style={{ color: "red" }}>You have no bookings.</h3>
                  </Col>
                </Row>
              </div>
            )}
          </Col>
        </Row>

        {/* Parallex div  */}
        <div className="pbg"></div>
        <br></br>

        {/* Footer */}
        <Footer />
      </Container>
    );
  }
}

export default userBooking;
