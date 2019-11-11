import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import WorkSpaceDetail from "./pages/WorkSpaceDetail";
import SearchResults from "./pages/SearchResults";
import NoMatch from "./pages/NoMatch";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/workspacedetail" component={WorkSpaceDetail} />
          <Route exact path="/searchresults" component={SearchResults} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
