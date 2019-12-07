import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class FeatureList extends Component {
  render() {
    return (
      <div className="accordion" id="featureList">
        <button
          className="btn btn-link m-0 py-0"
          type="button"
          data-toggle="collapse"
          data-target="#spaceFeatures"
          aria-expanded="true"
          aria-controls="spaceFeatures"
        >
          <h5 className="mb-0">Features</h5>
        </button>

        <div
          id="spaceFeatures"
          className="ml-2 collapse show"
          aria-labelledby="features"
          data-parent="#featureList"
        >
          {this.props.features.map(feature => {
            return (
              <div key={feature.name} className="my-3">
                <Form.Check
                  type="checkbox"
                  id={feature.label}
                  label={feature.name}
                  onChange={this.props.handleFeatureSelection}
                  checked={feature.status}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FeatureList;
