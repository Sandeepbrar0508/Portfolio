import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import F3 from "../../images/f3.svg";
import F4 from "../../images/f4.svg";
import F5 from "../../images/f5.svg";
import F6 from "../../images/f6.svg";
import F7 from "../../images/f7.svg";
import F8 from "../../images/f8.svg";
import F9 from "../../images/f9.svg";
import Spiralbg from "../../assets/images/spiral-bg.png";
import BlogSpiralbg from "../../images/blog-spiral.png";
import Spiral from "../../images/spiral.png";


const ServiceDetail = () => {

  const blogPosts = [
    {
      id: 1,
      title: "Automated Remediation",
      subtitle: "Pre-approved workflows that resolve common issues automatically—no tickets required.",
      image: F3,
    },
    {
      id: 2,
      title: "Compliance Automation",
      image: F4,
      subtitle: "Scheduled scans and policy enforcement for standards like GDPR, HIPAA, and more.",
    },
    {
      id: 3,
      title: "Unified Insights Dashboard",
      image: F5,
      subtitle: "Real-time visualizations of system health, uptime metrics, and remediation activity.",
    },
  ];

  const servicesPost = [
    {
      id: 1,
      title: "Open Integration Framework",
      subtitle: "Easy connections via REST APIs and webhooks to your existing tools and workflows.",
      image: F7,
    },
    {
      id: 2,
      title: "Secure Multi-Tenant Architecture",
      image: F8,
      subtitle: "Complete data isolation, role-based access controls, and audit trails.",
    },
    {
      id: 3,
      title: "Extensible Plugin Ecosystem",
      image: F9,
      subtitle: "Add custom checks, scripts, or third-party integrations with simple configuration.",
    },
  ];

  return (
    <>
      <section className="py-3 my-3 recent-article-main" style={{ position: 'relative', zIndex: '9' }}>
        <img className="absolute spiral-bg" src={Spiralbg} />
        <img className="absolute blog-spiral-bg" src={BlogSpiralbg} />
        <Container>
          <Row className="justify-content-center">
            {blogPosts.map((post, index) => (
              <Col md={4}>
                <div
                  className="key-div card-wrapper blog-article mb-4"
                  data-aos="fade-up"
                  key={post.id}
                >
                  <div className="card">
                    <div
                      className="blog-card p-3"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <div className="blog-info">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="offer-img"
                        />
                        <h4 className="blog-title l-title">{post.title}</h4>
                        <p className="text-white mb-4">{post.subtitle}</p>
                      </div>
                    </div>
                    <div className="corner-notch"></div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <Row className="py-5">
            <Col md={12}>
                {/* <div
                  className="key-div card-wrapper blog-article mb-4"
                  data-aos="fade-up"
                >  */}
                <div>
                  <div className="card offer-card">
                    <div className="circle-background"><img src={Spiral} alt='spiral' /></div>
                    <div
                      className="blog-card p-3"
                      data-aos="zoom-in"
                    >
                      <div className="blog-info text-center">
                        <img
                          src={F6}
                          alt="f6"
                          className="offer-img"
                        />
                        <h4 className="blog-title l-title">Conversational IT Assistant</h4>
                        <p className="text-white mb-4">Natural-language interface for on-demand status queries, reports, and approvals.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
          </Row>

          <Row className="justify-content-center mt-3">
            {servicesPost.map((post, index) => (
              <Col md={4}>
                <div
                  className="key-div card-wrapper blog-article mb-4"
                  data-aos="fade-up"
                  key={post.id}
                >
                  <div className="card">
                    <div
                      className="blog-card p-3"
                      data-aos="zoom-in"
                      data-aos-delay={index * 100}
                    >
                      <div className="blog-info">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="offer-img"
                        />
                        <h4 className="blog-title l-title">{post.title}</h4>
                        <p className="text-white mb-4">{post.subtitle}</p>
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

export default ServiceDetail;

