import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import Spiralbg from "../../assets/images/spiral-bg.png";
import BlogSpiralbg from "../../images/blog-spiral.png";

const SolutionDocsData = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  return (
    <>
      <section className="py-5 recent-article-main privacy-outer" style={{ position: 'relative' }}>
        <img className="absolute spiral-bg" src={Spiralbg} />
        <img className="absolute blog-spiral-bg" src={BlogSpiralbg} />
        <Container>
          <Row>
            <Col md={12}>
              <h4 className="text-white">At vero eos et accusa mus iusto </h4> 
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

export default SolutionDocsData;
