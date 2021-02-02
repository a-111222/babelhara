import React, { Component } from "react";
import "./Homestyle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class Home extends Component {
  render() {
    return (
      <Container className="Container">
        <Row className="Row">
          <div className="overlay"></div>
      
          <div className="mainimage"> </div>
        </Row>
      </Container>
    );
  }
}
