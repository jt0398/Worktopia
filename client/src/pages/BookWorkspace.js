import React, { Component } from "react";
import API from "../utils/API";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WorkspaceCard from "../components/WorkspaceCard";
import Search from "../components/Search";

class BookWorkspace extends Component {
  state = {
    workspaces: [
      {
        name: "Workspace 1",
        src:
          "https://www.spacesworks.com/wp-content/uploads/2016/03/membership-coworking-spaces.png",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        dimension: "10ft x 10ft",
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
          <Col>
            <Search />
          </Col>
        </Row>
        <Row>
          <Col md="9" sm="12">
            {this.state.workspaces.map(workspace => {
              return (
                <WorkspaceCard
                  rowStyle=""
                  imgStyle=""
                  bodyStyle=""
                  {...workspace}
                />
              );
            })}
          </Col>
          <Col md="3">{/* Map component */}</Col>
        </Row>
      </Container>
    );
  }
}

export default BookWorkspace;
