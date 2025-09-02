import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import MissionImage from "../../images/a1.svg";
import VisionImage from "../../images/a2.svg";

const Mission = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);


  const blogPosts = [
    {
      id: 1,
      title: "Our Mission",
      image: VisionImage,
    },
    {
      id: 2,
      title: "Our Vision",
      image: MissionImage,
    },
  ];

  return (
    <section className="blog-section">
      <Container>
        <Row>
          <Col md={12}>
            <div className="blog-slider-outer contact-info pb-0 block offer-section">
              <Row>
                {blogPosts.map((post, index) => (
                  <Col md={6}>

                    <div
                      className="key-div card-wrapper offer-wrapper mb-4"
                      data-aos="fade-up"
                      key={post.id}
                    >
                      <div className="card">
                        <div
                          className="blog-card"
                          data-aos="zoom-in"
                          data-aos-delay={index * 100}
                        >
                          <div className="blog-info">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="offer-img"
                            />
                            <h4 className="blog-title">{post.title}</h4>
                            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. content of a page when looking at its layout.</p>
                          </div>
                        </div>
                        <div className="corner-notch"></div>
                      </div>
                    </div>

                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mission;
