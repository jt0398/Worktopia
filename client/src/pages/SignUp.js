import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserRegistration from "../components/UserRegistration";

function SignUp() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <UserRegistration />
        </Col>
      </Row>
    </Container>
  );
}

export default SignUp;