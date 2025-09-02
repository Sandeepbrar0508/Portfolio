import { Col, Container, Row } from "react-bootstrap";
import Logo1 from "../../assets/images/logo1.png";
import Logo2 from "../../assets/images/logo2.png";
import Logo3 from "../../assets/images/logo3.png";
import Logo4 from "../../assets/images/logo4.png";
import Work from "../../images/work.png";

const HowWork = () => {
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
      <section className="pt-0 mt-0" style={{ position: "relative" }}>
        <Container>
          <Row>
            <Col md={12}>
              <div data-aos="fade-up" className="fs-1 text-white main-title1">
                How It Works?
              </div>
              <p data-aos="fade-up" className="p-text text-white mb-5">
                It is a long established fact that a reader will be distracted by the readable
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section class="wave-cards-section pb-5 mb-5 how-works">
        <Container>
          <Row>
            <Col md={12}>
              <div className="cards-wrapper">
                <div className="card collect" style={{ '--card-rotate': '-15deg' }}>
                  <img src={Work} alt="work" />
                  <h4>Collect & Correlate Data</h4>
                  <p className="m-0">It is a long established fact that a reader</p>
                </div>
                <div className="card detect" style={{ '--card-rotate': '-5deg' }}>
                  <img src={Work} alt="work" />
                  <h4>Detect & Diagnose</h4>
                  <p className="m-0">It is a long established fact that a reader</p>
                </div>
                <div className="card resolve" style={{ '--card-rotate': '5deg' }}>
                  <img src={Work} alt="work" />
                  <h4>Resolve & Report</h4>
                  <p className="m-0">It is a long established fact that a reader</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
            <div className="dotted-line-div">
              <svg
                width="100%"
                height="250"
                viewBox="0 0 512 150"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C916CF" />
                    <stop offset="100%" stopColor="#6A00FF" />
                  </linearGradient>
                </defs>

                {/* Dotted Path */}
                <path
                  d="M20,100 C150,0 350,200 480,100"
                  stroke="#C916CF6B"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 6"
                  className="animated-dash"
                />

                {/* Glowing Points */}
                {[20, 250, 480].map((cx, index) => (
                  <circle
                    key={index}
                    cx={cx}
                    cy="100"
                    r="6"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    fill="#230b3d"
                    className="glow-circle"
                  />
                ))}
              </svg>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default HowWork;
