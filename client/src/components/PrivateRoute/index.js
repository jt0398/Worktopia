import React from "react";
import {
  Route,
  Redirect,
  withRouter // ** important so that history is availabe
} from "react-router-dom";
import API from "../../utils/API";

class PrivateRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isOwner: false,
      loaded: false
    };
  }

  componentDidMount() {
    this.checkIsLogged();
  }

  checkIsLogged = () => {
    API.isUserLoggedIn().then(response => {
      this.setState({
        isLoggedIn: response.data.is_logged,
        isOwner: response.data.is_owner,
        loaded: true
      });
    });
  };

  render() {
    const { component: Component, ...rest } = this.props;
    const currentLocation = this.props.location.pathname;

    if (!this.state.loaded) {
      return null;
    }

    return (
      <Route
        {...rest}
        render={props => {
          return this.state.isLoggedIn === true ? (
            <Component
              {...props}
              isLoggedIn={this.state.isLoggedIn}
              isOwner={this.state.isOwner}
            />
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: currentLocation }
              }}
            />
          );
        }}
      />
    );
  }
}

export default withRouter(PrivateRoute);
