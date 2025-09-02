
import React from "react";
import Header from "../layout/header";
import Subscribe from "../Homepage/subscribe";
import Footer from "../layout/footer";
import FAQBanner from "./faqBanner";
import Accordion from "./accordian";

const FAQ = () => {

  return (
    <>
     <Header />
     <FAQBanner />
     <Accordion />
     <Subscribe />
     <Footer />
    </>
  );
};

export default FAQ;
