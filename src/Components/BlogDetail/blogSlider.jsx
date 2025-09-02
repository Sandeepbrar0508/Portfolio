import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import Arrowright from "../../images/right-arrow.png";
import BlogImage from "../../images/blogimg.png";
import Calendarimg from "../../images/calendar.png";
import User from "../../images/user.png";

const BlogSlider = () => {
  const sliderRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, offset: 50 });
  }, []);

  // Track scroll limits to disable arrows
  const handleScroll = () => {
    const container = sliderRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;

    setAtStart(scrollLeft <= 0);
    setAtEnd(Math.ceil(scrollLeft + clientWidth) >= scrollWidth);
  };

  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // initialize state

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "At vero eos et accusa mus iusto",
      date: "May 10, 2025",
      author: "John Doe",
      image: BlogImage,
    },
    {
      id: 2,
      title: "At vero eos et accusa mus iusto",
      date: "May 10, 2025",
      author: "John Doe",
      image: BlogImage,
    },
    {
      id: 3,
      title: "At vero eos et accusa mus iusto",
      date: "May 10, 2025",
      author: "John Doe",
      image: BlogImage,
    },
    {
      id: 4,
      title: "At vero eos et accusa mus iusto",
      date: "May 10, 2025",
      author: "John Doe",
      image: BlogImage,
    },
    {
      id: 5,
      title: "At vero eos et accusa mus iusto",
      date: "May 10, 2025",
      author: "John Doe",
      image: BlogImage,
    },
    {
      id: 6,
      title: "At vero eos et accusa mus iusto",
      date: "May 10, 2025",
      author: "John Doe",
      image: BlogImage,
    },
    {
      id: 7,
      title: "At vero eos et accusa mus iusto",
      date: "May 10, 2025",
      author: "John Doe",
      image: BlogImage,
    },
  ];

  return (
    <section className="blog-section m-5">
        <Row>
          <Col md={12}>
            <div className="blog-slider-outer">
              <div className="blog-header">
                <h2 className="mb-4" data-aos="fade-right">
                  Our Latest <br /> Blog
                </h2>
                <div className="slider-controls" data-aos="fade-left">
                  <button
                    className={`slider-btn ${atStart ? "disabled" : ""}`}
                    onClick={() => scroll("left")}
                    disabled={atStart}
                  >
                    <img className="arrow-left" src={Arrowright} alt="left" style={{ transform: "scaleX(-1)" }} />
                  </button>
                  <button
                    className={`slider-btn ${atEnd ? "disabled" : ""}`}
                    onClick={() => scroll("right")}
                    disabled={atEnd}
                  >
                    <img src={Arrowright} alt="right" />
                  </button>
                </div>
              </div>

              <div className="blog-slider" ref={sliderRef}>
                {blogPosts.map((post, index) => (
                  <div
                    className="key-div card-wrapper mb-4"
                    data-aos="fade-up"
                    key={post.id}
                  >
                    <div className="card">
                      <div
                        className="blog-card"
                        data-aos="zoom-in"
                        data-aos-delay={index * 100}
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="blog-img"
                        />
                        <div className="blog-info">
                          <div className="blog-meta">
                            <span className="badge">
                              <img src={Calendarimg} alt="calendar" />
                              {post.author}
                            </span>
                            <span className="badge">
                              <img src={User} alt="user" />
                              {post.date}
                            </span>
                          </div>
                          <h4 className="blog-title">{post.title}</h4>
                          <button className="read-more">Read More →</button>
                        </div>
                      </div>
                      <div className="corner-notch"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
    </section>
  );
};

export default BlogSlider;
