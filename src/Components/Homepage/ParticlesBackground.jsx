// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadLinksPreset } from "tsparticles-preset-links";

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     await loadLinksPreset(engine);
//   }, []);

//   return (
//     <>
//     <div className="particles-wrapper">
//       <Particles
//           id="tsparticles"
//           init={particlesInit}
//           options={{
//             preset: "links",
//             fullScreen: { enable: true, zIndex: -1 },
//             background: { color: "transparent" },
//             particles: {
//               color: { value: ["#ff00ff", "#00f2ff", "#a259ff"] },
//               links: {
//                 enable: true,
//                 color: "#a259ff",
//                 distance: 130,
//                 opacity: 0.4,
//                 width: 1,
//               },
//             },
//             interactivity: {
//               events: {
//                 onHover: {
//                   enable: true,
//                   mode: "grab", // 👈 makes lines follow the cursor
//                 },
//                 resize: true,
//               },
//               modes: {
//                 grab: {
//                   distance: 200,
//                   links: {
//                     opacity: 0.6,
//                   },
//                 },
//               },
//             },
//           }}
//         />
//     </div>
//     </>
//   );
// };

// export default ParticlesBackground;

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ParticleBackground = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
  }, []);

  useEffect(() => {
    // Load particles.min.js only once
    const script = document.createElement("script");
    script.src = "particles.min.js";
    script.async = true;
    script.onload = () => {
      fetch("particles.json")
        .then(res => res.json())
        .then(config => {
          if (window.particlesJS) {
            window.particlesJS("particles-js", config);
          } else {
            console.error("particlesJS not found.");
          }
        })
        .catch(err => console.error("Failed to load particles.json", err));
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup (optional)
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="banner">
    <div
      id="particles-js"
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        // zIndex: -1,
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
    />
    <div className="banner-text">
      <h1 data-aos="zoom-in" data-aos-delay="300">IT, Evolved to Autonomy</h1>
      <p data-aos="zoom-in" data-aos-delay="300">Self-driving infrastructure with zero tickets</p>
      <button data-aos="zoom-in" data-aos-delay="300" className='btnn signup-btn free-trial'>
        Start Free Trial<i className='fa-solid fa-arrow-right-long ms-2 arrow-icon'></i>
        <span className="hoverEffect">
            <span></span>
        </span>
      </button>
    </div>
    </div>
  );
};

export default ParticleBackground;

