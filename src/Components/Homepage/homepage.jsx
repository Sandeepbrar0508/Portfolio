
import React from "react";
import Header from "../layout/header";
import ParticleBackground from "./ParticlesBackground";
import Footer from "../layout/footer";
import OurStory from "./ourStory";
import ContactInfo from "./contactInfo";
import Projects from "./projects";
import Skills from "./integrationEcosystem";

const Homepage = () => {

  return (
    <>
      <Header />
      <ParticleBackground />
      <OurStory />
      <section id="experience" class="py-5">
        <div class="container">
          <div data-aos="fade-up" className="fs-1 text-white main-title1 text-center mb-5">Professional Experience
          </div>
          <div class="timeline">
            <div class="t-item">
              <div class="card border-0 shadow-soft">
                <div class="card-body">
                  <div class="d-flex justify-content-between flex-wrap gap-2">
                    <div>
                      <h5 class="card-title mb-0"><b>XCELANCE WEB SOLUTIONS, MOHALI</b></h5>
                    </div>
                    <div class="fw-semibold" style={{ color: '#cc00d3' }}>Jan 2018 — Jan 2019</div>
                  </div>
                  <p className="mt-3"><b>Roles & Responsibilities</b></p>
                  <ul class="mt-3 mb-0">
                    <li>Develop UI mockups and prototypes that clearly illustrate how sites function and look like.</li>
                    <li>Gather and evaluate user requirements in collaboration with
                      product senior managers and engineers.</li>
                    <li>Ensure complex information is delivered and displayed in the
                      most compelling way.
                    </li>
                    <li>Conduct layout adjustments based on user feedback.</li>
                  </ul>
                  <p className="mt-3"><b>Key Skills</b></p>
                  <ul class="mt-3 mb-0">
                    <li>Good experience in working on HTML, bootstrap.</li>
                    <li>Knowledge of Photoshop, Illustrator.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="t-item">
              <div class="card border-0 shadow-soft">
                <div class="card-body">
                  <div class="d-flex justify-content-between flex-wrap gap-2">
                    <div>
                      <h5 class="card-title mb-0"><b>YAPAPP PVT LTD., MOHALI</b></h5>
                    </div>
                    <div class="fw-semibold" style={{ color: '#cc00d3' }}>Jan 2019 — 2020</div>
                  </div>
                  <p className="mt-3"><b>Roles & Responsibilities</b></p>
                  <ul class="mt-3 mb-0">
                    <li>DTo design web layouts, user interfaces. Also to code these web
                      mock-ups in table less XHTML/CSS version .
                    </li>
                    <li>To design and developed websites for various clients.</li>
                  </ul>
                  <p className="mt-3"><b>Key Skills</b></p>
                  <ul class="mt-3 mb-0">
                    <li>Good experience in convert Html from Adobe XD, Figma.</li>
                    <li>Knowledge of Wordpress.</li>
                    <li>Good experience in working on HTML, bootstrap.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="t-item">
              <div class="card border-0 shadow-soft">
                <div class="card-body">
                  <div class="d-flex justify-content-between flex-wrap gap-2">
                    <div>
                      <h5 class="card-title mb-0"><b>ITECHNOLABS PVT. LTD. MOHALI</b></h5>
                    </div>
                    <div class="fw-semibold" style={{ color: '#cc00d3' }}>2020 — 2025</div>
                  </div>
                  <p className="mt-3"><b>Roles & Responsibilities</b></p>
                  <ul class="mt-3 mb-0">
                    <li>Build page navigation buttons and search fields.</li>
                    <li>Identify and troubleshoot UX problems (e.g. responsiveness).</li>
                    <li>Expertise in Current HTML, JS and CSS------------I can integrate
                      complex design in Html , css and js and can resolve issues
                      related to these.
                    </li>
                    <li>Worked on React Js projects.
                    </li>
                  </ul>
                  <p className="mt-3"><b>Key Skills</b></p>
                  <ul class="mt-3 mb-0">
                    <li>Good Knowledge of Sass , less.</li>
                    <li>Build page navigation buttons and search fields.</li>
                    <li>Prepare and present rough drafts to internal teams and key
                      stakeholders.</li>
                    <li>Identify and troubleshoot UX problems (e.g. responsiveness).</li>
                    <li>Knowledge of git commands, React JS.</li>
                    <li>Knowledge of Bootstrap 4, Bootstrap5, Slicing, Animations,
                      Material UI, Tailwind Css.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Projects />
      <Skills />
      <section id="education" class="py-5">
        <div class="container">
          <div data-aos="fade-up" className="fs-1 text-white main-title1 text-center mb-5">Education
          </div>
          <div class="timeline">
            <div class="t-item">
              <div class="card border-0 shadow-soft">
                <div class="card-body">
                  <div class="d-flex justify-content-between flex-wrap gap-2">
                    <div>
                      <h5 class="card-title mb-0"><b>B.D.S PUBLIC SCHOOL, MANUKE.</b></h5>
                    </div>
                    <div class="fw-semibold" style={{ color: '#cc00d3' }}>2008</div>
                  </div>
                  <p className="mt-3"><b>Intermediate/+2</b></p>
                </div>
              </div>
            </div>
            <div class="t-item">
              <div class="card border-0 shadow-soft">
                <div class="card-body">
                  <div class="d-flex justify-content-between flex-wrap gap-2">
                    <div>
                      <h5 class="card-title mb-0"><b>PUNJAB UNIVERSITY, JALANDHAR</b></h5>
                    </div>
                    <div class="fw-semibold" style={{ color: '#cc00d3' }}>2008 — 2012</div>
                  </div>
                  <p className="mt-3"><b>B.Tech(Computer Science)</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactInfo />
      <Footer />
    </>
  );
};

export default Homepage;
