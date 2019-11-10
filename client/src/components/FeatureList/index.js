import React, { Component } from "react";
import API from "../utils/API";
import Form from "react-bootstrap/Form";

export function FeatureItem({ features }) {
  return (
    <>
      {features.map(feature => {
        <div key={feature.name} className="mb-3">
          <Form.Check type="checkbox" id={feature.id} label={feature.name} />
        </div>;
      })}
    </>
  );
}
