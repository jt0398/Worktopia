import React, { Component } from "react";
import {
  Card,
  Col,
  Row,
  CardImg,
  CardText,
  CardBody,
  CardDeck,
  CardTitle,
  Button
} from "reactstrap";

import API from "../../utils/workspaceAPI";

class OfferCard extends Component {
  state = {
    workspaces: []
  };

  componentDidMount() {
    API.getWorkspaces().then(response => {
      this.setState({
        workspaces: response.data
      });
    });
  }

  handleOnClick = id => {
    window.location.href = "/booking/workspace/" + id;
  };

  render() {
    return (
      <Row className="mr-auto">
        <CardDeck>
          {this.state.workspaces.map(workspace => {
            return (
              <Col key={`workspace${workspace["id"]}`} md={4} className="my-3">
                <Card className="h-100">
                  <CardImg
                    key={`workspace${workspace["id"]}`}
                    top
                    width="100%"
                    src={
                      workspace.WorkspacePics &&
                      workspace.WorkspacePics[0].image_path
                    }
                    alt={workspace.name}
                  />
                  <CardBody>
                    <CardTitle>
                      <strong>{workspace.name}</strong>
                    </CardTitle>
                    <CardText>{workspace.description}</CardText>
                    <Button onClick={() => this.handleOnClick(workspace.id)}>
                      Learn More...
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </CardDeck>
      </Row>
    );
  }
}

export default OfferCard;
