import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import OwnerLocations from  "./pages/OwnerLocations";
import AddLocation from "./pages/addLocation";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/owner" component={OwnerLocations} />
          <Route exact path="/owner/addlocation" component={AddLocation} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
