
import React from "react";
import Header from "../layout/header";
import Subscribe from "../Homepage/subscribe";
import Footer from "../layout/footer";
import PricingBanner from "./pricingBanner";
import PricingInfo from "./pricingInfo";

const Pricing = () => {

  return (
    <>
     <Header />
     <PricingBanner />
     <PricingInfo />
     <Subscribe />
     <Footer />
    </>
  );
};

export default Pricing;
