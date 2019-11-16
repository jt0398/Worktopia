import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Modal from "../Modal";

export class Header extends Component {
  render() {
    return (
      <>
       
          <Navbar bg="dark" expand="lg">
            <Navbar.Brand className="text-warning" href="/main">
              Worktopia
            </Navbar.Brand>
            <Nav
              defaultActiveKey="/main"
              as="ul"
              class="nav justify-content-end"
            >
              <Nav.Item as="li">
                <Nav.Link className="text-light" href="/main">
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item as="li">
                <Modal />
              </Nav.Item>
            </Nav>
          </Navbar>
        
      </>
    );
  }
}

export default Header;
