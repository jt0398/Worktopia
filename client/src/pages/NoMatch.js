import React, { components, Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./css/NoMatch.css";
import Nav from "../components/Nav";

class NoMatch extends Component {
  render() {
    return (
      <>
        <Nav isLoggedIn={this.props.isLoggedIn} isOwner={this.props.isOwner} />
        <div className="noMatchBg">
          <Container fluid>
            <Row className="text-center">
              <Col size="md-12">
                <Jumbotron className="noMatchBg">
                  <div className="error">
                    <p>Error</p>
                  </div>
                </Jumbotron>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export default NoMatch;
