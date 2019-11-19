import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function WorkspaceCard({
  rowStyle,
  imgStyle,
  bodyStyle,
  src,
  variant,
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
          <Card.Img variant={variant} src={src} />
        </div>
        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {fulladdress}
              <br />
              <br />
              {description && (
                <>
                  Description: {description} <br />
                </>
              )}
              {dimension && (
                <>
                  Dimensions: {dimension} <br />
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
              {!imgStyle && `Price: $${rental_price}`}
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
