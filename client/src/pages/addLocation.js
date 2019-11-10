import React, { Component } from "react";
import { Input, DropBox, DropBoxItem, FormBtn, Label } from "../components/Form/index";

class AddLocation extends Component {

    render() {
        return (
            <>
            <Label>Location Name <Input></Input></Label>
            <Label>Address <Input></Input></Label>
            <Label>Address 2 <Input></Input></Label>
            <Label>City <Input></Input></Label>
            <Label>Province<DropBox><DropBoxItem></DropBoxItem></DropBox></Label>
            <Label>Postal Code <Input></Input></Label>
            <FormBtn>Save</FormBtn>
            <FormBtn>Cancel</FormBtn>
            </>
        );
    }
}

export default AddLocation;