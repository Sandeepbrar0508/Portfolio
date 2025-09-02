import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import Location from "../../images/location.svg";
import Phone from "../../images/phone.svg";
import Email from "../../images/email.svg";

const ContactInfo = () => {

  return (
    <section className="blog-section">
      <Container>
        <Row>
          <Col md={12}>
              <div className="blog-slider-outer contact-info pb-0">
                <Row>
                  <Col md={4}>
                    <div className="key-div card-wrapper mb-4" data-aos="fade-up">
                      <div className="card">
                        <div className="blog-card" data-aos="zoom-in" data-aos-delay="300">
                          <div className="blog-info">
                            <img src={Location} alt="location" />
                            <h4 className="blog-title mt-3">Address</h4>
                            <p className="text-white">1234 Elm Street, Suite 567  Springfield, IL 62704 UOS  United States</p>
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
                            <p className="text-white">(555) 123-4567 <br/>
                              (555) 123-4568 <br/>
                              (555) 123-4569</p>
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
                            <p className="text-white">support@example.com <br/>
hello@example.com</p>
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
