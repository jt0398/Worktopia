import React, { Component } from "react";
import WorkspaceCard from "../components/WorkspaceCard";
import { Link } from "react-router-dom";
import { AddressNav, AddressNavItem } from "../components/AddressCard/index";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import API from "../utils/API";
import "./css/ownerDashboard.css";


// const workspaceInfo = [
//     {
//         name: "Workspace 1",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida bibendum",
//         dimension: "2000",
//         src: "https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"
//     },
//     {
//         name: "Workspace 2",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida bibendum",
//         dimension: "2000",
//         src: "https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"
//     },
//     {
//         name: "Workspace 3",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida bibendum",
//         dimension: "2000",
//         src: "https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"
//     },
//     {
//         name: "Workspace 4",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida bibendum",
//         dimension: "2000",
//         src: "https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"
//     },
//     {
//         name: "Workspace 5",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida bibendum",
//         dimension: "2000",
//         src: "https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"
//     },
//     {
//         name: "Workspace 6",
//         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida bibendum",
//         dimension: "2000",
//         src: "https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"
//     }
// ];


class OwnerLocations extends Component {
    state = {
        workspaceInfo: [],
        ownerAddress: []
    };

    componentDidMount = () => {
        API.getLocationByOwner()
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
                }
                else {
                    window.location.replace( `http://localhost:3000/owner/${this.state.ownerAddress[0].id}`);
                }
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md={3}>
                            <AddressNav>
                                {this.state.ownerAddress.map(element =>
                                    <AddressNavItem key={element.id} id={element.id} address={element.full_address} loadCards={this.loadWorkspaces}/>)}
                            </AddressNav>
                        </Col>
                        <Col md={9}>
                            <Row>
                                <CardDeck>
                                    {this.state.workspaceInfo.map(element =>
                                        
                                        <Col md={4}>
                                            <Link to={`/workspacedetail/${element.id}`}>
                                            <WorkspaceCard key={element.id} name={element.name} description={element.description}
                                                dimension={element.dimension} rental_price={element.rental_price} src={element.WorkspacePics[0].image_path} imgClass="card-img-top" variant="top"/>
                                            </Link>
                                        </Col>
                                        
                                    )}
                                </CardDeck>

                            </Row>
                        </Col>
                    </Row>
                </Container>

            </>
        )
    }
}
export default OwnerLocations;