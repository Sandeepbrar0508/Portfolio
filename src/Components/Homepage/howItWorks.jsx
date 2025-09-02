import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Icon from "../../assets/images/icon.png";
import Spiralbg from "../../assets/images/spiral-bg.png";
import FrameAnimation from "./frameAnimation";
import Animation4 from '../../video/video4.mp4';
import Animation5 from '../../video/video5.mp4';
import Animation6 from '../../video/video8.mp4';


const HowItWorks = () => {

  return (
    <>
      <section className="py-4" style={{ position: 'relative' }}>
        <img className="absolute spiral-bg right" src={Spiralbg} />
        <Container>
          <Row>
            <Col md={12}>
               <div data-aos="fade-up" className="fs-1 text-white main-title1">How It Works</div>
               <p data-aos="fade-up" className="p-text text-white mb-5">It is a long established fact that a reader will be distracted by the readable</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col md={12}>
            <div className="how-work-outer d-flex align-items-center mt-4 mb-5">
              <div className="key-div card-wrapper" data-aos="fade-up">
                <div className="card">
                  <div className="icon-box mb-0">
                    <div className="video-container video-custom">
                      <video
                        src={Animation4}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-xl w-full max-w-[370px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg width="200" height="105" style={{ marginLeft: '-10px' }}>
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#6A00FF'}} />
                      <stop offset="100%" style={{stopColor: '#C916CF'}} />
                    </linearGradient>
                  </defs>
                  <text x="10" y="100" fontSize="100" fontWeight="900"
                        fill="none" stroke="url(#grad)" strokeWidth="2">
                    01
                  </text>
                </svg>
                <div data-aos="slide-right"  className="title text-white fs-2 my-3">Collect & Correlate Data</div>
                <p data-aos="flip-right" className="text-white fs-6 mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
              </div>
            </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <div className="how-work-outer d-flex align-items-center my-5 reverse-row">
              <div className="key-div card-wrapper" data-aos="fade-up">
                <div className="card">
                  <div className="icon-box mb-0">
                    <div className="video-container video-custom">
                      <video
                        src={Animation5}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-xl w-full max-w-[370px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg width="200" height="105" style={{ marginLeft: '-10px' }}>
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#6A00FF'}} />
                      <stop offset="100%" style={{stopColor: '#C916CF'}} />
                    </linearGradient>
                  </defs>
                  <text x="10" y="100" fontSize="100" fontWeight="900"
                        fill="none" stroke="url(#grad)" strokeWidth="2">
                    02
                  </text>
                </svg>
                <div data-aos="slide-right"  className="title text-white fs-2 my-3">Detect & Diagnose</div>
                <p data-aos="flip-right" className="text-white fs-6 mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
              </div>
            </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <div className="how-work-outer d-flex align-items-center mt-5">
              <div className="key-div card-wrapper" data-aos="fade-up">
                <div className="card">
                  <div className="icon-box mb-0">
                    <div className="video-container video-custom">
                      <video
                        src={Animation6}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="rounded-xl w-full max-w-[370px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <svg width="200" height="105" style={{ marginLeft: '-10px' }}>
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#6A00FF'}} />
                      <stop offset="100%" style={{stopColor: '#C916CF'}} />
                    </linearGradient>
                  </defs>
                  <text x="10" y="100" fontSize="100" fontWeight="900"
                        fill="none" stroke="url(#grad)" strokeWidth="2">
                    03
                  </text>
                </svg>
                <div data-aos="slide-right"  className="title text-white fs-2 my-3">Resolve & Report</div>
                <p data-aos="flip-right" className="text-white fs-6 mb-0">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.</p>
              </div>
            </div>
            </Col>
          </Row>
          {/* <svg viewBox="0 0 731 1279" className="timeline-svg">
  <path
    id="timelinePath"
    d="M127.27 1C120.208 31.8056 120.037 92.2048 168.48 147.57C228.732 216.667 333.128 258.876 397.015 272.89C511.799 298.076 677.623 370.772 703.481 548.809C729.338 726.846 560.404 820.329 457.776 852.842C355.148 885.355 93.0953 1015.99 12.915 1155.19C-3.82825 1183.91 -2.26417 1225.76 2.22161 1278"
    fill="none"
    stroke="#C916CF"
    strokeWidth="2"
    strokeDasharray="6,6"
  />
  <circle r="6" fill="#a259ff">
    <animateMotion dur="10s" repeatCount="indefinite">
      <mpath href="#timelinePath" />
    </animateMotion>
  </circle>
</svg> */}
<svg viewBox="0 0 731 1279" width="100%" height="100%" className="timeline-svg">
  <defs>
    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#a259ff" />
      <stop offset="100%" stopColor="#ff00ff" />
    </linearGradient>
  </defs>

  <path
    id="timelinePath"
    d="M127.27 1C120.208 31.8056 120.037 92.2048 168.48 147.57C228.732 216.667 333.128 258.876 397.015 272.89C511.799 298.076 677.623 370.772 703.481 548.809C729.338 726.846 560.404 820.329 457.776 852.842C355.148 885.355 93.0953 1015.99 12.915 1155.19C-3.82825 1183.91 -2.26417 1225.76 2.22161 1278"
    fill="none"
    stroke="#C916CF"
    strokeWidth="2"
    strokeDasharray="6,6"
  />

  <circle r="8" fill="#080113" stroke="url(#circleGradient)" strokeWidth="3">
    <animateMotion dur="10s" repeatCount="indefinite">
      <mpath href="#timelinePath" />
    </animateMotion>
  </circle>
</svg>

        </Container>
      </section>
    </>
  );
};

export default HowItWorks;

