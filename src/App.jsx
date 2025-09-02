// import React, { useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import Homepage from './Components/Homepage/homepage';
// import CursorDot from './Components/layout/CursorDot';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import './assets/styles/index.css';
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Blog from './Components/Blog/blog';
// import BlogDetail from './Components/BlogDetail/blogDetail';
// import FAQ from './Components/FAQ/FAQ';
// import ContactUs from './Components/ContactUs/contactUs';
// import Privacy from './Components/Privacy/privacy';
// import TermsConditions from './Components/TermsConditions/termsConditions';
// import SolutionDocs from './Components/SolutionDocs/solutionDocs';
// import Pricing from './Components/Pricing/pricing';
// import SolutionAndDocs from './Components/SolutionAndDocs/solutionAndDocs';
// import Services from './Components/services/services';
// import CarrerPage from './Components/carrerPage/carrerPage';
// import AboutUs from './Components/aboutUs/aboutUs';

// export default function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       offset: 50,
//     });
//   }, []);

//   return (
//     <>
//       <CursorDot />
//       <AboutUs />
//       {/* <CarrerPage />
//       <Services />
//       <SolutionAndDocs />
//       <Blog />
//       <Homepage />
//       <BlogDetail />
//       <FAQ />
//       <ContactUs />
//       <Privacy />
//       <TermsConditions />
//       <SolutionDocs />
//       <Pricing /> */}
//       <ToastContainer position="bottom-right" />
//     </>
//   );
// }


import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AOS from 'aos';

import Homepage from './Components/Homepage/homepage';
import CursorDot from './Components/layout/CursorDot';
import Blog from './Components/Blog/blog';
import BlogDetail from './Components/BlogDetail/blogDetail';
import FAQ from './Components/FAQ/FAQ';
import ContactUs from './Components/ContactUs/contactUs';
import Privacy from './Components/Privacy/privacy';
import TermsConditions from './Components/TermsConditions/termsConditions';
import SolutionDocs from './Components/SolutionDocs/solutionDocs';
import Pricing from './Components/Pricing/pricing';
import SolutionAndDocs from './Components/SolutionAndDocs/solutionAndDocs';
import Services from './Components/services/services';
import CarrerPage from './Components/carrerPage/carrerPage';
import AboutUs from './Components/aboutUs/aboutUs';

import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/styles/index.css';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <CursorDot />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/career" element={<CarrerPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<SolutionAndDocs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/docs" element={<SolutionDocs />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </Router>
      <ToastContainer position="bottom-right" />
    </>
  );
}
