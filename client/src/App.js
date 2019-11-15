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
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/workspacedetail" component={WorkSpaceDetail} />
          <Route exact path="/workspacedetail/:id" component={WorkSpaceDetail} />
          <Route exact path="/searchresults" component={SearchResults} />
          <Route exact path="/workspacebooking" component={BookWorkspace} />
          <Route exact path="/owner" component={OwnerLocations} />
          <Route exact path="/owner/addlocation" component={AddLocation} />
          <Route exact path="/owner/booking" component={OwnerBooking} />
          <Route exact path="/user/booking" component={UserBooking} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
