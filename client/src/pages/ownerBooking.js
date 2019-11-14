import React, { Component } from "react";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import CardDeck from "react-bootstrap/CardDeck";
import FeatureList from "../components/FeatureList";
import Ownerbooking from "../components/BookingCard/ownerbooking";
import Search from "../components/Search";

class OwnerBooking extends Component {
  state = {
    workspaces: [
      {
        id: 23,
        name: "Workspace 1",
        user: "User",
        src:
          "https://www.spacesworks.com/wp-content/uploads/2016/03/membership-coworking-spaces.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        userName: "Nick",
        userEmail: "xyz@gmail.com",
        userContact: "xxx-xxx-xxxx",
        check_in_date: "3-2-19",
        check_out_date: "2-9-19",
        rental_price: "$100.00"
      },
      {
        id: 93,
        name: "Workspace 2",
        user: "User",
        src:
          "https://www.spacesworks.com/wp-content/uploads/2016/03/membership-coworking-spaces.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        userName: "Mike",
        userEmail: "xyz@gmail.com",
        userContact: "xxx-xxx-xxxx",
        check_in_date: "1-1-19",
        check_out_date: "15-1-19",
        rental_price: "$100.00"
      },
      {
        id: 53,
        name: "Workspace 3",
        user: "User",
        src:
          "https://www.spacesworks.com/wp-content/uploads/2016/03/membership-coworking-spaces.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

        userName: "Sam",
        userEmail: "xyz@gmail.com",
        userContact: "xxx-xxx-xxxx",
        check_in_date: "3-8-19",
        check_out_date: "2-10-19",
        rental_price: "$100.00"
      }
    ]
  };

  componentDidMount() {
    this.loadWorkspaces();
  }

  loadWorkspaces = () => {
    /*  API.getWorkspaces()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err)); */
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
                <Ownerbooking
                  rowStyle="row no-gutters"
                  idStyle="col-md-1"
                  imgStyle="col-md-1"
                  bodyStyle="col-md-2"
                  {...workspace}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default OwnerBooking;
