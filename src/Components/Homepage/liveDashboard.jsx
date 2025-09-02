import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Livedashboard from "../../assets/images/live-dashbaord.png";
import FrameAnimation from "./frameAnimation";


const LiveDashboard = () => {

  return (
    <>
      <section className="py-3" style={{ position: 'relative' }}>
        <Container>
          <Row>
            <Col md={12}>
               <div data-aos="fade-up" className="fs-1 text-white main-title1">Live Dashboard Preview</div>
               <p data-aos="fade-up" className="p-text text-white mb-5">It is a long established fact that a reader will be distracted by the readable</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center">
            <Col md={9}>
              <div className="live-video" data-aos="zoom-in">
                <img className="img-fluid" src={Livedashboard} alt="Livedashboard" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default LiveDashboard;

