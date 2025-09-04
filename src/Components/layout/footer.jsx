import Container from 'react-bootstrap/Container';
import { Col, Row } from "react-bootstrap";

const Footer = () => {


  return (
    <>
     <section className="footer-custom">
         <Container>
            <Row>
              <Col md={12} className="m-auto">
                 <div className="footer-bottom d-flex align-items-center justify-content-between">
                    <a className="copyright-text" href="#">Copyright © 2025 All rights reserved.</a>
                    <div className="footer-bottom-right d-flex gap-4">
                      <a href="#particles-js"><i className="fa-solid fa-arrow-up me-2"></i> Back to Top</a>
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
