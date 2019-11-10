import React from "react";

class RoomsDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
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
        <label for="FormControlSelect3">Number of Room</label>
        <select
          class="form-control"
          id="FormControlSelect3"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option>One</option>
          <option>Two</option>
          <option>Three</option>
          <option>Four</option>
          <option>Five</option>
          <option>Six</option>
          <option>Seven</option>
          <option>Eight</option>
          <option>Nine</option>
          
        </select>

        {/* <input type="submit" value="Search" /> */}
      </div>
    );
  }
}

export default RoomsDropDown;
