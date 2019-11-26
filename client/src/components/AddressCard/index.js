import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { EditIcon } from "../EditIcon/index";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBinoculars } from "@fortawesome/free-solid-svg-icons";

export function AddressNav({ children }) {
  return (
    <Nav defaultActiveKey="/owner" className="flex-column">
      {children}
    </Nav>
  );
}

export function AddressNavItem({ id, address, loadCards }) {
  return (
    <>
      {address}
      <Link
        className="nav-link"
        to={`/owner/${id}`}
        onClick={() => loadCards(id)}
        title="View Details"
      >
        {/* {address} */}
        <FontAwesomeIcon icon={faBinoculars}></FontAwesomeIcon>{" "}
        &nbsp;&nbsp;&nbsp;
        <EditIcon id={id} />
      </Link>
    </>
  );
}
