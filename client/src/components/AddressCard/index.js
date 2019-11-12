import React from "react";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

function AddressCard({id, address}) {
    return (

            <Nav defaultActiveKey="/owner" className="flex-column">
                <Nav.Link eventKey={id}>{address}</Nav.Link>
            </Nav>
           
    );
}

export default AddressCard;