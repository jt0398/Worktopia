import React, { Component } from "react";
import WorkspaceCard from "../components/WorkspaceCard";
import { Link } from "react-router-dom";
import { AddressNav, AddressNavItem } from "../components/AddressCard/index";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import API from "../utils/API";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import "./css/ownerDashboard.css";

class OwnerLocations extends Component {
  state = {
    workspaceInfo: [],
    ownerAddress: []
  };
  //get ownerId from local storage and make an API call to populate all of owner's locations,
  //select first location by default and display all workspaces for that location
  componentDidMount = () => {
    const ownerId = parseInt(localStorage.getItem("UserId"));
    API.getLocationByOwner(ownerId)
      .then(res => {
        this.setState({ ownerAddress: res.data });

        let id = this.props.match.params.id;

        if (!this.props.match.params.id) {
          id = this.state.ownerAddress[0].id;
        }

        this.loadWorkspaces(id);
      })
      .catch(err => console.log(err));
  };

  loadWorkspaces = id => {
    localStorage.setItem("LocationId", id);
    API.getWorkspaceByLocation(id)
      .then(res => {
        this.setState({ workspaceInfo: res.data });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <>
        <Nav isLoggedIn={this.props.isLoggedIn} isOwner={this.props.isOwner} />
        <Container fluid>
          <div className="ownerBg">
            <div className="DBheader">Locations Dashboard</div>
            <div className="paddingForPage text-center">
              <Row>
                <Col md={3}>
                  <div className="borderForAddress">
                    <div className="detailNedit">Details and Edit</div>
                    <AddressNav>
                      {this.state.ownerAddress.map(element => (
                        <AddressNavItem
                          key={element.id}
                          id={element.id}
                          address={element.full_address}
                          loadCards={this.loadWorkspaces}
                        />
                      ))}
                    </AddressNav>
                  </div>
                </Col>

                <Col md={9}>
                  <Row>
                    <CardDeck>
                      {this.state.workspaceInfo.map(element => (
                        <Col md={4} className="p-3" key={element.id}>
                          <Link
                            to={`/workspacedetail/${element.id}`}
                            style={{ textDecoration: "none", color: "black" }}
                          >
                            <div className="cardDeck h-100">
                              <WorkspaceCard
                                key={element.id}
                                name={element.name}
                                description={element.description}
                                dimension={element.dimension}
                                rental_price={element.rental_price}
                                src={element.WorkspacePics[0].image_path || ""}
                                imgClass="card-img-top"
                                style={{ height: "121px", width: "185px" }}
                                variant="top"
                                cardStyle="my-3 h-100"
                              />
                            </div>
                          </Link>
                        </Col>
                      ))}
                    </CardDeck>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
          <br></br>
          <Footer />
        </Container>
      </>
    );
  }
}
export default OwnerLocations;
