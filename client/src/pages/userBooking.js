import React, { Component } from "react";
import API from "../utils/API";
import Bookingapi from "../utils/BookingAPI";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CardDeck from "react-bootstrap/CardDeck";
import FeatureList from "../components/FeatureList";
import UserBooking from "../components/BookingCard/userbooking";
import Search from "../components/Search";

class userBooking extends Component {
  state = {
    workspaces: []
  };

  componentDidMount() {
    this.loadWorkspaces();
  }

  loadWorkspaces = () => {
    Bookingapi.getUserData("2").then(res => {
      console.log(res.data);
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
      <Container>
        <Row>
          <Col md="12" sm="12">
            {this.state.workspaces.map(workspace => {
              return (
                <UserBooking
                  rowStyle="row no-gutters"
                  idStyle="col-md-1"
                  imgStyle="col-md-1"
                  bodyStyle="col-md-2"
                  {...workspace}
                  {...workspace.Workspace}
                  {...workspace.Workspace.WorkspaceLocation}
                  {...workspace.Workspace.WorkspacePics[0]}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default userBooking;
