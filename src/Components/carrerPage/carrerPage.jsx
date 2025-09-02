
import React from "react";
import Header from "../layout/header";
import Subscribe from "../Homepage/subscribe";
import Footer from "../layout/footer";
import CarrerBanner from "./carrerBanner";
import CarrerSlider from "./carrerSlider";
import PositionSection from "./positionSection";

const CarrerPage = () => {

  return (
    <>
     <Header />
     <CarrerBanner />
     <CarrerSlider />
     <PositionSection />
     <Subscribe />
     <Footer />
    </>
  );
};

export default CarrerPage;
