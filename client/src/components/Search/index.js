import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Search({ locations, people, rooms }) {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="location">
          <Form.Label>Locations</Form.Label>
          <Form.Control as="select">
            <option>Choose...</option>
            {locations.map(location => {
              return <option>{location}</option>;
            })}
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="room">
          <Form.Label>Rooms</Form.Label>
          <Form.Control as="select">
            <option>Choose...</option>
            {rooms.map(room => {
              return <option>{room}</option>;
            })}
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} controlId="people">
          <Form.Label>People</Form.Label>
          <Form.Control as="select">
            <option>Choose...</option>
            {people.map(person => {
              return <option>{person}</option>;
            })}
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Button type="submit" href="#">Search</Button>
    </Form>
  );
}

export default Search;
