import React, { Component } from "react";
import { WorkspaceCard } from "../components/WorkspaceCard/index";
import AddressCard from "../components/AddressCard/index";
import Container from "react-bootstrap/Container";

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
    }
];

const ownerAddress = [{ id: "Link-1", address: "555 Random St, Toronto" }, { id: "Link-2", address: "57, Building, Toronto" }];

class OwnerLocations extends Component {
    state = {
        workspaceInfo,
        ownerAddress

    };

    render() {
        return (
            <>
                <Container fluid>
                    {this.state.ownerAddress.map(element =>
                        <AddressCard id={element.id} address={element.address} />)}
                </Container>
                <Container fluid>
                    {this.state.workspaceInfo.map(element =>
                        <WorkspaceCard name={element.name} description={element.description}
                            dimension={element.dimension} src={element.src} />
                    )}

                </Container>

            </>
        )
    }
};

export default OwnerLocations;