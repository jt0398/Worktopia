import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OwnerLocations from "./pages/OwnerLocations";
import AddLocation from "./pages/addLocation";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import WorkSpaceDetail from "./pages/WorkSpaceDetail";
import SearchResults from "./pages/SearchResults";
import BookWorkspace from "./pages/BookWorkspace";
import OwnerBooking from "./pages/ownerBooking";
import UserBooking from "./pages/userBooking";
import NoMatch from "./pages/NoMatch";
import Payments from "./pages/Payments";
import Signup from "./pages/SignUp";

import "./pages/css/MainPage.css";
// "./css/MainPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/workspacedetail" component={WorkSpaceDetail} />
          <Route
            exact
            path="/workspacedetail/:id"
            component={WorkSpaceDetail}
          />
          <Route exact path="/searchresults" component={SearchResults} />
          <Route
            exact
            path="/booking/workspace/:id"
            component={BookWorkspace}
          />
          <Route exact path="/owner" component={OwnerLocations} />
          <Route exact path="/owner/:id" component={OwnerLocations} />
          <Route exact path="/location" component={AddLocation} />
          <Route exact path="/owner/editlocation/:id" component={AddLocation} />
          <Route exact path="/booking/owner" component={OwnerBooking} />
          <Route exact path="/booking/user" component={UserBooking} />
          <Route exact path="/payments" component={Payments} />
          <Route exact path="/signup" component={Signup} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
