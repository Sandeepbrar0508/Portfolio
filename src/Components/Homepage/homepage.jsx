
import React from "react";
import Header from "../layout/header";
import ParticleBackground from "./ParticlesBackground";
import KeyValue from "./keyValue";
import HowItWorks from "./howItWorks";
import ItTabs from "./itTabs";
import LiveDashboard from "./liveDashboard";
import IntegrationEcosystem from "./integrationEcosystem";
import TestimonialSlider from "./testimonialSlider";
import MeetTeam from "./meetTeam";
import Subscribe from "./subscribe";
import Footer from "../layout/footer";

const Homepage = () => {

  return (
    <>
     <Header />
     <ParticleBackground />
     <KeyValue />
     <HowItWorks />
     <ItTabs />
     <LiveDashboard />
     <IntegrationEcosystem />
     <TestimonialSlider />
     <MeetTeam />
     <Subscribe />
     <Footer />
    </>
  );
};

export default Homepage;
