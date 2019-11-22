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
    workspaces: []
  };

  componentDidMount() {
    this.loadWorkspaces();
  }

  loadWorkspaces = () => {
    Bookingapi.getUserData(localStorage.getItem("UserId")).then(res => {
      this.setState({
        workspaces: res.data
      });
      console.log(this.state);
    });
  };

  handleFormSearch = event => {
    event.preventDefault();
  };

  handleFeatureSelect = event => {};

  render() {
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
                  //  idStyle="col-md-1"
                  // imgStyle="col-md-2"
                  // bodyStyle="col-md-2"
                  {...workspace}
                  {...workspace.Workspace}
                  {...workspace.Workspace.WorkspaceLocation}
                  {...workspace.Workspace.WorkspacePics[0]}
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
}

export default userBooking;
