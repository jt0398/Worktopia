import React, { Component } from "react";
import API from "../../utils/API";
import Form from "react-bootstrap/Form";

class FeatureList extends Component {
  constructor(props) {
    super(props);

    this.features = [
      { name: "Free Parking" },
      { name: "Free Wifi" },
      { name: "Playing Area" },
      { name: "Lake View" },
      { name: "Garden View" },
      { name: "Projector" },
      { name: "Computers" }
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
                id={feature.name}
                label={feature.name}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default FeatureList;
