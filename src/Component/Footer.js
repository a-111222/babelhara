import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./StyleComponent.css";

export default function Footer() {
    return (
        <div>
<Container fluid="md" className="mainFooter">
  <Row>
    <Col><i className="fas fa-map-marker-alt"></i> دمياط: امتداد ميدان سرور امام استوديو باريس</Col>
    <Col><i className="fas fa-map-marker-alt"></i> دمياط الجديدة: شارع البحر ناصية المجاورة 14</Col>

    <Col>
        <a href="https://www.facebook.com/campaignofficial.egy/">

       
        with <i className="fas fa-heart"></i> by Campaign 2021  
        <span>  <i className="fas fa-code"></i> </span>

              </a>
          </Col>
  </Row>
</Container>
        </div>
    )
}
