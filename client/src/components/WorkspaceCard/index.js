import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

function WorkspaceCard({
  rowStyle,
  imgStyle,
  bodyStyle,
  src,
  variant,
  imgClass,
  name,
  description,
  dimension,
  rental_price,
  fulladdress,
  features,
  workspaceID
}) {
  return (
    <Card className="my-3">
      <div className={rowStyle}>
        <div className={imgStyle}>
          <Card.Img className={imgClass} variant={variant} src={src} />
        </div>
        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>

            <Card.Text>
              {fulladdress}
              <br />
              {description && (
                <>
                  <strong>Description: </strong>{description} <br />
                </>
              )}
              <br />
              {dimension && (
                <>
                  <strong>Dimensions: </strong>{dimension} <br />
                </>
              )}
              {features && (
                <>
                  Features:{" "}
                  {features.map((feature, index) => {
                    return index !== features.length - 1
                      ? feature.name + ", "
                      : feature.name;
                  })}
                  <br />
                </>
              )}
              <br></br>
              <strong>{!imgStyle && `CAD $${rental_price}`}</strong>
            </Card.Text>
          </Card.Body>
        </div>
        {imgStyle && (
          <div className="col-md-2">
            <span className="align-middle">
              Price: ${rental_price} <br />
              <Link
                to={`/booking/workspace/${workspaceID}`}
                class="btn btn-primary"
              >
                Book
              </Link>
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}

export default WorkspaceCard;
