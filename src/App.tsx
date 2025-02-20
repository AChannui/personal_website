// src/App.js
import React from "react";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavbarComponent"; // Ensure Navbar is imported correctly
import Header from "./components/HeaderComponent";
import About from "./components/AboutSection";
import TechnicalSkills from "./components/TechnicalSkillsSection";
import Projects from "./components/ProjectsSection";
import Contact from "./components/ContactForm";

const App = () => {
  return (
    <div>
      <Navbar /> {/* Render Navbar at the top */}
      <Header />
      <About />
      <TechnicalSkills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;