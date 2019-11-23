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
      console.log(response.data);

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

    if (this.props.path.includes("/owner")) {
      // handles access to owner
      if (!this.state.isLoggedIn) {
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: currentLocation }
            }}
          />
        );
      } else {
        return (
          <Route
            {...rest}
            render={props => {
              return this.state.isOwner === true ? (
                <Component {...props} />
              ) : (
                <Redirect to="/" />
              );
            }}
          />
        );
      }
    } else {
      // access to non admin pages
      return (
        <Route
          {...rest}
          render={props => {
            return this.state.isLoggedIn === true ? (
              <Component {...props} />
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
}

export default withRouter(PrivateRoute);
