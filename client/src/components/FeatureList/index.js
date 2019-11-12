import React, { Component } from "react";
import API from "../../utils/API";
import Form from "react-bootstrap/Form";

class FeatureList extends Component {
  constructor(props) {
    super(props);

    this.features = [
      { name: "Free Parking" , label: "freeParking"},
      { name: "Free Wifi", label: "freeWifi" },
      { name: "Playing Area", label: "playingArea" },
      { name: "Lake View" , label:"lakeView"},
      { name: "Garden View" , label: "gardenView"},
      { name: "Projector" , label: "projector"},
      { name: "Computers" , label:"computers"}
    ]; //This is not a state because it will not be changed after first load
  }

  loadFeatures = () => {
    //Call API to get list of features
  };

  componentDidMount() {
    this.loadFeatures();
  }

  render() {
    return (
      <>
        <h5>Features</h5>
        {this.features.map(feature => {
          return (
            <div key={feature.name} className="my-3">
              <Form.Check
                type="checkbox"
                id={feature.label}
                label={feature.name}
                onChange={this.props.handleFeatureSelection}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default FeatureList;
