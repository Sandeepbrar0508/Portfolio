import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogImage from "../../images/blogimg.png";
import Calendarimg from "../../images/calendar.png";
import User from "../../images/user.png";
import Spiralbg from "../../assets/images/spiral-bg.png";
import BlogSpiralbg from "../../images/blog-spiral.png";


const UserGuide = () => {

  const blogPosts = [
    {
      id: 1,
      title: "At vero eos et accusa mus iusto",
    },
    {
      id: 2,
      title: "At vero eos et accusa mus iusto",
    },
    {
      id: 3,
      title: "At vero eos et accusa mus iusto",
    },
    {
      id: 4,
      title: "At vero eos et accusa mus iusto",
    },
    {
      id: 5,
      title: "At vero eos et accusa mus iusto",
    },
    {
      id: 6,
      title: "At vero eos et accusa mus iusto",
    },
    {
      id: 7,
      title: "At vero eos et accusa mus iusto",
    },
  ];

  return (
    <>
      <section className="py-3 my-3 recent-article-main" style={{ position: 'relative' }}>
        <img className="absolute spiral-bg" src={Spiralbg} />
        <img className="absolute blog-spiral-bg" src={BlogSpiralbg} />
        <Container>
          <Row>
            <Col md={12}>
              <div data-aos="fade-up" className="fs-1 text-white main-title1">User Guides</div>
              <p data-aos="fade-up" className="p-text text-white mb-5">It is a long established fact that a reader will be distracted by the readable</p>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center">
            {blogPosts.map((post, index) => (
              <Col md={6}>
                <div
                  className="key-div card-wrapper blog-article mb-4"
                  data-aos="fade-up"
                  key={post.id}
                >
                  <div className="card">
                    <div
                      className="blog-card"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <div className="blog-info">
                        <h4 className="blog-title l-title">{post.title}</h4>
                        <p className="text-white mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                        <button data-aos="zoom-in" data-aos-delay="300" className='btnn signup-btn free-trial read-more-btn view-detail-btn'>
                          View Details <i className='fa-solid fa-arrow-right-long ms-2 arrow-icon'></i>
                          <span className="hoverEffect">
                            <span></span>
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="corner-notch"></div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default UserGuide;

