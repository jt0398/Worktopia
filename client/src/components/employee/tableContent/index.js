import React from "react";
import "./img/style.css";

function createContent(props) {
  return (
    <tbody>
      <tr>
        <td>
          <div id="infoDiv">
            <div>
              <img src="./img/project3pics/logo1.png"></img>
            </div>
            <div id="information">
              <p>Hii there</p>
              <p>My name is </p>
              <p>Sachin</p>
            </div>
          </div>
        </td>
        <td>12.09.2019</td>
        <td>22.03.2019</td>
        <td>$300</td>
      </tr>
    </tbody>
  );
}

export default createContent;
