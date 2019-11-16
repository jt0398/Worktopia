import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Search extends Component {
  constructor(props) {
    super(props);

    this.locations = ["Location 1", "Location 2", "Location 3"];
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

  componentDidMount() {
    this.loadLocations();
  }

  loadLocations = () => {
    //Call API to get list of locations
  };

  render() {
    return (
      <div className="my-5">
        <div>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="location">
                <Form.Label>
                  <strong>
                    <i class="fas fa-thumbtack"></i> Locations
                  </strong>
                </Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  {this.locations.map(location => {
                    return <option>{location}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="checkinDate">
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
                />
              </Form.Group>
              <Form.Group as={Col} controlId="checkoutDate">
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
                />
              </Form.Group>
              <Form.Group as={Col} controlId="room">
                <Form.Label>
                  <strong>
                    <i class="fas fa-search-plus"></i> Rooms
                  </strong>
                </Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  {this.rooms.map(room => {
                    return <option>{room}</option>;
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col} controlId="people">
                <Form.Label>
                  <strong>
                    <i class="fas fa-user-friends"></i> People
                  </strong>
                </Form.Label>
                <Form.Control as="select">
                  <option>Choose...</option>
                  {this.people.map(person => {
                    return <option>{person}</option>;
                  })}
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Button type="submit" href="#" className="btn btn-info">
              Search
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Search;
