import React from "react";
import Nav from "react-bootstrap/Nav";

function AddressCard({id, address}) {
    return (

            <Nav defaultActiveKey="/owner" className="flex-column">
                <Nav.Link eventKey={id}>{address}</Nav.Link>
            </Nav>
           
    );
}

export default AddressCard;