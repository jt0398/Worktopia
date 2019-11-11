import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import WorkSpaceDetail from "./pages/WorkSpaceDetail";
import "bootstrap/dist/css/bootstrap.min.css";

import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import BookWorkspace from "./pages/BookWorkspace";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={MainPage} />

          <Route exact path="/workspacedetail" component={WorkSpaceDetail} />
          <Route exact path="/workspacebooking" component={BookWorkspace} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
