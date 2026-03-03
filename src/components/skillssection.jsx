import SkillsImages from "./skills.jsx";
import React, { useRef } from 'react'
import { skillsData } from "../data/skills.js";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const skillssection = () => {

  useGSAP (() =>{
    
gsap.from(".image-card", {
  scale: 0.8,
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".page3",
    start: "top 80%",
  }
});
  } )
  return (
   <section className="page3">
      <h1 className="Skills">SKILLS</h1>
      <SkillsImages heading="frontend" items={skillsData.frontend} className="usingnow" />
      <SkillsImages heading="backend" items={skillsData.backend} className="learning" />
      <SkillsImages heading="database" items={skillsData.database} className="other" />
      <SkillsImages heading="programming languages" items={skillsData.programmingLanguages} className="other" />
      <SkillsImages heading="tools" items={skillsData.tools} className="other" />
    </section>
  )
}

export default skillssection
