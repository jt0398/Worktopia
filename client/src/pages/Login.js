import React, { Component } from "react";
import { withRouter } from "react-router-dom";
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

    let from =
      (this.props.location.state && this.props.location.state.from) || "";

    if (this.state.username && this.state.password) {
      API.checkLogin(this.state)
        .then(res => {
          localStorage.setItem("UserId", res.data.id);

          if (res.data.UserRoleId === 1) {
            from = from || "/owner";
            this.props.history.push(from);
          } else {
            from = from || "/";
            this.props.history.push(from);
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
              <Card.Title className="text-center h3 pt-5 text-white">
                LOGIN
              </Card.Title>
            </Card.ImgOverlay>
            <Card.Body>
              <Row>
                <Col md={12} sm={6}>
                  <Form>
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
                    <div className="text-center">
                      <Button
                        className="btn btn-info "
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
                    Create an Account...?<br></br>
                    <br></br> <a href="/signup">SIGN UP </a>
                  </h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default withRouter(Login);
