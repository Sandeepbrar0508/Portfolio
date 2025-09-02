
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
     <Navbar
        expand="lg"
        className={`p-0 relative custom-header ${isScrolled ? "scrolled" : ""}`}
        style={{ background: 'transparent' }}
      >
      <Container fluid className="flex justify-content-between p-0">
        <div className="nav-brand">
        <Navbar.Brand href="/"><img src={Logo} alt='logo' /></Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className="active" href="/">
              Home
              <span className="hoverEffect">
                  <span></span>
              </span>
            </Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <button className='btnn signup-btn free-trial d-none' onClick={() => navigate('/pricing')}>
          Start Free Trial<i class='fa-solid fa-arrow-right-long ms-2 arrow-icon'></i>
          <span className="hoverEffect">
              <span></span>
          </span>
        </button>
          </Nav>
        </Navbar.Collapse>
        <div className="nav-right">
        <button className='btnn signup-btn free-trial mobile-display-none'>
          Start Free Trial<i class='fa-solid fa-arrow-right-long ms-2 arrow-icon'></i>
          <span className="hoverEffect">
              <span></span>
          </span>
        </button>
        </div>
      </Container>
    </Navbar>
     {/* <div id="particles-js"></div> */}
    </>
  );
};

export default Header;
