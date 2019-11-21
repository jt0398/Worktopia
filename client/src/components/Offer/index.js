import React, { Component } from "react";
import {
  Card,
  Col,
  CardImg,
  CardText,
  CardBody,
  CardDeck,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class OfferCard extends Component {
  render() {
    return (
      <>
        <div>
          <CardDeck>
            <Card className="col-md-3 text-center ">
              <CardImg
                top
                width="100%"
                src="/images/readyrent.jpg"
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
                <CardTitle>Private Offices</CardTitle>
                <CardText>
                  Great privacy and secure storage for small teams and
                  individuals Options available for 1 to 10 people
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
                src="/images/readyrent.jpg"
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
                <CardTitle>Private Offices</CardTitle>
                <CardText>
                  Great privacy and secure storage for small teams and
                  individuals Options available for 1 to 10 people
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
