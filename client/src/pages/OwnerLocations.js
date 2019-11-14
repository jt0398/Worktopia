import React, { Component } from "react";
import WorkspaceCard from "../components/WorkspaceCard";
import { AddressNav, AddressNavItem } from "../components/AddressCard/index";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";


const workspaceInfo = [
    {
        name: "Workspace 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida bibendum",
        dimension: "2000",
        src: "https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"
    },
    {
        name: "Workspace 2",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida bibendum",
        dimension: "2000",
        src: "https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"
    },
    {
        name: "Workspace 3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida bibendum",
        dimension: "2000",
        src: "https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"
    },
    {
        name: "Workspace 4",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida bibendum",
        dimension: "2000",
        src: "https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"
    },
    {
        name: "Workspace 5",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida bibendum",
        dimension: "2000",
        src: "https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"
    },
    {
        name: "Workspace 6",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida bibendum",
        dimension: "2000",
        src: "https://www.onemoorgateplace.com/wp-content/uploads/2015/09/DSC0504-min-800x550.jpg"
    }
];

const ownerAddress = [{ id: "Link-1", address: "555 Random St, Toronto" },
{ id: "Link-2", address: "57, Building, Toronto" },
{ id: "Link-3", address: "234 Rathburn Drive" }];

class OwnerLocations extends Component {
    state = {
        workspaceInfo,
        ownerAddress
    };

    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md={3}>
                            <AddressNav>
                                {this.state.ownerAddress.map(element =>
                                    <AddressNavItem id={element.id} address={element.address} />)}
                            </AddressNav>
                        </Col>
                        <Col md={9}>
                       <Row>
                           <CardDeck>
                        {this.state.workspaceInfo.map(element =>
                            <Col md={4}>
                                <WorkspaceCard name={element.name} description={element.description}
                                    dimension={element.dimension} src={element.src} variant="top"/>
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
};

export default OwnerLocations;