import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import WorkSpaceDetail from "./pages/WorkSpaceDetail";
import SearchResults from "./pages/SearchResults";
import BookWorkspace from "./pages/BookWorkspace";
import NoMatch from "./pages/NoMatch";
//import Jumbotron from "./components/Jumbotron";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        {/* <Jumbotron /> */}
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/workspacedetail" component={WorkSpaceDetail} />
          <Route exact path="/searchresults" component={SearchResults} />
          <Route exact path="/workspacebooking" component={BookWorkspace} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
