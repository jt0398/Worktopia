import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";

const noLOGIN = [
  ["HOME", , "test"],
  ["ABOUT", , "test1"],
  ["SERVICES", , "test2"],
  ["TESTIMONIAL", , "test3"],
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
    localStorage.setItem("UserId", "");
    localStorage.setItem("UserRole", "");

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
      window.location.pathname = link;
    };
    return (
      <>
        <Navbar bg="dark" expand="lg" collapseOnSelect sticky="top">
          <Navbar.Brand className="text-warning" href="/">
            Worktopia
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav mr-auto">
            <Nav
              defaultActiveKey="/main"
              as="ul"
              className="nav ml-auto"
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
                    <Link
                      activeClass="active"
                      className="test1"
                      to={items[2]}
                      spy={true}
                      smooth={true}
                      duration={1200}
                      offset={-60}
                    >
                      <Nav.Link className="text-light" eventKey={items[1]}>
                        {items[0]}
                      </Nav.Link>
                    </Link>
                  </Nav.Item>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default Header;
