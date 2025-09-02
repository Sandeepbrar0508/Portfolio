import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import DoubleTick from "../../images/double-tick.svg";

const PricingInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const [isYearly, setIsYearly] = useState(false);

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      buttonText: "Try For Free →",
      gradient: "gradient-free",
    },
    {
      name: "Premium",
      price: "$29",
      buttonText: "Get Started →",
      gradient: "gradient-premium",
    },
    {
      name: "Enterprice",
      price: "$49",
      buttonText: "Get Started →",
      gradient: "gradient-enterprise",
    },
  ];

  const features = [
    "Antis unde omnis iste natus",
    "Antis unde omnis iste natus",
    "Antis unde omnis iste natus",
    "Antis unde omnis iste natus",
    "Antis unde omnis iste natus",
  ];

  return (
    <section className="blog-section">
      <Container>
        <Row>
          <Col md={12}>
            <div className="blog-slider-outer contact-info pb-0 block">
              <Row>
                <Col md={12}>
                  <div className="pricing-upper">
                    <h2 className="text-white bold text-center">Choose the plan that works for you</h2>
                    <div className="toggle-container">
                      <span className={!isYearly ? "active-label" : "inactive-label"}>Monthly</span>
                      <div className={`switch ${isYearly ? "yearly" : "monthly"}`} onClick={toggleBilling}>
                        <div className="slider" />
                      </div>
                      <span className={isYearly ? "active-label" : "inactive-label"}>Yearly</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                {plans.map((plan, index) => (
                  <Col md={4} key={index}>
                    <div className={`pricing-card ${plan.gradient}`}>
                      <div className="pricing-card-inner">
                        <div className="pricing-header">
                          <h4>{plan.name}</h4>
                          <h2>{plan.price}<span className="per-month">/Month</span></h2>
                        </div>
                        <div className="pricing-bottom">
                          <ul className="feature-list">
                            {features.map((feature, idx) => (
                              <li key={idx}>
                                <span className="checkmark"><img src={DoubleTick} alt='doubletick' /></span> {feature}
                              </li>
                            ))}
                          </ul>
                          <button data-aos="zoom-in" data-aos-delay="300" className='btnn signup-btn free-trial read-more-btn'>
                            Try For Free <i className='fa-solid fa-arrow-right-long ms-2 arrow-icon'></i>
                            <span className="hoverEffect">
                              <span></span>
                            </span>
                          </button>
                        </div>
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

export default PricingInfo;
