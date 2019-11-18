import React from "react";
import { Link } from "react-router-dom";
import { Label } from "../../Form/index";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";
import moment from "moment";
function UserBooking({
  rowStyle,
  idStyle,
  imgStyle,
  bodyStyle,
  image_path,
  id,
  name,
  location,
  description,
  dimension,
  addr1,
  city,
  start_date,
  end_date,
  rental_price
}) {
  return (
    <Card className="my-3">
      <div className={rowStyle}>
        <div className={imgStyle}>
          <Card.Body>
            <Card.Title>ID</Card.Title>
            <Card.Text> {id} </Card.Text>
          </Card.Body>
          {/* </div> */}
        </div>

        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>Image</Card.Title>
            <br />
            <Card.Img
              src={image_path}
              style={{ height: "17vh", width: "20vh" }}
            />
          </Card.Body>
        </div>

        <div className={bodyStyle}>
          {/* Workspace Description */}
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              Description: {description}
              <br />
              <br />
              Dimensions: {dimension} <br />
              {!imgStyle && `Price: ${rental_price}`}
            </Card.Text>
          </Card.Body>
        </div>

        {/* Workspace Description */}
        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>Location</Card.Title>
            <br></br>
            <Card.Text>
              Address: <br></br>
              {addr1}
              <br />
              <br />
              City: <br></br>
              {city} <br />
            </Card.Text>
          </Card.Body>
        </div>

        {/* CheckIn Date */}

        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>Check In Date</Card.Title>
            <Card.Text>{moment(start_date).format("DD/MM/YYYY")}</Card.Text>
          </Card.Body>
        </div>

        {/* Checkout Date */}

        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>Check Out Date</Card.Title>

            <Card.Text>{moment(end_date).format("DD/MM/YYYY")}</Card.Text>
          </Card.Body>
        </div>

        <div className={imgStyle}>
          <Card.Body>
            <Card.Title>Price</Card.Title>

            <Card.Text>
              {rental_price} <br />
            </Card.Text>
          </Card.Body>
        </div>

        {imgStyle && (
          <div className="col-md-2">
            <span className="align-middle"> </span>
          </div>
        )}
      </div>
    </Card>
  );
}

export default UserBooking;
