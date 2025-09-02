import { Col, Container, Row } from "react-bootstrap";
import Logo1 from "../../assets/images/logo1.png";
import Logo2 from "../../assets/images/logo2.png";
import Logo3 from "../../assets/images/logo3.png";
import Logo4 from "../../assets/images/logo4.png";
import User1 from "../../assets/images/user1.png";
import User2 from "../../assets/images/user2.png";
import User3 from "../../assets/images/user3.png";
import User4 from "../../assets/images/user4.png";
import Spiral from "../../images/spiral.png";
import Marquee from "react-fast-marquee";

const MeetTeam = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo1, Logo2, Logo3, Logo4]; 

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
    <>
    <section className="pt-5 mt-4" style={{ position: "relative" }}>
      <Container>
        <Row>
          <Col md={12}>
            <div data-aos="fade-up" className="fs-1 text-white main-title1">
              Meet the Team
            </div>
            <p data-aos="fade-up" className="p-text text-white mb-5">
              It is a long established fact that a reader will be distracted by the readable
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <section class="wave-cards-section pb-5 mb-5">
      <Container>
        <Row>
          <Col md={12}>
             <div className="cards-wrapper">
                <div className="card" style={{ '--card-rotate': '-15deg' }}>
                  <img src={User1} alt="User 1" />
                  <h4>John Smith</h4>
                  <p className="m-0">Lorem ipsum</p>
                </div>
                <div className="card active" style={{ '--card-rotate': '-5deg' }}>
                  <img src={User2} alt="User 2" />
                  <h4>John Smith</h4>
                  <p className="m-0">Lorem ipsum</p>
                </div>
                <div className="card" style={{ '--card-rotate': '5deg' }}>
                  <img src={User3} alt="User 3" />
                  <h4>John Smith</h4>
                  <p className="m-0">Lorem ipsum</p>
                </div>
                <div className="card" style={{ '--card-rotate': '15deg' }}>
                  <img src={User4} alt="User 4" />
                  <h4>John Smith</h4>
                  <p className="m-0">Lorem ipsum</p>
                </div>
              </div>
              <div className="circle-animation-wrapper">
                <svg className="rotating-circle" width="300" height="300" viewBox="0 0 300 300">
                  <defs>
                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stop-color="#a020f0" />
                      <stop offset="100%" stop-color="#ff00ff" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="150"
                    cy="150"
                    r="140"
                    stroke="url(#circleGradient)"
                    stroke-width="3"
                    fill="none"
                    stroke-linecap="round"
                    stroke-dasharray="880"
                    stroke-dashoffset="660"
                  />
                </svg>
              </div>

          </Col>
        </Row>
      </Container>
      <div class="circle-background"><img src={Spiral} alt='spiral' /></div>
    </section>
  </>
  );
};

export default MeetTeam;
