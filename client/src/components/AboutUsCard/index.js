import React from "react";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import moment from "moment";
import Col from "react-bootstrap/Col";

function AboutUs({ upperText, image_path, lowerText }) {
  return (
    <Card className="my-3">
      <div className>
        <div className>
          <Card.Body>
            {/* <Card.Title>Image</Card.Title>
            <br />
            <Card.Img
              src={image_path}
              style={{ height: "17vh", width: "20vh" }}
            /> */}

            <h1>{upperText}</h1>
            <img
              src={image_path}
              width={90}
              height={120}
              alt="flexibility"
            ></img>
            <br></br>
            <br></br>
            <h5>{lowerText}</h5>
          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default AboutUs;
