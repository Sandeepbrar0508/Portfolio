
import React from "react";
import Header from "../layout/header";
import Subscribe from "../Homepage/subscribe";
import Footer from "../layout/footer";
import ContactUsBanner from "./contactusBanner";
import ContactInfo from "./contactInfo";
import ContactForm from "./contactForm";

const ContactUs = () => {

  return (
    <>
     <Header />
     <ContactUsBanner />
     <ContactInfo />
     <ContactForm />
     <Subscribe />
     <Footer />
    </>
  );
};

export default ContactUs;
