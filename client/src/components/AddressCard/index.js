import React from "react";
import Nav from "react-bootstrap/Nav";

export function AddressNav({ children }) {
    return (
        <Nav defaultActiveKey="/owner" className="flex-column">{children}</Nav>
    );
}

export function AddressNavItem({ id, address }) {
    return (
        <Nav.Link eventKey={id}>{address}</Nav.Link>
    );
}

