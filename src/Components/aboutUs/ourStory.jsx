import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import Spiralbg from "../../assets/images/spiral-bg.png";
import BlogSpiralbg from "../../images/blog-spiral.png";
import Story from "../../images/story.png";
import AboutText from "../../images/about-text.png";

const OurStory = () => {


  return (
    <section className="py-3 my-3 recent-article-main contact-outer our-story" style={{ position: 'relative', zIndex: '9' }}>
      <img className="absolute spiral-bg" src={Spiralbg} />
      <img className="absolute blog-spiral-bg" src={BlogSpiralbg} />
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="story-left pe-5">
              <div data-aos="fade-up" className="fs-1 text-white main-title1 text-left">Our Story</div>
              <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content.</p>
              <button className='btnn signup-btn w-auto mt-4'>
                Read More<i className='fa-solid fa-arrow-right-long ms-2 arrow-icon'></i>
                <span className="hoverEffect"><span></span></span>
              </button>
            </div>
          </Col>
          <Col md={6}>
          <div className="story-right-outer ps-5">
            <div className="story-right ps-5" style={{ position: 'relative' }}>
              <img className="img-fluid" src={Story} alt='story' />
              <img className="about-text-img absolute rotating-image" src={AboutText} alt='about-text' />
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurStory;
