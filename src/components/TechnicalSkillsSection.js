import React, {useState} from "react";
import {
    FaPython,
    FaDatabase,
    FaLinux,
    FaJava,
    FaGitAlt,
    FaDocker,
    FaHtml5,
    FaWindows,
    FaNetworkWired,
} from "react-icons/fa";
import {
    SiMysql,
    SiSqlite,
    SiGnubash,
    SiJetbrains,
    SiVim,
    SiCplusplus,
    SiRacket,
    SiVirtualbox,
    SiMacos,
    SiWireshark,
    SiTypescript,
} from "react-icons/si";
import {FaFile} from "react-icons/fa6";
import {BsRegex} from "react-icons/bs";
import {TfiLayoutPlaceholder} from "react-icons/tfi";

const TechnicalSkills = ({hoveredProject, setHoveredSkill}) => {
    const [hoveredSkillIndex, setHoveredSkillIndex] = useState(null); // Track which skill is hovered

    const programmingLanguages = [
        {name: "Python", icon: <FaPython size={50}/>},
        {name: "SQL", icon: <FaDatabase size={50}/>},
        {name: "SQLite", icon: <SiSqlite size={50}/>},
        {name: "MySQL", icon: <SiMysql size={50}/>},
        {name: "C++", icon: <SiCplusplus size={50}/>},
        {name: "Bash", icon: <SiGnubash size={50}/>},
        {name: "Java", icon: <FaJava size={50}/>},
        {name: "Racket", icon: <SiRacket size={50}/>},
        {name: "Assembly (MIPS)", icon: <FaFile size={50}/>},
        {name: "HTML", icon: <FaHtml5 size={50}/>},
        {name: "TypeScript", icon: <SiTypescript size={50}/>},
    ];

    const otherSkills = [
        {name: "Windows Development", icon: <FaWindows size={50}/>},
        {name: "macOS Development", icon: <SiMacos size={50}/>},
        {name: "Linux Development", icon: <FaLinux size={50}/>},
        {name: "Vim", icon: <SiVim size={50}/>},
        {name: "Regex", icon: <BsRegex size={50}/>},
        {name: "JetBrains IDE", icon: <SiJetbrains size={50}/>},
        {name: "Fundamental TCP/IP", icon: <FaNetworkWired size={50}/>},
        {name: "Git", icon: <FaGitAlt size={50}/>},
        {name: "Docker", icon: <FaDocker size={50}/>},
        {name: "VirtualBox", icon: <SiVirtualbox size={50}/>},
        {name: "Wireshark", icon: <SiWireshark size={50}/>},
    ];

    const isRelevantSkill = (skill) =>
        hoveredProject?.technologies?.includes(skill.name); // Check if skill is relevant to the hovered project

    return (
        <section id="technical-skills" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center">Technical Skills</h2>

                {/* Programming Languages Section */}
                <div className="row mt-4">
                    <div className="col-12 mb-4">
                        <h4 className="text-center">Programming Languages</h4>
                        <div className="d-flex flex-wrap justify-content-center">
                            {programmingLanguages.map((skill, index) => (
                                <div
                                    key={index}
                                    className="skill-card text-center mx-3 my-2"
                                    onMouseEnter={() => {
                                        setHoveredSkill(skill.name); // Set skill as hovered
                                        setHoveredSkillIndex(index); // Track current hovered skill
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredSkill(null); // Clear hovered skill
                                        setHoveredSkillIndex(null); // Reset hover tracking
                                    }}
                                    style={{
                                        transform:
                                            isRelevantSkill(skill) || index === hoveredSkillIndex
                                                ? "scale(1.1)" // Scale up if relevant or hovered
                                                : "scale(1)", // Default scale
                                        opacity:
                                            hoveredProject && !isRelevantSkill(skill) ? 0.4 : 1, // Grey out irrelevant skills when a project is hovered
                                        borderRadius: "12px", // Round skill boxes
                                        backgroundColor: "transparent", // No background color change
                                        boxShadow:
                                            index === hoveredSkillIndex
                                                ? "0 6px 12px rgba(0, 0, 0, 0.2)" // Enhanced shadow for hovered
                                                : "none", // Default shadow
                                        padding: "10px", // Optional: Add padding for better spacing
                                        transition:
                                            "transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease", // Smooth transitions
                                    }}
                                >
                                    <div className="icon mb-2">{skill.icon}</div>
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Other Skills Section */}
                    <div className="col-12">
                        <h4 className="text-center">Other Skills</h4>
                        <div className="d-flex flex-wrap justify-content-center">
                            {otherSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="skill-card text-center mx-3 my-2"
                                    onMouseEnter={() => {
                                        setHoveredSkill(skill.name); // Set skill as hovered
                                        setHoveredSkillIndex(index + programmingLanguages.length); // Adjust index for "other skills" section
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredSkill(null); // Clear hovered skill
                                        setHoveredSkillIndex(null); // Reset hover tracking
                                    }}
                                    style={{
                                        transform:
                                            isRelevantSkill(skill) ||
                                            index + programmingLanguages.length ===
                                            hoveredSkillIndex
                                                ? "scale(1.1)" // Scale up if relevant or hovered
                                                : "scale(1)", // Default scale
                                        opacity:
                                            hoveredProject && !isRelevantSkill(skill) ? 0.4 : 1, // Grey out irrelevant skills when a project is hovered
                                        borderRadius: "12px", // Round skill boxes
                                        backgroundColor: "transparent", // No background color change
                                        boxShadow:
                                            index + programmingLanguages.length ===
                                            hoveredSkillIndex
                                                ? "0 6px 12px rgba(0, 0, 0, 0.2)" // Enhanced shadow for hovered
                                                : "none", // Default shadow
                                        padding: "10px", // Optional: Add padding for better spacing
                                        transition:
                                            "transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease", // Smooth transitions
                                    }}
                                >
                                    <div className="icon mb-2">{skill.icon}</div>
                                    <p>{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;