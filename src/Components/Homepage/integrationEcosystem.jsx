import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Skills = () => {
  // Replace images with text skills
  const skills = [
    "Basic React",
    "Bootstrap",
    "JavaScript",
    "HTML",
    "CSS",
    "Material UI",
    "SASS",
    "LESS",
    "Tailwind CSS",
    "Photoshop",
    "Illustrator",
    "GIT",
  ];

  return (
    <section id="skills" className="py-3" style={{ position: "relative" }}>
      <Container>
        <Row>
          <Col md={12}>
            <div data-aos="fade-up" className="fs-1 text-white main-title1 mb-5">
              Skills
            </div>
          </Col>
        </Row>
      </Container>

      {/* Line 1: Left to Right */}
      <Marquee speed={50} gradient={false}>
        {skills.map((skill, i) => (
          <div key={`line1-${i}`} className="logo-item" style={{ color: '#fff' }}>
            {skill}
          </div>
        ))}
      </Marquee>

      {/* Line 2: Right to Left */}
      <Marquee
        speed={50}
        gradient={false}
        direction="right"
        className="mt-4 mb-5"
      >
        {skills.map((skill, i) => (
          <div key={`line2-${i}`} className="logo-item" style={{ color: '#fff' }}>
            {skill}
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Skills;
