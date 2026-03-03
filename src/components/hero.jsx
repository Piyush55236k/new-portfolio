import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {

      // -------------------------
      // SCROLL BASED MASTER TL
      // -------------------------
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      });

      // Layered Parallax
      tl.to(".left", {
        y: -120,
        ease: "none"
      }, 0);

      tl.to(".right", {
        y: -60,
        ease: "none"
      }, 0);

      // Text scale + fade
      tl.to(".intro", {
        scale: 0.92,
        opacity: 0.6,
        ease: "none"
      }, 0);

      // Image subtle rotation
      tl.to(".right img", {
        rotate: 6,
        ease: "none"
      }, 0);

      // Navbar fade
      tl.to(".firstnav", {
        opacity: 0,
        ease: "none"
      }, 0);

      // -------------------------
      // ENTRANCE ANIMATION
      // -------------------------
      gsap.from(".intro > *", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9,
        ease: "power3.out"
      });

      gsap.from(".right img", {
        scale: 0.85,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });

    }, container);

    return () => ctx.revert();
  }, { scope: container });

  return (
    <section ref={container} className="page1">
      
      {/* NAVBAR */}
      <nav className="firstnav">
        <h2 className="logo">Piyush</h2>
        <div className="secondnav">
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/skills" className="nav-item">Skills</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="container">
        <div className="left">
          <div className="intro">
            <h3 className="greet">Hi, I’m</h3>
            <h1 className="name">Piyush Pandey</h1>
            <p className="role">Full-Stack Developer</p>

            <div className="social">
              <a
                href="https://www.linkedin.com/in/piyush-pandey-a30014255"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="socialicons/icons8-linkedin.svg" alt="LinkedIn" />
              </a>

              <a
                href="https://github.com/Piyush55236k"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="socialicons/icons8-github.svg" alt="GitHub" />
              </a>

              <a
                href="https://www.instagram.com/im_piyush009"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="socialicons/instagram.svg" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <img
            src="/Profile/Profile.webp"
            alt="Piyush Pandey Profile"
          />
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="page1bottom">
        <div className="content">
          <h2>Why Work With Me?</h2>
          <p>
            I build structured, scalable web applications using the MERN stack,
            focusing on performance, clean architecture, and intuitive user experience.
            My internship and hackathon experience strengthened my ability to
            deliver reliable solutions under real deadlines.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Hero;
