// Importing all the components
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OwnerLocations from "./pages/OwnerLocations";
import AddLocation from "./pages/addLocation";
import Login from "./pages/Login";
import MainPage from "./pages/MainPage";
import WorkSpaceDetail from "./pages/WorkSpaceDetail";
import SearchResults from "./pages/SearchResults";
import BookWorkspace from "./pages/BookWorkspace";
import OwnerBooking from "./pages/ownerBooking";
import UserBooking from "./pages/userBooking";
import NoMatch from "./pages/NoMatch";
import Signup from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

import "./pages/css/MainPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // React router Component
    <Router>
      <div>
        {/* Used to select which routes to take */}
        <Switch>
          {/* To render a component depending on the URL exact path hit in the browser*/}
          <PublicRoute exact path="/" component={MainPage} />
          <PublicRoute exact path="/login" component={Login} />

          {/*Add workspace*/}
          <PrivateRoute
            exact
            path="/workspacedetail"
            component={WorkSpaceDetail}
          />

          {/*Edit workspace*/}
          <PrivateRoute
            exact
            path="/workspacedetail/:id"
            component={WorkSpaceDetail}
          />

          <PublicRoute exact path="/searchresults" component={SearchResults} />

          {/*Book workspace*/}
          <PrivateRoute
            exact
            path="/booking/workspace/:id"
            component={BookWorkspace}
          />

          {/*Owner Dashboard - Default */}
          <PrivateRoute exact path="/owner" component={OwnerLocations} />

          <PrivateRoute exact path="/owner/:id" component={OwnerLocations} />

          {/*Add location*/}
          <PrivateRoute exact path="/location" component={AddLocation} />

          {/*Edit location*/}
          <PrivateRoute
            exact
            path="/owner/editlocation/:id"
            component={AddLocation}
          />

          {/*My Booking - User*/}
          <PrivateRoute exact path="/booking/owner" component={OwnerBooking} />

          {/*My Booking - Owner*/}
          <PrivateRoute exact path="/booking/user" component={UserBooking} />

          <Route exact path="/signup" component={Signup} />

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

// Exporting App function
export default App;
