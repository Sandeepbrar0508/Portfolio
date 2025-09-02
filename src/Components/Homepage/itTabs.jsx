import { useEffect, useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import FrameAnimation from "./frameAnimation";
import Animation7 from '../../video/video7.mp4';
import Animation8 from '../../video/video9.mp4';
import Animation9 from '../../video/video6.mp4';
import Animation10 from '../../video/video10.mp4';

const ItTabs = () => {

  return (
    <>
      <section className="py-5" style={{ position: 'relative' }}>
        {/* <img className="absolute spiral-bg" src={Spiralbg} /> */}
        <div className="container-fluid">
          <Row>
            <Col md={12}>
              <div className="tabs-custom">
                <Tabs
                  defaultActiveKey="itops"
                  id="justify-tab-example"
                  className="tabs-custom-ul border-none"
                  justify
                >
                  <Tab eventKey="itops" title="IT Ops">
                    <div className="tab-content-custom p-5">
                       <div className="d-flex gap-5 align-items-center">
                          <div className="mx-5 ps-5">
                            <div className="video-container video-custom">
                              <video
                                src={Animation7}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-xl w-full max-w-[370px]"
                              />
                            </div>
                          </div>
                          <div className="mx-5 pe-5">
                            <div data-aos="slide-right"  className="title text-white fs-1 my-3">IT Ops</div>
                            <p data-aos="flip-right" className="text-white fs-6 mb-0">It is a long established fact that a reader will be distracted by the readableIt is a long established fact that a reader will be distracted by the readableIt is a long established fact that a 
                            reader will be distracted by the readable.</p>
                          </div>
                       </div>
                    </div>
                  </Tab>
                  <Tab eventKey="security" title="Security">
                    <div className="tab-content-custom p-5">
                       <div className="d-flex gap-5 align-items-center">
                          <div className="mx-5 ps-5">
                            <div className="video-container video-custom">
                              <video
                                src={Animation8}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-xl w-full max-w-[370px]"
                              />
                            </div>
                          </div>
                          <div className="mx-5 pe-5">
                            <div data-aos="slide-right"  className="title text-white fs-1 my-3">Security</div>
                            <p data-aos="flip-right" className="text-white fs-6 mb-0">It is a long established fact that a reader will be distracted by the readableIt is a long established fact that a reader will be distracted by the readableIt is a long established fact that a 
                            reader will be distracted by the readable.</p>
                          </div>
                       </div>
                    </div>
                  </Tab>
                  <Tab eventKey="devops" title="DevOps">
                    <div className="tab-content-custom p-5">
                       <div className="d-flex gap-5 align-items-center">
                          <div className="mx-5 ps-5">
                            <div className="video-container video-custom">
                              <video
                                src={Animation9}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-xl w-full max-w-[370px]"
                              />
                            </div>
                          </div>
                          <div className="mx-5 pe-5">
                            <div data-aos="slide-right"  className="title text-white fs-1 my-3">DevOps</div>
                            <p data-aos="flip-right" className="text-white fs-6 mb-0">It is a long established fact that a reader will be distracted by the readableIt is a long established fact that a reader will be distracted by the readableIt is a long established fact that a 
                            reader will be distracted by the readable.</p>
                          </div>
                       </div>
                    </div>
                  </Tab>
                  <Tab eventKey="smbs" title="SMBs">
                    <div className="tab-content-custom p-5">
                       <div className="d-flex gap-5 align-items-center">
                          <div className="mx-5 ps-5">
                            <div className="video-container video-custom">
                              <video
                                src={Animation10}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-xl w-full max-w-[370px]"
                              />
                            </div>
                          </div>
                          <div className="mx-5 pe-5">
                            <div data-aos="slide-right"  className="title text-white fs-1 my-3">SMBs</div>
                            <p data-aos="flip-right" className="text-white fs-6 mb-0">It is a long established fact that a reader will be distracted by the readableIt is a long established fact that a reader will be distracted by the readableIt is a long established fact that a 
                            reader will be distracted by the readable.</p>
                          </div>
                       </div>
                    </div>
                  </Tab>
                </Tabs>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ItTabs;

