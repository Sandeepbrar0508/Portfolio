
import React from "react";
import Header from "../layout/header";
import Subscribe from "../Homepage/subscribe";
import Footer from "../layout/footer";
import AboutBanner from "./aboutBanner";
import Mission from "./mission";
import CarrerSlider from "./carrerSlider";
import MeetTeam from "../Homepage/meetTeam";
import AboutSlider from "./aboutSlider";
import OurStory from "./ourStory";
import HowWork from "./howWork";

const AboutUs = () => {

  return (
    <>
     <Header />
     <AboutBanner />
     <Mission />
     <OurStory />
     <HowWork />
     <CarrerSlider />
     <MeetTeam />
     <AboutSlider />
     <Subscribe />
     <Footer />
    </>
  );
};

export default AboutUs;
