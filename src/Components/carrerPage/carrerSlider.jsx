import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import Spiral from "../../images/spiral.png";

const CarrerSlider = () => {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);


  const features = [
    {
      title: "Self-Healing Automation",
      desc: "Instant execution of automated measures ensures faster resolution.",
      gradient: "card-blue",
      rotation: "5deg",
    },
    {
      title: "Adaptive AI Insights",
      desc: "Prioritized recommendations with confidence scores and transparent reasoning.",
      gradient: "card-purple",
      rotation: "0deg",
    },
    {
      title: "Custom Policy Enforcement",
      desc: "Define your own operational or compliance guardrails and let the platform keep every system aligned.",
      gradient: "card-orange",
      rotation: "-5deg",
    },
  ];

  return (
    <Container >

      <section className="why-section mb-5">
        <div className="circle-background"><img src={Spiral} alt='spiral' /></div>
        <div className="why-container">
          {/* Left text */}
          <div className="why-left">
            <h2>Why Choose Us</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <p>
              Fact that a reader will be distracted by the readable content of a
              page when looking at its layout.
            </p>
          </div>

          {/* Right slider */}
          <div className="card-slider-wrapper1">
            <div className="card-slider1">
              {[...features, ...features].map((feature, index) => (
                <div
                  key={index}
                  className={`card-wrapper1 ${feature.gradient}`}
                  style={{
                    transform: `rotate(${feature.rotation})`,
                  }}
                >
                  <div className="card-inner1">
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default CarrerSlider;
