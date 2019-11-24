import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserRegistration from "../components/UserRegistration";

// import "./css/registrationPage.css";

import Nav from "../components/Nav";

function SignUp() {
  return (
    <>
      <Nav></Nav>
      <Container fluid>
        <Row>
          <Col size="md-12">
            <UserRegistration />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignUp;
