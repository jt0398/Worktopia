import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/login.css";
import Card from "react-bootstrap/Card";
import Nav from "../components/Nav";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  validateFormCompletion = () => {
    return !(this.state.username && this.state.password);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      API.checkLogin(this.state)
        .then(res => {
          localStorage.setItem("UserId", res.data.id);
          localStorage.setItem("UserRole", res.data.UserRoleId);
          if (res.data.UserRoleId === 1) {
            this.props.history.push("/owner");
          } else {
            this.props.history.push("/");
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <>
        <Nav></Nav>
        <Container fluid style={{ height: "100vh" }}>
          <br></br>
          <div
            className="col-lg-4 col-md-6 col-sm-4 col-xs-2"
            style={{
              margin: "auto",
              boxShadow: "0px 0px 40px #b3b3b3",
              marginTop: "5%"
            }}
          >
            <Card.Text style={{ paddingTop: "20px" }}>
              <Col className="text-center text ">
                <h3
                  style={{
                    lineHeight: "auto",
                    color: "#7fff00",
                    borderBottomLength: "50px",
                    borderBottom: "1px solid #222"
                  }}
                >
                  LOGIN
                </h3>
              </Col>
            </Card.Text>
            <Card.Body style={{ paddingTop: "40px" }}>
              <Row>
                <Col md={12} sm={6}>
                  <Form>
                    <Form.Control
                      value={this.state.username}
                      onChange={this.handleInputChange}
                      name="username"
                      id="uname"
                      placeholder="Enter your username"
                    />
                    <br></br>
                    <Form.Control
                      value={this.state.password}
                      onChange={this.handleInputChange}
                      name="password"
                      id="passwd"
                      type="password"
                      placeholder="Enter your password"
                    />
                    <br></br>
                    <div className="text-center">
                      <Button
                        className="btn btn-info "
                        id="buttonSubmit"
                        disabled={this.validateFormCompletion()}
                        onClick={this.handleFormSubmit}
                      >
                        Log In
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>

              <Row>
                <Col className="text-center" md={12} sm={6}>
                  <br></br>
                  <h5>
                    Not Registered Yet ...?<br></br>
                    <br></br>
                  </h5>
                  <Link to="/signup">
                    <Col className="text-center text ">
                      <button id="signup">SIGN UP</button>
                    </Col>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </div>
        </Container>
      </>
    );
  }
}

export default withRouter(Login);
