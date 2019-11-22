import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./css/NoMatch.css";

function NoMatch() {
  return (
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
  );
}

export default NoMatch;
