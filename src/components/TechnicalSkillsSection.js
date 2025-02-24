import React from "react";

const TechnicalSkills = ({ hoveredProject }) => {
  const skills = [
    { name: "React", img: "https://via.placeholder.com/50?text=React" },
    { name: "Node.js", img: "https://via.placeholder.com/50?text=Node.js" },
    { name: "MongoDB", img: "https://via.placeholder.com/50?text=MongoDB" },
    { name: "HTML", img: "https://via.placeholder.com/50?text=HTML" },
    { name: "CSS", img: "https://via.placeholder.com/50?text=CSS" },
    { name: "JavaScript", img: "https://via.placeholder.com/50?text=JavaScript" },
    { name: "Python", img: "https://via.placeholder.com/50?text=Python" },
    { name: "Flask", img: "https://via.placeholder.com/50?text=Flask" },
    { name: "PostgreSQL", img: "https://via.placeholder.com/50?text=PostgreSQL" },
  ];

  const isRelevantSkill = (skill) =>
    hoveredProject?.technologies?.includes(skill.name);

  return (
    <section id="technical-skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center">Technical Skills</h2>
        <div className="d-flex flex-wrap justify-content-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card text-center mx-3 my-2"
              style={{
                transform: isRelevantSkill(skill) ? "scale(1.2)" : "scale(1)",
                opacity: isRelevantSkill(skill) || !hoveredProject ? 1 : 0.4,
                transition: "transform 0.3s ease, opacity 0.3s ease",
              }}
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="img-fluid rounded-circle mb-2"
                style={{ width: "50px", height: "50px" }}
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;