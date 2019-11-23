import React from "react";
import {
  Route,
  Redirect,
  withRouter // ** important so that history is availabe
} from "react-router-dom";

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
    /* queries the server for user status, ie, logged in or not*/

    let check = new Promise(resolve => {
      const last_active_client = localStorage.getItem("last_active")
        ? localStorage.getItem("last_active")
        : 0;
      const data = { payload: last_active_client };
      resolve(axios.post("/api-session", data));
    });
    check.then(response => {
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
