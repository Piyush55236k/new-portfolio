import React from 'react'
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const aboutme = () => {

  useGSAP(() => {
    gsap.from(".aboutme", {
      opacity: 0,
      y: 80,
      scrollTrigger: {
        trigger: ".page2",
        start: "top 80%",
      }
    });
    gsap.from(".divider span", {
  width: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".divider",
    start: "top 85%"
  }
});
gsap.from(".page2", {
  clipPath: "inset(0 0 100% 0)",
  scrollTrigger: {
    trigger: ".page2",
    start: "top 90%"
  }
});
  })
  return (
    <div>
      <section className="page2">
        <div className="aboutme">
          <h1>ABOUT ME</h1>
          <p>
  I’m Piyush Pandey, a Full-Stack Developer and BCA student at the Institute of Information Technology and Management, focused on building scalable, production-ready web applications. I work primarily with the MERN stack, developing end-to-end solutions — from designing responsive front-end interfaces in React to building secure, efficient backend APIs and database architectures.
</p>

<p>
  During a 3-month professional internship and multiple hackathons — including winning an internal competition — I’ve delivered functional products under tight deadlines. I prioritize clean architecture, performance optimization, and writing maintainable code that scales beyond just a demo project.
</p>

<p>
  I’m currently looking for internship and entry-level full-stack roles where I can contribute to real-world products, take ownership of features, and grow within a team that values strong engineering fundamentals.
</p>

          <div className="divider">
            <span></span>
            <span className="diamond">W</span>
            <span></span>
          </div>
        </div>

        <div className="cards">
          <div className="design">
            <h1>DESIGN</h1>
            <p>I can design websites based on your needs and suggestions.</p>
          </div>

          <div className="development">
            <h1>DEVELOPMENT</h1>
            <p>I can build fully functional and responsive websites.</p>
          </div>

          <div className="maintenance">
            <h1>MAINTENANCE</h1>
            <p>I can add new features and maintain your site over time.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default aboutme
