import React, { Component } from "react";
import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends Component {
  state = {
    username: "",
    password: ""
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
      console.log("Clicked");
      API.checkLogin(this.state)
        .then(res => {
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <br></br>
        {/* <br></br> */}
        <Row>
          <Col size="md-6">
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

              <Button
                disabled={!(this.state.username && this.state.password)}
                onClick={this.handleFormSubmit}
              >
                Log In
              </Button>
             
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
