import { Col, Container, Row } from "react-bootstrap";
import Logo1 from "../../assets/images/logo1.png";
import Logo2 from "../../assets/images/logo2.png";
import Logo3 from "../../assets/images/logo3.png";
import Logo4 from "../../assets/images/logo4.png";
import Marquee from "react-fast-marquee";

const IntegrationEcosystem = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo1, Logo2, Logo3, Logo4, Logo1, Logo2, Logo3, Logo4, Logo1, Logo2, Logo3, Logo4]; 

  const renderLogoStrip = (keyPrefix) => (
    <div className="logo-strip">
      {logos.map((src, i) => (
        <div key={`${keyPrefix}-${i}`} className="logo-item">
          <img src={src} alt={`logo-${i}`} />
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-3" style={{ position: "relative" }}>
      <Container>
        <Row>
          <Col md={12}>
            <div data-aos="fade-up" className="fs-1 text-white main-title1">
              Integrations & Ecosystem
            </div>
            <p data-aos="fade-up" className="p-text text-white mb-5">
              It is a long established fact that a reader will be distracted by the readable
            </p>
          </Col>
        </Row>
      </Container>

       {/* Line 1: Left to Right */}
      <Marquee speed={50} gradient={false}>
        {logos.map((src, i) => (
          <div key={`line1-${i}`} className="logo-item">
            <img src={src} alt={`logo-${i}`} />
          </div>
        ))}
      </Marquee>

      {/* Line 2: Right to Left */}
      <Marquee speed={50} gradient={false} direction="right" className="mt-4 mb-5">
        {logos.map((src, i) => (
          <div key={`line2-${i}`} className="logo-item">
            <img src={src} alt={`logo-${i}`} />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default IntegrationEcosystem;
