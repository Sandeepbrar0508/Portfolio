import { Col, Container, Row } from "react-bootstrap";

const Subscribe = () => {

  return (
    <section className="pt-3" style={{ position: "relative" }}>
      <Container>
        <Row>
          <Col md={12}>
            <div data-aos="fade-up" className="subscribe-inner d-flex justify-content-between gap-4">
              <div className="subscribe-left me-4">
                 <h2 className="text-white">Try R34L for Free</h2>
                 <p className="p-text text-left text-white m-0">
                    It is a long established fact that a reader
                 </p>
              </div>
              <div className="subscribe-right d-flex align-items-center">
                <input type="text" placeholder="Enter Email Address" />
                <button className='btnn signup-btn free-trial'>
                  Subscribe<i className='fa-solid fa-arrow-right-long ms-2 arrow-icon'></i>
                  <span className="hoverEffect">
                      <span></span>
                  </span>
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Subscribe;
