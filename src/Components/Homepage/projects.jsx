import React from "react";
import { Container } from "react-bootstrap";

const images = [
  { src: "../src/images/priscainternational.png", title: "Prisca International", link: "https://priscainternational.com/" },
  { src: "../src/images/p11.png", title: "Social Blaze", link: "https://socialblaze.ai/" },
  { src: "../src/images/p3.png", title: "Vox Catalog", link: "https://voxcatalog.com/login" },
  { src: "../src/images/p4.png", title: "1370 Roof Top Lounge", link: "https://www.1370rooftoplounge.com/" },
  { src: "../src/images/p5.png", title: "Erlipro", link: "https://www.erlipro.com/" },
  { src: "../src/images/p6.png", title: "DM Textle Machinery", link: "https://www.dmtextilemachinery.com/" },
  { src: "../src/images/p7.png", title: "LogyMy", link: "https://www.logymy.com/" },
  { src: "../src/images/p8.png", title: "LogyTalks", link: "https://logytalks.com/" },
  { src: "../src/images/p9.png", title: "Impacting Life", link: "http://impactinglife.itechnolabs.tech/" },
  { src: "../src/images/p10.png", title: "Capital Vue", link: "https://capital-vue.itechnolabs.co.in/login/" },
  { src: "../src/images/p2.png", title: "Mind GTC", link: "https://mindgtc.com/" },
  { src: "../src/images/p12.png", title: "Crowd Buzz", link: "https://crowdbuzz.com/pages/home" },
  { src: "../src/images/p13.png", title: "Baztel", link: "https://esim-frontend.itechnolabs.tech/" },
];

const Projects = () => {
  return (
    <section id="projects" className="my-5">
      <Container>
        <div data-aos="fade-up" className="fs-1 text-white main-title1 text-center mb-5">Projects</div>
        <div className="masonry">
          {images.map((item, i) => (
            <div key={i} className="masonry-item">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="image-wrapper">
                  <img src={item.src} alt={item.title} className="img-fluid rounded" />
                  <div className="overlay">
                    <h5>{item.title}</h5>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
