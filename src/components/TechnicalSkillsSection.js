import React from "react";

const TechnicalSkills = () => {
  const programmingLanguages = [
    { name: "Python", img: "https://via.placeholder.com/50?text=Python" },
    { name: "SQL", img: "https://via.placeholder.com/50?text=SQL" },
    { name: "SQLite", img: "https://via.placeholder.com/50?text=SQLite" },
    { name: "MySQL", img: "https://via.placeholder.com/50?text=MySQL" },
    { name: "C", img: "https://via.placeholder.com/50?text=C" },
    { name: "Bash", img: "https://via.placeholder.com/50?text=Bash" },
    { name: "Java", img: "https://via.placeholder.com/50?text=Java" },
    { name: "Racket", img: "https://via.placeholder.com/50?text=Racket" },
    { name: "Assembly (MIPS)", img: "https://via.placeholder.com/50?text=ASM" },
    { name: "HTML", img: "https://via.placeholder.com/50?text=HTML" },
  ];

  const otherSkills = [
    {
      name: "Cross-Platform Development (Windows, MacOS, Linux)",
      img: "https://via.placeholder.com/50?text=Cross-Platform",
    },
    { name: "Vim", img: "https://via.placeholder.com/50?text=Vim" },
    { name: "Regex", img: "https://via.placeholder.com/50?text=Regex" },
    { name: "Fundamental TCP/IP", img: "https://via.placeholder.com/50?text=TCP/IP" },
    { name: "OpenSuse", img: "https://via.placeholder.com/50?text=OpenSuse" },
    { name: "Git", img: "https://via.placeholder.com/50?text=Git" },
    { name: "JetBrains IDE", img: "https://via.placeholder.com/50?text=JetBrains" },
  ];

  return (
    <section id="technical-skills" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center">Technical Skills</h2>
        <div className="row mt-4">
          {/* Programming Languages */}
          <div className="col-12 mb-4">
            <h4 className="text-center">Programming Languages</h4>
            <div className="d-flex flex-wrap justify-content-center">
              {programmingLanguages.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card text-center mx-3 my-2"
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

          {/* Other Skills */}
          <div className="col-12">
            <h4 className="text-center">Other Skills</h4>
            <div className="d-flex flex-wrap justify-content-center">
              {otherSkills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card text-center mx-3 my-2"
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
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;