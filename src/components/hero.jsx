import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    // bottom section fade in on scroll
    gsap.fromTo(
      ".page1bottom",
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".page1bottom",
          start: "top 40%",
          end: "top 40%",
          scrub: true,
        },
      }
    );

    // intro animate
    gsap.from(".intro > *", {
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8
    });

    // right image animate
    gsap.from(".right img", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    // navbar fade out when scrolling down first page
    gsap.to(".firstnav", {
      opacity: 0,
      scrollTrigger: {
        start: "top top",
        end: "5% top",
        scrub: true,
      },
    });

  }, { scope: container });

  return (
    <div ref={container} className="page1">
      <nav className="firstnav">
        <h2>Piyush</h2>
        <div className="secondnav">
          <Link to="/about" className='nav-item'>About Me</Link>
          <Link to="/skills" className='nav-item'>Skills</Link>
          <Link to="/projects" className='nav-item'>Projects</Link>
          <Link to="/contact" className='nav-item'>Contact Me</Link>
        </div>
      </nav>

      <div className="container">
        <div className="left">
          <div className="intro">
            <h3 className="greet">Hello, I’m</h3>
            <h1 className="name">Piyush Pandey</h1>
            <p className="role">
              Full-Stack Developer building scalable, performance-driven web applications
            </p>

            <div className="social">
              <a href="https://www.linkedin.com/in/piyush-pandey-a30014255">
                <img src="socialicons/icons8-linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="https://github.com/Piyush55236k">
                <img src="socialicons/icons8-github.svg" alt="Github" />
              </a>
              <a href="https://www.instagram.com/im_piyush009">
                <img src="socialicons/instagram.svg" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <img src="/Profile/Profile.webp" alt="Profile" />
        </div>
      </div>

      <div className="page1bottom">
        <div className="content">
          <h2>Why Work With Me?</h2>
          <p className="ITBERRIES">
            I design and develop complete web solutions using the MERN stack — managing everything from intuitive front-end interfaces to secure backend services and optimized database architecture. My approach emphasizes clean system design, maintainable code, and performance that scales beyond initial deployment.<br /><br />

            With professional internship experience and competitive development exposure, I’ve built the discipline to deliver structured, reliable solutions under real constraints. I focus on engineering systems that are not only functional, but thoughtfully designed and built for long-term growth.
          </p>
        </div>
      </div>
    </div>
  )
}

export default hero;
