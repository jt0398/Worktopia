import React from "react";
import "./img/style.css";
import Bookbtn from "../../DeleteBtn";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookBtn from "../../BookingButton";

function createContent(props) {
  return (
    <tbody>
      <tr>
        <td>
          <div id="infoDiv">
            <div>
              <p>
                <img src="./img/project3pics/logo1.png"></img>
              </p>
            </div>
            <div id="information">
              <p>Workspace </p>
              <p>This workspace consits of 4 rooms left</p>
              <p>20,Bloor Street</p>
            </div>
          </div>
        </td>
        <td>12.09.2019</td>
        <td>22.03.2019</td>
        <td>$300</td>
        <td>
          <Route component={BookBtn}></Route>
        </td>
      </tr>
    </tbody>
  );
}

export default createContent;
