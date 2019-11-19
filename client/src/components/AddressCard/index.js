import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { EditIcon} from "../EditIcon/index";
export function AddressNav({ children }) {
    return (
        <Nav defaultActiveKey="/owner" className="flex-column">{children}</Nav>
    );
}

export function AddressNavItem({ id, address, loadCards }) {
    return (
        <>
        <Link className="nav-link" to={`/owner/${id}`} onClick={() => loadCards(id)} >{address}</Link>
        <EditIcon id={id} />
        </>
    );
}

