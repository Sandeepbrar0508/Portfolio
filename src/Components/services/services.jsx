
import React from "react";
import Header from "../layout/header";
import Subscribe from "../Homepage/subscribe";
import Footer from "../layout/footer";
import ServicesBanner from "./servicesBanner";
import Offer from "./offer";
import ServiceDetail from "./serviceDetail";

const Services = () => {

  return (
    <>
     <Header />
     <ServicesBanner />
     <Offer />
     <ServiceDetail />
     <Subscribe />
     <Footer />
    </>
  );
};

export default Services;
