import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function WorkspaceCard({
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
    <Card className="my-3">
      <div className={rowStyle}>
        <div className={imgStyle}>
          <Card.Img className={imgClass} variant={variant} src={src} />
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
