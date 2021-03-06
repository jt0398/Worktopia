// Importing all required Components.
import React, { Component } from "react";
import Bookingapi from "../utils/BookingAPI";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Ownerbooking from "../components/BookingCard/ownerbooking";
import Nav from "../components/Nav";
import "./css/ownerBkgPage.css";
import Footer from "../components/Footer";

class OwnerBooking extends Component {
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
    Bookingapi.getUserDetails(localStorage.getItem("UserId")).then(res => {
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
      <>
        <Nav isLoggedIn={this.props.isLoggedIn} isOwner={this.props.isOwner} />
        <Container fluid>
          {/* Header */}
          <div className="mybkgbg">
            <div className="yourBooking">All Bookings</div>
            {/* Div Row to Display Output */}
            <Row>
              <Col md="12" sm="12">
                {/* Check if there are any workspaces that are found registered and if so than map through the workspace to get each of the data */}
                {this.state.workspaces.length > 0 &&
                  this.state.workspaces.map(workspace => {
                    return (
                      // Display each workspaces registered in OwnerBooking Component by passing required props
                      <Ownerbooking
                        rowStyle="row no-gutters"
                        imgStyle="col-md-1"
                        bodyStyle="col-md-2"
                        {...workspace.User}
                        {...workspace.Workspace}
                        {...((workspace.Workspace &&
                          workspace.Workspace.WorkspacePics[0]) ||
                          "")}
                        {...workspace}
                        totalPaidPrice={workspace.rental_price}
                      />
                    );
                  })}

                {/* If there are no results found for the registered bookings then display proper Output */}
                {this.state.workspaces.length === 0 && (
                  <div style={{ height: "50vh" }}>
                    <Row
                      className="text-center"
                      style={{ "margin-top": "200px" }}
                    >
                      <Col>
                        <h3 style={{ color: "red" }}>No bookings available.</h3>
                      </Col>
                    </Row>
                  </div>
                )}
              </Col>
            </Row>
            {/* Footer */}
          </div>
          <Footer />
        </Container>
      </>
    );
  }
}

export default OwnerBooking;
