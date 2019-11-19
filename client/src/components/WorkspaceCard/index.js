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
  imgClass,
  name,
  description,
  dimension,
  rental_price,
  fulladdress
}) {
  return (
    <Card className="my-3 h-100">
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
                  Description: {description} <br />
                </>
              )}
              {dimension && (
                <>
                  Dimensions: {dimension} <br />
                </>
              )}
              {!imgStyle && `Price: ${rental_price}`}
            </Card.Text>
          </Card.Body>
        </div>
        {imgStyle && (
          <div className="col-md-2">
            <span className="align-middle">
              Price: {rental_price} <br />
              <Button type="submit" href="#">
                Book
              </Button>
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}

export default WorkspaceCard;
