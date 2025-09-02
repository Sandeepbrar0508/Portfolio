import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Icon from "../../assets/images/icon.png";
import Spiralbg from "../../assets/images/spiral-bg.png";
import Animation1 from '../../video/video1.mp4';
import Animation2 from '../../video/video3.mp4';
import Animation3 from '../../video/video2.mp4';


const KeyValue = () => {

  return (
    <>
      <section className="py-5 key-value-outer" style={{ position: 'relative' }}>
        <img className="absolute spiral-bg" src={Spiralbg} />
        <Container>
          <Row>
            <Col md={12}>
               <div data-aos="fade-up" className="fs-1 text-white main-title1">Key Value Props</div>
               <p data-aos="fade-up" className="p-text text-white mb-5">It is a long established fact that a reader will be distracted by the readable</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={6}>
              <div class="key-div card-wrapper mb-4" data-aos="fade-up">
                <div class="card">
                  <div data-aos="slide-right"  className="title text-white fs-2 mb-2">24/7 Proactive Monitoring</div>
                  <p data-aos="flip-right" class="text-white fs-6 mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                  <div class="icon-box mb-0">
                    {/* <FrameAnimation speed={24} /> */}
                    <div className="video-container video-custom">
                      <video
                        src={Animation1}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-xl w-full max-w-[370px]"
                      />
                    </div>
                  </div>
                  <div class="corner-notch"></div>
                </div>
              </div>
            </Col>
            <Col md={6}>
              <div class="key-div card-wrapper mb-4" data-aos="fade-up">
                <div class="card">
                  <div data-aos="slide-right"  className="title text-white fs-2 mb-2">Automated Remediation</div>
                  <p data-aos="flip-right" class="text-white fs-6 mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                  <div class="icon-box mb-0">
                    <div className="video-container video-custom">
                      <video
                        src={Animation2}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-xl w-full max-w-[370px]"
                      />
                    </div>
                  </div>
                  <div class="corner-notch"></div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div class="key-div card-wrapper mb-2" data-aos="fade-up">
                <div class="card">
                  <div className="d-flex align-items-center p-2">
                  <div class="icon-box ms-5">
                    <div className="video-container video-custom">
                      <video
                        src={Animation3}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-xl w-full max-w-[370px]"
                      />
                    </div>
                  </div>
                  <div className="p-5 ms-5">
                  <div data-aos="slide-right"  className="title text-white fs-2 mb-2">AI-Driven Insights</div>
                  <p data-aos="flip-right" class="text-white fs-6 mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
                  </div>
                  </div>
                  <div class="corner-notch"></div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default KeyValue;

