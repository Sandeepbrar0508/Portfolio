
import React from "react";
import Header from "../layout/header";
import Subscribe from "../Homepage/subscribe";
import Footer from "../layout/footer";
import SolutionAndDocsBanner from "./solutionAndDocsBanner";
import SolutionSlider from "./solutionSlider";
import UserGuide from "./userGuide";

const SolutionAndDocs = () => {

  return (
    <>
     <Header />
     <SolutionAndDocsBanner />
     <SolutionSlider />
     <UserGuide />
     <Subscribe />
     <Footer />
    </>
  );
};

export default SolutionAndDocs;
