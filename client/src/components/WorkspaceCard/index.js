import React from "react";
import { Link } from "react-router-dom";
import { Label } from "../Form/index";
import Card from "react-bootstrap/Card";

export default function WorkspaceCard({
  imgCol,
  bodyCol,
  src,
  name,
  description,
  dimensions,
  price
}) {
  return (
    <Card>
      <Card.Img src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Description: {description}
          <br />
          Dimensions: {dimensions} <br />
          Price: {price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
