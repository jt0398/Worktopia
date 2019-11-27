import React from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";

function Ownerbooking({
  rowStyle,
  imgStyle,
  bodyStyle,
  id,
  start_date,
  image_path,
  name,
  username,
  description,
  dimension,
  email,
  phone_no,
  end_date,
  rental_price,
  totalPaidPrice
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
              Dimensions: {dimension} <br />
              {!imgStyle && `Price: ${rental_price}`}
            </Card.Text>
          </Card.Body>
        </div>

        {/* Workspace Description */}
        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>Customer</Card.Title>
            <br></br>
            <Card.Text>
              {username}
              <br />
              <br />
              {email} <br />
              <br />
              {phone_no}
            </Card.Text>
          </Card.Body>
        </div>

        {/* CheckIn Date */}

        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>Check In Date</Card.Title>
            <Card.Text>{moment(start_date).format("MM/DD/YYYY")}</Card.Text>
          </Card.Body>
        </div>

        {/* Checkout Date */}

        <div className={bodyStyle}>
          <Card.Body>
            <Card.Title>Check Out Date</Card.Title>

            <Card.Text>{moment(end_date).format("MM/DD/YYYY")}</Card.Text>
          </Card.Body>
        </div>

        <div className={imgStyle}>
          <Card.Body>
            <Card.Title>Price</Card.Title>

            <Card.Text>
              ${totalPaidPrice.toFixed(2)} <br />
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
