import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function CardStyle(props) {
  return (
  <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
 
</Card>
 );
};

export function WorkspaceCard(props) {
  return (
    <Container fluid>
      <Row>
      <Col size="md-4"><CardStyle></CardStyle></Col>
      <Col size="md-4"><CardStyle></CardStyle></Col>
      <Col size="md-4"><CardStyle></CardStyle></Col>
      </Row>
    </Container>
  );
}


