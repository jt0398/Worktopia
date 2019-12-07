import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function WorkspaceCard({
  cardStyle,
  rowStyle,
  imgStyle,
  bodyStyle,
  src = "https://placehold.it/300x300",
  variant,
  imgClass,
  name,
  description,
  dimension,
  rental_price,
  fulladdress,
  features,
  workspaceID,
  occuppants
}) {
  return (
    <Card className={cardStyle}>
      <div className={rowStyle}>
        <div className={imgStyle}>
          <Card.Img className={imgClass} variant={variant} src={src || " "} />
        </div>
        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>

            <Card.Text>
              {fulladdress && (
                <>
                  {fulladdress} <br /> <br />
                </>
              )}
              {description && (
                <>
                  <strong>Description: </strong>
                  {description} <br /> <br />
                </>
              )}
              {dimension && (
                <>
                  <strong>Dimensions: </strong>
                  {dimension} <br />
                  <br />
                </>
              )}
              {occuppants && (
                <>
                  <strong>No. of Occupants: </strong>
                  {occuppants} <br />
                  <br />
                </>
              )}
              {features && (
                <>
                  <strong>Features: </strong>
                  {features.map((feature, index) => {
                    return index !== features.length - 1
                      ? feature.name + ", "
                      : feature.name;
                  })}
                  <br />
                </>
              )}
              <br></br>
              <strong>
                {!imgStyle &&
                  `Daily Rental: CAD $${parseFloat(rental_price).toFixed(2)}`}
              </strong>
            </Card.Text>
          </Card.Body>
        </div>
        {imgStyle && (
          <div className="col-md-2">
            <div className="align-middle pt-md-3 px-3 pl-md-0">
              Daily Rental: <br />
              CAD ${parseFloat(rental_price).toFixed(2)}
              <br />
              <br />
              <Link
                to={`/booking/workspace/${workspaceID}`}
                className="btn btn-primary ml-3 ml-md-0 mb-3"
              >
                Book
              </Link>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

export default WorkspaceCard;
