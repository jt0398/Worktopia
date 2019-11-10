import React from "react";

class PeopleDropDown extends React.Component {
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
        <label for="FormControlSelect1">People</label>
        <select
          class="form-control"
          id="FormControlSelect2"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </select>

        {/* <input type="submit" value="Search" /> */}
      </div>
    );
  }
}

export default PeopleDropDown;