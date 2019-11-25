import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";

const Styles = {
  textDecoration: "none",
  color: "white"
};

const noLOGIN = [
  ["HOME", "/"],
  ["LOGIN", "/login"]
];

const userLOGIN = [
  ["HOME", "/"],
  ["SEARCH", "/searchresults"],
  ["MY BOOKINGS", "/booking/user"]
];

const ownerLOGIN = [
  ["HOME", "/owner"],
  ["ADD WORKSPACE", "/workspacedetail"],
  ["ADD LOCATION", "/location"],
  ["MY BOOKINGS", "/booking/owner"]
];

export class Header extends Component {
  state = {
    navItems: [],
    userLoggedIn: this.props.isLoggedIn || false,
    isOwner: this.props.isOwner || false
  };

  handleLogout = event => {
    event.preventDefault();
    API.logout()
      .then(response => {
        localStorage.removeItem("UserId");

        this.setState({
          navItems: noLOGIN,
          userLoggedIn: false
        });

        window.location.href = "/";
      })
      .catch(err => {
        console.error(err);
      });
  };

  componentDidMount() {
    //Owner
    if (this.state.userLoggedIn && this.state.isOwner) {
      this.setState({
        navItems: ownerLOGIN,
        userLoggedIn: true
      });
    } else if (this.state.userLoggedIn) {
      //Customer
      this.setState({
        navItems: userLOGIN,
        userLoggedIn: true
      });
    } else if (!this.state.userLoggedIn) {
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
              {this.state.navItems.map((items, index) => {
                return (
                  <Nav.Item
                    key={`navItem${index}`}
                    id="n"
                    as="li"
                    href={items[1]}
                    className="mr-3 pt-2"
                    style={{ color: "white" }}
                    key={index}
                  >
                    <Link
                      activeclass="active"
                      className="test1"
                      to={items[1]}
                      id="NavBar"
                      style={Styles}
                    >
                      {items[0]}
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

export default Header; //withRouter(Header);
