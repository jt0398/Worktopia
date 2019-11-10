import React from "react";
import "./style.css";
import createOwnerContent from "../tableContent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function createOwnerHeader(props) {
  return (
    <table className="table bookingtable">
      <thead>
        <tr>
          <th scope="col">Workspace</th>
          <th scope="col">Start Date</th>
          <th scope="col">End Date</th>
          <th scope="col">Price</th>
          <th scope="col">User ID</th>
        </tr>
      </thead>
      <Route exact path="/owner/booking" component={createOwnerContent} />
      <Route exact path="/owner/booking" component={createOwnerContent} />
      <Route exact path="/owner/booking" component={createOwnerContent} />
      <Route exact path="/owner/booking" component={createOwnerContent} />
      <Route exact path="/owner/booking" component={createOwnerContent} />
      <Route exact path="/owner/booking" component={createOwnerContent} />
      <Route exact path="/owner/booking" component={createOwnerContent} />
    </table>
  );
}

export default createOwnerHeader;
