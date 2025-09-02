import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Quotes from '../../assets/images/quotes.png';
import 'swiper/css';
import 'swiper/css/navigation';
import { Container, Row, Col } from 'react-bootstrap';
import Arrowleft from '../../assets/images/arrow-left.png';
import Arrowright from '../../assets/images/arrow-right.png';

import TestimonialImg from '../../assets/images/testimonial-user.png';

const TestimonialSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
const [isEnd, setIsEnd] = useState(false);

  return (
    <section className="pb-5 mt-5 testimonial-section" style={{ position: "relative" }}>
      <Container>
        <Row>
          <Col md={12}>
            <div data-aos="fade-up" className="fs-1 text-white main-title1 text-left">
              Testimonials
            </div>
            <p data-aos="fade-up" className="p-text text-white mb-5 text-left">
              It is a long established fact that a reader will be distracted by the readable
            </p>
          </Col>
        </Row>

         <div className="testimonial-wrapper my-5">
            <div className="swiper-arrows">
              <button
                ref={prevRef}
                className={`arrow-button prev-arrow ${isBeginning ? "disabled" : "active"}`}
              >
                <img src={Arrowleft} alt="←" />
              </button>
              <button
                ref={nextRef}
                className={`arrow-button next-arrow ${isEnd ? "disabled" : "active"}`}
              >
                <img src={Arrowright} alt="→" />
              </button>
            </div>
            <div className="quote-icon"><img src={Quotes} alt='quotes' /></div>
            <Swiper
                modules={[Navigation]}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                }}
                onSlideChange={(swiper) => {
                  setIsBeginning(swiper.isBeginning);
                  setIsEnd(swiper.isEnd);
                }}
                loop={true} // or true if you're looping
              >
              {[1, 2, 3].map((i) => (
                <SwiperSlide>
                  <div className="testimonial-card">
                    <img src={TestimonialImg} alt="John Smith" className="testimonial-img" />
                    <div className="testimonial-text me-5">
                      <h3>John Smith</h3>
                      <p className="subtitle">It is a long established</p>
                      <div className="underline" />
                      <p className="testimonialcontent mb-5">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default mod It is a long established fact that a reader.
                      </p>
                      
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
      </Container>
    </section>
  );
};

export default TestimonialSlider;
