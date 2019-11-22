import React from "react";
import Card from "react-bootstrap/Card";
import moment from "moment";
function UserBooking({
  rowStyle,
  idStyle,
  imgStyle,
  chkinoutStyle,
  desStyle,
  image_path,
  id,
  name,
  description,
  dimension,
  addr1,
  city,
  start_date,
  end_date,
  rental_price
}) {
  return (
    <Card className="card border-info mb-4">
      <div className={rowStyle}>
        <div className={idStyle}>
          <Card.Body className="cardBody">
            <Card.Header className="cardHeader">ID</Card.Header>
            <br></br>
            <Card.Text>{id}</Card.Text>
          </Card.Body>
        </div>
        {/* </div> */}

        <div className={imgStyle}>
          <Card.Body className="cardBody">
            {/* <Card.Header className="cardHeader">Image</Card.Header> */}
            {/* <br /> */}
            <Card.Img
              className="cardImg"
              src={image_path}
              //style={{ height: "17vh", width: "20vh" }}
            />
          </Card.Body>
        </div>

        {/* Workspace Description */}

        <div className={desStyle}>
          <Card.Body className="cardBody">
            <Card.Header className="cardHeader">{name}</Card.Header>
            <br></br>
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
        <div className={chkinoutStyle}>
          <Card.Body className="cardBody">
            <Card.Header className="cardHeader">Location</Card.Header>
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
        <div className={chkinoutStyle}>
          {/* <div className={bodyStyle}> */}
          <Card.Body className="cardBody">
            <Card.Header className="cardHeader">In</Card.Header>
            <br></br>
            <Card.Text>{moment(start_date).format("DD/MM/YYYY")}</Card.Text>
          </Card.Body>
        </div>

        {/* Checkout Date */}

        <div className={chkinoutStyle}>
          <Card.Body className="cardBody">
            <Card.Header className="cardHeader">Out</Card.Header>
            <br></br>
            <Card.Text>{moment(end_date).format("DD/MM/YYYY")}</Card.Text>
          </Card.Body>
        </div>

        <div className={chkinoutStyle}>
          <Card.Body className="cardBody">
            <Card.Header className="cardHeader bg-warning">CAD</Card.Header>
            <br></br>
            <Card.Text>
              <strong>{rental_price} </strong>
              <br />
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
