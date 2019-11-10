import React from "react";
import "./style.css";
import createContent from "../tableContent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function createHeader(props) {
  return (
    <table className="table bookingtable">
      <thead>
        <tr>
          <th scope="col">Workspace</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Price</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <Route exact path="/employee/booking" component={createContent} />
      <Route exact path="/employee/booking" component={createContent} />
      <Route exact path="/employee/booking" component={createContent} />
      <Route exact path="/employee/booking" component={createContent} />
      <Route exact path="/employee/booking" component={createContent} />
      <Route exact path="/employee/booking" component={createContent} />
      <Route exact path="/employee/booking" component={createContent} />
    </table>
  );
}

export default createHeader;
