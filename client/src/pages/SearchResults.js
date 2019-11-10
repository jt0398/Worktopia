import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input } from "../components/Form";

class SearchResults extends Component {
  state = {
    location: "",
    checkInDate: "",
    checkOutDate: "",
    rooms: 0,
    workspaces: []
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
    /*  if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    } */
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-3"></Col>
          <Col size="md-9 sm-12">
            <List>
              <ListItem>
                <Link to="">Description</Link>
              </ListItem>
            </List>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SearchResults;
