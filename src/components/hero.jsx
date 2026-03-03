import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      gsap.from(".intro > *", {
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });

      // Profile image animation
      gsap.from(".right img", {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      // Bottom section fade on scroll
      gsap.fromTo(
        ".page1bottom",
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: ".page1bottom",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Navbar fade out on scroll
      gsap.to(".firstnav", {
        opacity: 0,
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "10% top",
          scrub: true,
        },
      });
    }, container);

    return () => ctx.revert(); // Proper cleanup
  }, { scope: container });

  return (
    <section ref={container} className="page1">
      <nav className="firstnav">
        <h2>Piyush</h2>
        <div className="secondnav">
          <Link to="/about" className="nav-item">About</Link>
          <Link to="/skills" className="nav-item">Skills</Link>
          <Link to="/projects" className="nav-item">Projects</Link>
          <Link to="/contact" className="nav-item">Contact</Link>
        </div>
      </nav>

      <div className="container">
        <div className="left">
          <div className="intro">
            <h3 className="greet">Hi, I’m</h3>
            <h1 className="name">Piyush Pandey</h1>
            <p className="role">Full-Stack Developer</p>

            <div className="social">
              <a href="https://www.linkedin.com/in/piyush-pandey-a30014255" target="_blank" rel="noopener noreferrer">
                <img src="socialicons/icons8-linkedin.svg" alt="LinkedIn" />
              </a>
              <a href="https://github.com/Piyush55236k" target="_blank" rel="noopener noreferrer">
                <img src="socialicons/icons8-github.svg" alt="GitHub" />
              </a>
              <a href="https://www.instagram.com/im_piyush009" target="_blank" rel="noopener noreferrer">
                <img src="socialicons/instagram.svg" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="right">
          <img src="/Profile/Profile.webp" alt="Piyush Pandey Profile" />
        </div>
      </div>

      <div className="page1bottom">
        <div className="content">
          <h2>Why Work With Me?</h2>
          <p>
            I bring both competitive validation and real industry exposure. 
            A 3-month internship at Coding Blocks strengthened my engineering fundamentals, 
            while hackathon experience sharpened my ability to design and deliver under pressure.
            <br /><br />
            I focus on building scalable systems — not just attractive interfaces — 
            emphasizing clean architecture, performance optimization, and intuitive user experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
