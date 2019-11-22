import React, { Component } from "react";
import WorkspaceCard from "../components/WorkspaceCard";
import { Link } from "react-router-dom";
import { AddressNav, AddressNavItem } from "../components/AddressCard/index";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import API from "../utils/API";

import Footer from "../components/Footer";

import "./css/ownerDashboard.css";

class OwnerLocations extends Component {
    state = {
      workspaceInfo: [],
      ownerAddress: []
    };

    componentDidMount = () => {
      const ownerId = parseInt(localStorage.getItem("UserId"));
      API.getLocationByOwner(ownerId)
        .then(res => {
          this.setState({ ownerAddress: res.data });
          console.log(this.state.ownerAddress);
        })
        .catch(err => console.log(err));
      this.loadWorkspaces(this.props.match.params.id);
    }

    loadWorkspaces = id => {
      API.getWorkspaceByLocation(id)
        .then(res => {
          console.log(res.data);
          if (id) {
            this.setState({ workspaceInfo: res.data });
          } else {
            window.location.replace(window.location.origin + `/owner/${this.state.ownerAddress[0].id}`);
          }
        })
        .catch(err => console.log(err));
    }

    render() {
      return (
        <>
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
                      {!this.state.workspaceInfo.length ? (
                        <h5 className="text-center">
                        Add workspace for this location{" "}
                          <Link to="/workspacedetail">here</Link>
                        </h5>
                      ) : (
                        <CardDeck>
                          {this.state.workspaceInfo.map(element => (
                            <Col md={4} className="p-3">
                              <Link to={`/workspacedetail/${element.id}`}>
                                <div className="cardDeck">
                                  <WorkspaceCard
                                    key={element.id}
                                    name={element.name}
                                    description={element.description}
                                    dimension={element.dimension}
                                    rental_price={element.rental_price}
                                    src={element.WorkspacePics[0].image_path}
                                    imgClass="card-img-top"
                                    variant="top"
                                  />
                                </div>
                              </Link>
                            </Col>
                          ))}
                        </CardDeck>
                      )}
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
