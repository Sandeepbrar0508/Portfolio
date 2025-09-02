import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Blogvideo from '../../video/blog-video.mp4';

const TermsConditionsBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <div className="banner blog-banner blog-detail-banner">
    <div className="video-container video-custom blog-video">
      <video
        src={Blogvideo}
        autoPlay
        loop
        muted
        playsInline
        className="rounded-xl w-full max-w-[370px]"
      />
    </div>
    <div className="banner-text">
      <h1 data-aos="zoom-in" data-aos-delay="300">Terms & Conditions </h1>
    </div>
    </div>
  );
};

export default TermsConditionsBanner;

