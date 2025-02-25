import React from "react";
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
import {SiMysql, SiSqlite, SiGnubash, SiJetbrains, SiVim, SiCplusplus, SiRacket, SiVirtualbox, SiMacos} from "react-icons/si";
import {BsRegex} from "react-icons/bs";
import {TfiLayoutPlaceholder} from "react-icons/tfi";

const TechnicalSkills = ({hoveredProject}) => {
    // Programming Languages Array
    const programmingLanguages = [
        {name: "Python", icon: <FaPython size={50}/>},
        {name: "SQL", icon: <FaDatabase size={50}/>},
        {name: "SQLite", icon: <SiSqlite size={50}/>},
        {name: "MySQL", icon: <SiMysql size={50}/>},
        {name: "C++", icon: <SiCplusplus size={50}/>},
        {name: "Bash", icon: <SiGnubash size={50}/>},
        {name: "Java", icon: <FaJava size={50}/>},
        {name: "Racket", icon: <SiRacket size={50}/>},
        {name: "Assembly (MIPS)", icon: <TfiLayoutPlaceholder size={50}/>},
        {name: "HTML", icon: <FaHtml5 size={50}/>},
    ];

    // Other Skills Array
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
    ];

    // Helper function to check if skill is relevant to the hovered project
    const isRelevantSkill = (skill) =>
        hoveredProject?.technologies?.includes(skill.name);

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
                                    style={{
                                        transform: isRelevantSkill(skill) ? "scale(1.2)" : "scale(1)",
                                        opacity: isRelevantSkill(skill) || !hoveredProject ? 1 : 0.4,
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
                                    style={{
                                        transform: isRelevantSkill(skill) ? "scale(1.2)" : "scale(1)",
                                        opacity: isRelevantSkill(skill) || !hoveredProject ? 1 : 0.4,
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