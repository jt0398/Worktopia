import React, { Component } from "react";
import {
  Card,
  Col,
  CardImg,
  CardText,
  CardBody,
  CardDeck,
  CardTitle,
  Button
} from "reactstrap";

class OfferCard extends Component {
  render() {
    return (
      <>
        <div>
          <CardDeck className="mr-auto " style={{ "margin-top": "50px" }}>
            <Card className="col-md-3 text-center ">
              <CardImg
                top
                width="100%"
                src="/images/privateoffice.jpeg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Private Offices</CardTitle>
                <CardText>
                  Great privacy and secure storage for small teams and
                  individuals Options available for 1 to 10 people
                </CardText>
                <Button>Learn More...</Button>
              </CardBody>
            </Card>

            <Card className="col-md-3 text-center">
              <CardImg
                top
                width="100%"
                src="/images/readyrent.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>READY RENT OFFICES</CardTitle>
                <CardText>
                  Ready-to-Rent offices are ideal for your growing businesses
                  Options available for 5-30 people
                </CardText>
                <Button>Learn More...</Button>
              </CardBody>
            </Card>
            <Card className="col-md-3 text-center">
              <CardImg
                top
                width="100%"
                src="/images/dedicateddesks.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>DEDICATED DESKS</CardTitle>
                <CardText>
                  Personalized desks located in an open environment Set up your
                  computer, phone and storage
                </CardText>
                <Button>Learn More...</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
        <div>
          <CardDeck
            className="mt-3 "
            style={{ width: "10rem;", align: "center" }}
          >
            <Card className="col-md-3 text-center">
              <CardImg
                top
                width="100%"
                src="/images/meetingrooms.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>MEETING ROOMS</CardTitle>
                <CardText>
                  Perfect for when you need a professional location to meet
                  Available by the hour, day or monthly
                </CardText>
                <Button>Learn More...</Button>
              </CardBody>
            </Card>

            <Card className="col-md-3 text-center">
              <CardImg
                top
                width="100%"
                src="/images/coworkingspace.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>COWORKING SPACE</CardTitle>
                <CardText>
                  Desk space in a shared environment 24/7 access to meeting
                  rooms, amenities, connectivity and support services
                </CardText>
                <Button>Learn More...</Button>
              </CardBody>
            </Card>
            <Card className="col-md-3 text-center">
              <CardImg
                top
                width="100%"
                src="/images/virtualoffices.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>VIRTUAL OFFICES</CardTitle>
                <CardText>
                  Get access to our space, conference rooms, events, and
                  receptionist services Set up mail and a local phone number
                </CardText>
                <Button>Learn More...</Button>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </>
    );
  }
}

export default OfferCard;
