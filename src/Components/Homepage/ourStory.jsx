import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import Spiralbg from "../../assets/images/spiral-bg.png";
import BlogSpiralbg from "../../images/blog-spiral.png";
import Story from "../../images/story.png";
import AboutText from "../../images/about-text.svg";

const OurStory = () => {


  return (
    <section id="about" className="py-3 my-3 recent-article-main contact-outer our-story" style={{ position: 'relative', zIndex: '9' }}>
      <img className="absolute spiral-bg" src={Spiralbg} />
      <img className="absolute blog-spiral-bg" src={BlogSpiralbg} />
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <div className="story-left pe-5">
              <div data-aos="fade-up" className="fs-1 text-white main-title1 text-left">About Me</div>
              <p className="text-white">Have 7.4 years of experience as a Web
                Designer. Ability to work with clients to
                understand detailed requirements and
                design complete user experiences that meet
                client needs and vision. Deep understanding
                of mobile-first and responsive design. Ability
                to clearly and effectively communicate
                design processes, ideas, and solutions to
                teams and clients.
              </p>
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
