import React from "react";
import {
  Route,
  withRouter // ** important so that history is availabe
} from "react-router-dom";
import API from "../../utils/API";

class PublicRoute extends React.Component {
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
      console.log(response);

      this.setState({
        isLoggedIn: response.data.is_logged,
        isOwner: response.data.is_owner,
        loaded: true
      });
    });
  };

  render() {
    const { component: Component, ...rest } = this.props;

    if (!this.state.loaded) {
      return null;
    }

    return (
      <Route
        {...rest}
        render={props => {
          return (
            <Component
              {...props}
              isLoggedIn={this.state.isLoggedIn}
              isOwner={this.state.isOwner}
            />
          );
        }}
      />
    );
  }
}

export default withRouter(PublicRoute);
