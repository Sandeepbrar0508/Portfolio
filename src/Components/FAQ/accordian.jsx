import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import DownArrow from "../../images/down.svg";
import RightArrow from "../../images/right.svg";

const accordionData = [
  {
    question: "Antis unde omnis istye natus error?",
    answer:
      "Fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact...",
  },
  {
    question: "Sed ut perspiciatis unde omnis iste natus error?",
    answer: "Answer for question 2...",
  },
  {
    question: "sed quia consequuntur magni dolores eos qui ratione?",
    answer: "Answer for question 3...",
  },
  {
    question: "At vero eos et accusamus et iusto odio dignissimos ducimus?",
    answer: "Answer for question 4...",
  },
  {
    question: "Antis unde omnis istye natus error?",
    answer: "Answer for question 5...",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0); // First open by default

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="blog-section mb-5">
      <Container>
        <Row>
          <Col md={12}>
          <div className="accordion-wrapper" data-aos="zoom-in" data-aos-delay="300">
            {accordionData.map((item, index) => (
              <div
                className={`accordion-item ${index === activeIndex ? "active" : ""}`}
                key={index}
              >
                <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                  <h4>{item.question}</h4>
                  <span className="arrow-icon">
                    <img
                      src={index === activeIndex ? DownArrow : RightArrow}
                      alt="toggle"
                      className="w-4 h-4"
                    />
                  </span>
                </div>
                <div
                  className={`accordion-content-wrapper ${index === activeIndex ? "open" : ""}`}
                >
                  <div className="accordion-content">
                    <p>{item.answer}</p>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="my-3">
              <button data-aos="zoom-in" data-aos-delay="300" className='btnn signup-btn free-trial read-more-btn'>
                See All FAQ's <i className='fa-solid fa-arrow-right-long ms-2 arrow-icon'></i>
                <span className="hoverEffect">
                    <span></span>
                </span>
              </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Accordion;
