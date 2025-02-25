import React, {useState} from "react";
import Projects from "./ProjectsSection";
import TechnicalSkills from "./TechnicalSkillsSection";

const Portfolio = () => {
    const [hoveredProject, setHoveredProject] = useState(null); // State for hovered project
    const [hoveredSkill, setHoveredSkill] = useState(null); // State for hovered skill

    return (
        <div>
            {/* Pass states to child components */}
            <TechnicalSkills hoveredProject={hoveredProject} setHoveredSkill={setHoveredSkill}/>
            <Projects setHoveredProject={setHoveredProject} hoveredSkill={hoveredSkill}/>
        </div>
    );
};

export default Portfolio;