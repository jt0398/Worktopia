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
        <label for="FormControlSelect2">People </label>
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
          <option>10</option>
          <option>11</option>
          <option>12</option>
          <option>13</option>
          <option>14</option>
          <option>15</option>
          <option>16</option>
          <option>17</option>
          <option>18</option>
          <option>19</option>
          <option>20</option>
        </select>

        {/* <input type="submit" value="Search" /> */}
      </div>
    );
  }
}

export default PeopleDropDown;
