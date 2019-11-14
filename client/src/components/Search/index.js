import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Search extends Component {
  constructor(props) {
    super(props);

    this.people = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ];
    this.rooms = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  render() {
    return (
      <div className="my-5">
        <Form>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>
                <strong>
                  <i class="fas fa-thumbtack"></i> Locations
                </strong>
              </Form.Label>
              <Form.Control
                type="text"
                required
                onChange={this.props.onChange}
                value={this.props.location}
                name="location"
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label>
                <strong>
                  <i class="fas fa-calendar-alt"></i> Check-In Date
                </strong>
              </Form.Label>
              <Form.Control
                type="date"
                min="2019-11-11"
                max="2020-03-31"
                placeholder="YYYY/MM/DD"
                required
                onChange={this.props.onChange}
                value={this.props.checkinDate}
                name="checkinDate"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                <strong>
                  <i class="far fa-calendar-alt"></i> Check-Out Date
                </strong>
              </Form.Label>
              <Form.Control
                type="date"
                min="2019-11-11"
                max="2020-03-31"
                placeholder="YYYY/MM/DD"
                required
                onChange={this.props.onChange}
                value={this.props.checkoutDate}
                name="checkoutDate"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                <strong>
                  <i class="fas fa-search-plus"></i> Rooms
                </strong>
              </Form.Label>
              <Form.Control
                as="select"
                required
                onChange={this.props.onChange}
                value={this.props.room}
                name="room"
              >
                <option>Choose...</option>
                {this.rooms.map((room, index) => {
                  return <option key={index}>{room}</option>;
                })}
              </Form.Control>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>
                <strong>
                  <i class="fas fa-user-friends"></i> People
                </strong>
              </Form.Label>
              <Form.Control
                as="select"
                required
                onChange={this.props.onChange}
                value={this.props.people}
                name="people"
              >
                <option>Choose...</option>
                {this.people.map((person, index) => {
                  return <option key={index}>{person}</option>;
                })}
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Button
            disabled={
              this.props.location &&
              this.props.checkinDate &&
              this.props.checkoutDate &&
              this.props.rooms &&
              this.props.people
            }
            type="submit"
            href="#"
            className="btn btn-info"
            onClick={this.props.onSubmit}
          >
            Search
          </Button>
        </Form>
      </div>
    );
  }
}

export default Search;
