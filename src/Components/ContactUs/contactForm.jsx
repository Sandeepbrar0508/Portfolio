import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import BlogImage from "../../images/blogimg.png";
import Calendarimg from "../../images/calendar.png";
import User from "../../images/user.png";
import Spiralbg from "../../assets/images/spiral-bg.png";
import BlogSpiralbg from "../../images/blog-spiral.png";


const ContactForm = () => {

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
    <>
      <section className="py-3 my-3 recent-article-main contact-outer" style={{ position: 'relative', zIndex: '9' }}>
        <img className="absolute spiral-bg" src={Spiralbg} />
        <img className="absolute blog-spiral-bg" src={BlogSpiralbg} />
        {/* <Container>
          <Row>
            <Col md={12}>
               <div data-aos="fade-up" className="fs-1 text-white main-title1">Contact</div>
               <p data-aos="fade-up" className="p-text text-white mb-5">It is a long established fact that a reader will be distracted by the readable</p>
            </Col>
          </Row>
        </Container> */}
        <div className="contact-container">
      <div className="map-container">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31543.427056702347!2d133.8821287!3d-23.6980428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2cc2b6e6d579bd81%3A0x504f0b535df64c0!2sAlice%20Springs%20NT%2C%20Australia!5e0!3m2!1sen!2sin!4v1720651310701!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="form-container">
        <div data-aos="fade-up" className="fs-1 text-white main-title1 text-left ps-5">Contact Us</div>
        <div className="drop-message-div">
          <div className="drop-message-inner">
              <p>Drop your message here</p>
              <form>
                <input
                  className='login-input w-full'
                  type='text'
                  placeholder='First Name'
                />
                <input
                  className='login-input w-full'
                  type='text'
                  placeholder='Last Name'
                />
                <input
                  className='login-input w-full'
                  type='text'
                  placeholder='Email Address'
                />
                <input
                  className='login-input w-full'
                  type='text'
                  placeholder='Phone Number'
                />
                <textarea className='login-input w-full' placeholder="Message Here......" />
                <button className='btnn signup-btn w-full'>
                  Submit<i className='fa-solid fa-arrow-right-long ms-2 arrow-icon'></i>
                  <span className="hoverEffect"><span></span></span>
                </button>
              </form>
          </div>
        </div>
      </div>
    </div>
      </section>
    </>
  );
};

export default ContactForm;

