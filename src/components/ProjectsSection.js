import React, { useState } from "react";

const Projects = ({ setHoveredProject }) => {
  const projects = [
    {
      title: "Project 1",
      description: "A more detailed description for Project 1.",
      img: "https://via.placeholder.com/300",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "https://github.com/project-1",
    },
    {
      title: "Project 2",
      description: "A more detailed description for Project 2.",
      img: "https://via.placeholder.com/300",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/project-2",
    },
    {
      title: "Project 3",
      description: "A more detailed description for Project 3.",
      img: "https://via.placeholder.com/300",
      technologies: ["Python", "Flask", "PostgreSQL"],
      link: "https://github.com/project-3",
    },
  ];

  const handleMouseEnter = (project) => {
    setHoveredProject(project);
  };

  const handleMouseLeave = () => {
    setHoveredProject(null);
  };

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center">My Projects</h2>
        <div className="row mt-4">
          {projects.map((project, index) => (
            <div
              className="col-md-4 text-center"
              key={index}
              onMouseEnter={() => handleMouseEnter(project)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="project-card p-4 rounded"
                style={{
                  backgroundColor: "#f5f5f5",
                  color: "#333",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="img-fluid mb-3 rounded"
                  style={{
                    maxHeight: "150px",
                    border: "2px solid #fff",
                  }}
                />
                <h4>{project.title}</h4>
                <p>A brief description of this project.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;