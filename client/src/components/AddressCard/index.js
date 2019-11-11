import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function AddressCard(props) {
    return (
        <Container fluid>


            <Accordion defaultActiveKey="0">

                <Col size="md-4">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            Address 1
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>555 Random St, Toronto</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            Address 2
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>57, Some Building, Toronto</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Col>
            </Accordion>


        </Container>

    );
}

export default AddressCard;