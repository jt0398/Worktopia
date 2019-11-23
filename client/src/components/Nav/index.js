import React, { Component } from "react";
import {withRouter } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";

const noLOGIN = [
  ["HOME", , "test"],
  // ["ABOUT", , "test1"],
  // ["SERVICES", , "test2"],
  // ["TESTIMONIAL", , "test3"],
  ["LOGIN", "/login"]
];

const userLOGIN = [
  ["HOME", "/"],
  ["MY BOOKINGS", "/booking/user"]
];

const ownerLOGIN = [
  ["HOME", "/"],
  ["ADD WORKSPACE", "/"],
  ["ADD LOCATION", "/location"],
  ["MY BOOKINGS", "/booking/owner"]
];

export class Header extends Component {
  state = {
    navItems: [],
    userLoggedIn: false
  };

  handleLogout = event => {
    event.preventDefault();
    API.logout()
      .then(response => {
        localStorage.removeItem("UserId");
        localStorage.removeItem("UserRole");
        this.setState({
          navItems: noLOGIN,
          userLoggedIn: false
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.error(err);
      });
  };
  componentDidMount() {
    //1 Owner, 2 Customer

    //Owner
    if (parseInt(localStorage.getItem("UserRole")) === 1) {
      this.setState({
        navItems: ownerLOGIN,
        userLoggedIn: true
      });
    } else if (parseInt(localStorage.getItem("UserRole")) === 2) {
      //Customer
      this.setState({
        navItems: userLOGIN,
        userLoggedIn: true
      });
    } else if (!parseInt(localStorage.getItem("UserRole"))) {
      //Anonymous
      this.setState({
        navItems: noLOGIN
      });
    }
  }

  render() {
    const linktopage = link => {
      window.location.pathname = link;
    };
    const isLoggedIn = this.state.userLoggedIn;
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
              {isLoggedIn ? (
                <Button
                  type="submit"
                  className="btn btn-info"
                  onClick={this.handleLogout}
                >
                  LOGOUT
                </Button>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default withRouter(Header);
