import React from "react";
import Contact from "./components/contact.jsx";
import Skillssection from "./components/skillssection";
import Projects from "./components/projects.jsx";
import Footer from "./components/footer.jsx";
import Aboutme from "./components/aboutme.jsx";
import Hero from "./components/hero.jsx";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Routes>

      <Route path="/" element={
        <>
          <Hero />
          <Aboutme />
          <Skillssection />
          <Projects />
          <Contact />
          <Footer />
        </>
      } />
      <Route path="/skills" element={<Skillssection />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<Aboutme />} />

    </Routes>
  );
};

export default App;
