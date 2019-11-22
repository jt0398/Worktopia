import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GoogleLogin } from "react-google-login";

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
          console.log("API Response ", res.data);
          localStorage.setItem("UserId", res.data.id);
          localStorage.setItem("UserRole", res.data.UserRoleId);
          if (res.data.UserRoleId === 1) {
            console.log("Owner logged in");
            return <Redirect to="/owner/{res.data.id}" />;
          } else {
            console.log("User logged in");
            return <Redirect to="/" />;
          }
        })
        .catch(err => console.log(err));
    }
  };

  responseGoogle = response => {
    console.log(response);
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
                className="btn btn-info"
                disabled={this.validateFormCompletion()}
                onClick={this.handleFormSubmit}
              >
                Log In
              </Button>
            </form>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <GoogleLogin
          // clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        ,
      </Container>
    );
  }
}

export default Login;
