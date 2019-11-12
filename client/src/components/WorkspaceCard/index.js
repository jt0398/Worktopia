import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


export function WorkspaceCard({ title, description, dimensions, src }) {
  return (

    <Row>
      <Col size="md-4">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={src} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <strong>Description:</strong> {description}
              <br></br>
              <strong>Dimensions:</strong> {dimensions}
            </Card.Text>
          </Card.Body>

        </Card>
      </Col>
    </Row>

  );
}


