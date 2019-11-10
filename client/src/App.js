import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import createHeader from "./components/user/tableHeader";
import createOwnerHeader from "./components/owner/tableHeader";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/user/booking" component={createHeader} />
          <Route exact path="/owner/booking" component={createOwnerHeader} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
