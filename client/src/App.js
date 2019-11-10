import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import LocationDropDown from "./components/LocationDropDown";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={LocationDropDown} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
