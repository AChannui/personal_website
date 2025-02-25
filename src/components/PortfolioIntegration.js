import React, {useState} from "react";
import Projects from "./ProjectsSection";
import TechnicalSkills from "./TechnicalSkillsSection";

const Portfolio = () => {
    const [hoveredProject, setHoveredProject] = useState(null); // State for hovered project

    return (
        <div>
            {/* Pass active hovered project to TechnicalSkills */}
            <TechnicalSkills hoveredProject={hoveredProject}/>
            {/* Pass hover state handlers to Projects */}
            <Projects setHoveredProject={setHoveredProject}/>
        </div>
    );
};

export default Portfolio;