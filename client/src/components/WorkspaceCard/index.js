import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function WorkspaceCard({
  rowStyle,
  imgStyle,
  bodyStyle,
  src,
  name,
  description,
  dimension,
  rental_price
}) {
  return (
    <Card className="my-3">
      <div className={rowStyle}>
        <div className={imgStyle}>
          <Card.Img src={src} />
        </div>
        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Description: {description}
              <br />
              Dimensions: {dimension} <br />
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
