import React, { Component } from "react";
import { WorkspaceCard } from "../components/WorkspaceCard/index";
import AddressCard from "../components/AddressCard/index"

class OwnerLocations extends Component {
    render() {
        return (
            <>
            <WorkspaceCard />
            <AddressCard />
            </>
        )
    }
};

export default OwnerLocations;