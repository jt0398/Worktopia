import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GoogleLogin } from "react-google-login";
import "./css/login.css";
import Card from "react-bootstrap/Card";

class Login extends Component {
  state = {
    username: "",
    password: "",
    loggedInUser: ""
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
            this.setState({
              loggedInUser: "owner"
            });
          } else {
            this.setState({
              loggedInUser: "user"
            });
          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    if (this.state.loggedInUser === "owner") {
      return <Redirect to="/owner" />;
    } else if (this.state.loggedInUser === "user") {
      return <Redirect to="/" />;
    }

    return (
      <Container fluid style={{ height: "100vh" }}>
        <br></br>
        <Card
          className="mt-5"
          style={{
            width: "22rem",
            height: "70vh",
            margin: "auto"
          }}
        >
          <Card.Img variant="top  " src="/images/loginimg.jpg" />
          <Card.ImgOverlay>
            <Card.Text>
              <Col className="text-center">
                <h3 style={{ "line-height": "100px", color: "#7fff00" }}>
                  LOGIN
                </h3>
              </Col>
            </Card.Text>
          </Card.ImgOverlay>
          <Card.Body>
            <Row>
              <Col md={12} sm={6}>
                <form>
                  <Form.Control
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="Enter your username"
                  />
                  <br></br>
                  <Form.Control
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <br></br>
                </form>
              </Col>
            </Row>

            <div className="text-center">
              <Button
                className="btn btn-info "
                disabled={this.validateFormCompletion()}
                onClick={this.handleFormSubmit}
              >
                Log In
              </Button>
            </div>

            <Row>
              <Col className="text-center" md={12} sm={6}>
                <br></br>
                <h5>
                  Create an Account...?<br></br>
                  <br></br> <a href="/signup">SIGN UP </a>
                </h5>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}

export default Login;
