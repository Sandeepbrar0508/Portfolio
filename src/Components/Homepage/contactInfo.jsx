import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import Location from "../../images/location.svg";
import Phone from "../../images/phone.svg";
import Email from "../../images/email.svg";

const ContactInfo = () => {

  return (
    <section className="blog-section mt-5" id="contact">
      <Container>
        <Row>
          <Col md={12}>
            <Row>
              <Col md={12}>
                <div data-aos="fade-up" className="fs-1 text-white main-title1 text-center mb-5">Contact</div>
              </Col>
            </Row>
            <div className="blog-slider-outer contact-info pb-0">
              <Row>
                <Col md={4}>
                  <div className="key-div card-wrapper mb-4" data-aos="fade-up">
                    <div className="card">
                      <div className="blog-card" data-aos="zoom-in" data-aos-delay="300">
                        <div className="blog-info">
                          <img src={Location} alt="location" />
                          <h4 className="blog-title mt-3">Address</h4>
                          <p className="text-white">138 Williamson Crescent, Winnipeg, MB, R3W 1E2</p>
                        </div>
                      </div>
                      <div className="corner-notch"></div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="key-div card-wrapper mb-4" data-aos="fade-up">
                    <div className="card">
                      <div className="blog-card" data-aos="zoom-in" data-aos-delay="300">
                        <div className="blog-info">
                          <img src={Phone} alt="phone" />
                          <h4 className="blog-title mt-3">Contact Us</h4>
                          <p className="text-white">95014-26625</p>
                        </div>
                      </div>
                      <div className="corner-notch"></div>
                    </div>
                  </div>
                </Col>
                <Col md={4}>
                  <div className="key-div card-wrapper mb-4" data-aos="fade-up">
                    <div className="card">
                      <div className="blog-card" data-aos="zoom-in" data-aos-delay="300">
                        <div className="blog-info">
                          <img src={Email} alt="email" />
                          <h4 className="blog-title mt-3">Email Us</h4>
                          <p className="text-white">sandeepbrar0508@gmail.com</p>
                        </div>
                      </div>
                      <div className="corner-notch"></div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div> {/* ✅ THIS was missing */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactInfo;
