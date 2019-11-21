import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Modal from "../Modal";

const noLOGIN = [
  ["HOME", "/"],
  ["LOGIN", "/login"]
];

const userLOGIN = [
  ["HOME", "/"],
  ["MY BOOKINGS", "/booking/user"],
  ["SIGN OUT", "/logout"]
];

const ownerLOGIN = [
  ["HOME", "/"],
  ["ADD WORKSPACE", "/"],
  ["ADD LOCATION", "/location"],
  ["MY BOOKINGS", "/booking/owner"],
  ["SIGN OUT", "/logout"]
];

export class Header extends Component {
  state = {
    navItems: []
  };

  componentDidMount() {
    localStorage.setItem("UserId", 2);
    localStorage.setItem("UserRole", 2);

    //1 Owner, 2 Customer

    //Owner
    if (parseInt(localStorage.getItem("UserRole")) === 1) {
      this.setState({
        navItems: ownerLOGIN
      });
    }
    //Customer
    else if (parseInt(localStorage.getItem("UserRole")) === 2) {
      this.setState({
        navItems: userLOGIN
      });
    }
    //Anonymous
    else if (!parseInt(localStorage.getItem("UserRole"))) {
      this.setState({
        navItems: noLOGIN
      });
    }
  }

  render() {
    const linktopage = link => {
      alert("Will go to  " + link);
      window.location.pathname = link;
    };
    return (
      <>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand className="text-warning" href="/main">
            Worktopia
          </Navbar.Brand>
          <Nav
            defaultActiveKey="/main"
            as="ul"
            class="nav ml-auto"
            onSelect={linktopage}
          >
            {this.state.navItems.map(items => {
              return (
                <Nav.Item
                  id="n"
                  as="li"
                  href={items[1]}
                  className="mr-3"
                  style={{ color: "white" }}
                >
                  {console.log(window.location)}
                  <Nav.Link className="text-light" eventKey={items[1]}>
                    {items[0]}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
          </Nav>
        </Navbar>
      </>
    );
  }
}

export default Header;
