import React, { Component } from "react";
import "./Homestyle.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from "../Component/Footer";

export default class Home extends Component {

  render() {
    return (
      <Container className="Container">
        <Row className="Row">
          <div className="overlay"></div>
          <div className="mainimage"> </div>
          <div className="mainContext">
            <p><Footer/>
            <a href="tel:16483">
              16
              <span className="hotLine">4</span> 
              83
            </a>
      
            </p> </div>
        </Row>
      </Container>
    );
  }

}
