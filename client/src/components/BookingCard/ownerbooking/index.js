import React from "react";
import { Link } from "react-router-dom";
import { Label } from "../../Form/index";
import Card from "react-bootstrap/Card";
import { Row } from "react-bootstrap";

function Ownerbooking({
  rowStyle,
  idStyle,
  imgStyle,
  bodyStyle,
  src,
  id,
  name,
  user,
  description,
  dimension,
  userName,
  userEmail,
  userContact,
  check_in_date,
  check_out_date,
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

        <div className={imgStyle}>
          <Card.Body>
            <Card.Title>Image</Card.Title>

            <Card.Img src={src} />
          </Card.Body>
        </div>

        <div className={bodyStyle}>
          {/* Workspace Description */}
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

        {/* Workspace Description */}
        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>{user}</Card.Title>
            <br></br>
            <Card.Text>
              UserName :{userName}
              <br />
              <br />
              {userEmail} <br />
              <br />
              {userContact}
            </Card.Text>
          </Card.Body>
        </div>

        {/* CheckIn Date */}

        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>Check In Date</Card.Title>
            <Card.Text>{check_in_date}</Card.Text>
          </Card.Body>
        </div>

        {/* Checkout Date */}

        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>Check Out Date</Card.Title>

            <Card.Text>{check_out_date}</Card.Text>
          </Card.Body>
        </div>

        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>Price(TOTAL)</Card.Title>

            <Card.Text>
              Price: {rental_price} <br />
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

export default Ownerbooking;
