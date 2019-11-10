import React from "react";
//import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
//import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import LocationDropDown from "../components/LocationDropDown";
import PeopleDropDown from "../components/PeopleDropDown";

//import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";

function MainPage() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <LocationDropDown />
          <PeopleDropDown />
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
