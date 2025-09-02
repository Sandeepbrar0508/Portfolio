
import React from "react";
import Container from 'react-bootstrap/Container';
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Logo from '../../images/logo.png';

const Footer = () => {


  return (
    <>
     <section className="m-3 footer-custom">
      <div className="wave"></div>
         <Container>
            <Row className="align-items-center">
              <Col md={4}>
                <img src={Logo} alt='logo' />
              </Col>
              <Col md={8}>
                <Row>
                  <Col md={3}>
                    <ul className="m-0 p-0">
                      <li><a href='/services'>Features</a></li>
                      <li><a href='/contact'>Contact Us</a></li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <ul className="m-0 p-0">
                      <li><a href='/solutions'>Solutions</a></li>
                      <li><a href='/career'>Careers</a></li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <ul className="m-0 p-0">
                      <li><a href='/docs'>Docs</a></li>
                      <li><a href='/faq'>FAQ</a></li>
                    </ul>
                  </Col>
                  <Col md={3}>
                    <ul className="m-0 p-0">
                      <li><a href='/pricing'>Pricing</a></li>
                      <li><a href='/blog'>Blog</a></li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md={10} className="m-auto">
                 <div className="footer-bottom d-flex align-items-center justify-content-between">
                    <a className="copyright-text" href="#">copyright © 2025 all rights reserved</a>
                    <div className="footer-bottom-right d-flex gap-4">
                      <a href="/privacy">Privacy Policy</a>
                      <a href="/terms">Terms & Conditions</a>
                    </div>
                 </div>
              </Col>
            </Row>
         </Container>
     </section>
    </>
  );
};

export default Footer;
