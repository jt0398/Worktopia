// Importing all required Components.
import React, { Component } from "react";
import Bookingapi from "../utils/BookingAPI";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserBooking from "../components/BookingCard/userbooking";
import Footer from "../components/Footer";
import "./css/UserBkgPage.css";
import Nav from "../components/Nav";

class userBooking extends Component {
  // Declaring state of the class.
  state = {
    workspaces: [],
    someData: false,
    noData: false
  };

  // Funtion ComponentDidMount.
  componentDidMount() {
    this.loadWorkspaces();
  }

  // Funtion to get all the workspaces booked by an Indiviual.
  loadWorkspaces = () => {
    // localStorage.setItem("UserId", 2);
    Bookingapi.getUserData(localStorage.getItem("UserId")).then(res => {
      // Set the state of worspace to the response recieved.
      if (res.data.length === 0) {
        this.setState({
          workspaces: res.data,
          someData: false,
          noData: true
        });
      } else if (res.data.length > 0) {
        this.setState({
          workspaces: res.data,
          noData: false,
          someData: true
        });
      }
    });
  };

  // Handle Form submit event , prevent default behaviour
  handleFormSearch = event => {
    event.preventDefault();
  };

  handleFeatureSelect = event => {};

  render() {
    return (
      <>
        <Nav isLoggedIn={this.props.isLoggedIn} isOwner={this.props.isOwner} />
        <Container fluid>
          {/* Header */}
          <div className="mybkgbg">
            <div className="yourBooking text-center">My Bookings</div>

            {/* Div Row to Display Output */}

            <Row className="text-center">
              <Col md="12" sm="12">
                {/* Check whether there is any workspace for the user and if there use map function to get each workspaces */}

                {this.state.someData === true &&
                  this.state.workspaces.map(workspace => {
                    return (
                      // Display each workspaces in the UserBooking Component by passing required props
                      <div className="userBookingTextCenter">
                        <UserBooking
                          className="text-center"
                          rowStyle="row no-gutters"
                          idStyle="col-md-1"
                          imgStyle="col-md-4"
                          desStyle="col-md-3"
                          chkinoutStyle="col-md-1.5"
                          {...workspace}
                          {...workspace.Workspace}
                          {...workspace.Workspace.WorkspaceLocation}
                          {...workspace.Workspace.WorkspacePics[0]}
                          totalPaidPrice={workspace.rental_price}
                        />
                      </div>
                    );
                  })}
                {/* If there are no results found for the workspaces then display proper Output */}
                {this.state.noData === true && (
                  <div style={{ height: "50vh" }}>
                    <Row
                      className="text-center"
                      style={{ "margin-top": "200px" }}
                    >
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
          </div>
          <Footer />
        </Container>
      </>
    );
  }
}

export default userBooking;
