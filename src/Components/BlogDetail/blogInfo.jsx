import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import BlogDetailImg from "../../images/blog-detail.png";
import Calendarimg from "../../images/calendar.png";
import User from "../../images/user.png";
import Spiralbg from "../../assets/images/spiral-bg.png";
import BlogSpiralbg from "../../images/blog-spiral.png";

const BlogInfo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  return (
    <>
      <section className="blog-section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="blog-slider-outer p-0">
                <img src={BlogDetailImg} alt='blog-detail-img' />
              </div>
              <div className="blog-data">
                <div className="blog-meta">
                  <span className="badge">
                    <img src={Calendarimg} alt="calendar" />
                    John Doe
                  </span>
                  <span className="badge">
                    <img src={User} alt="user" />
                    May 10, 2025
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-3 recent-article-main" style={{ position: 'relative' }}>
        <img className="absolute spiral-bg" src={Spiralbg} />
        <img className="absolute blog-spiral-bg" src={BlogSpiralbg} />
        <Container>
          <Row>
            <Col md={12}>
              <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.</p>
              <h4 className="text-white">At vero eos et accusa mus iusto </h4>    
              <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.</p>  
              <div className="blog-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</div>
              <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <p className="text-white">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover.It is a long established fact that a reader will be distracted by the readable.</p>
              <ul className="p-0 blog-info-ul list-style-none">
                <li className="text-white mb-2"><span className="arrow-span">→</span>It is a long established fact that a reader will be distracted by the readabl.</li>
                <li className="text-white mb-2"><span className="arrow-span">→</span>It is a long established fact that a reader will be distracted by the readabl.</li>
                <li className="text-white mb-2"><span className="arrow-span">→</span>It is a long established fact that a reader will be distracted by the readabl.</li>
                <li className="text-white mb-2"><span className="arrow-span">→</span>It is a long established fact that a reader will be distracted by the readabl.</li>
                <li className="text-white mb-2"><span className="arrow-span">→</span>It is a long established fact that a reader will be distracted by the readabl.</li>
                <li className="text-white mb-2"><span className="arrow-span">→</span>It is a long established fact that a reader will be distracted by the readabl.</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogInfo;
