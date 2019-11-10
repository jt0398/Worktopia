import React from "react";

class LocationDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Location1" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div class="form-group" onSubmit={this.handleSubmit}>
        {/* <form onSubmit={this.handleSubmit}> */}
        <label for="FormControlSelect1">Pick your location </label>
        <select
          class="form-control"
          id="FormControlSelect1"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option>Location1</option>
          <option>Location2</option>
          <option>Location3</option>
          <option>Location4</option>
        </select>

        {/* <input type="submit" value="Search" /> */}
      </div>
    );
  }
}

export default LocationDropDown;
