import React, { useState } from "react";
import Projects from "./ProjectsSection";
import TechnicalSkills from "./TechnicalSkillsSection";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null); // State for hovered project

  return (
    <div>
      {/* Pass state handlers to Projects */}
      <Projects setHoveredProject={setHoveredProject} />
      {/* Pass hoveredProject to TechnicalSkills */}
      <TechnicalSkills hoveredProject={hoveredProject} />
    </div>
  );
};

export default Portfolio;