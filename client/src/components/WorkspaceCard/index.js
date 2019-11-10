import React from "react";
import { Label } from "../Form/index";

function CardBody({ imgCol, src, bodyCol, title, description, dimensions, price }) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className={`col-md-${imgCol}`}>
          <img src="https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg" className="card-img-top" alt="..."/>
        </div>
        <div className={`col-md-${bodyCol}`}>
          <div className="card-body">
            <h5 className="card-title">Workspace 1</h5>
            <p className="card-text">
              <Label>Description: {description}</Label>
              <Label>Dimensions: {dimensions}</Label>
              <Label>Price: {price}</Label>
            </p>
          </div>
        </div>
      </div>
    </div>


  )
};

export default CardBody;
