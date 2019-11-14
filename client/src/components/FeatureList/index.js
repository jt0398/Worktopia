import React, { Component } from "react";
import API from "../../utils/API";
import Form from "react-bootstrap/Form";

class FeatureList extends Component {
  render() {
    return (
      <>
        <h5>Features</h5>
        {this.props.features.map(feature => {
          return (
            <div key={feature.name} className="my-3">
              <Form.Check
                type="checkbox"
                id={feature.label}
                label={feature.name}
                onChange={this.props.handleFeatureSelection}
                defaultChecked={feature.status}
              />
            </div>
          );
        })}
      </>
    );
  }
}

export default FeatureList;
