import React, { useState } from "react";

const Projects = () => {
  // State to manage the selected project for the side window
  const [selectedProject, setSelectedProject] = useState(null);

  // Example projects array (uniform design for all)
  const projects = [
    {
      title: "Project 1",
      description: "A more detailed description for Project 1.",
      img: "https://via.placeholder.com/300",
      technologies: "React, Node.js, MongoDB",
      link: "https://github.com/project-1",
    },
    {
      title: "Project 2",
      description: "A more detailed description for Project 2.",
      img: "https://via.placeholder.com/300",
      technologies: "HTML, CSS, JavaScript",
      link: "https://github.com/project-2",
    },
    {
      title: "Project 3",
      description: "A more detailed description for Project 3.",
      img: "https://via.placeholder.com/300",
      technologies: "Python, Flask, PostgreSQL",
      link: "https://github.com/project-3",
    },
  ];

  // Function to open the side window with the selected project
  const handleProjectClick = (project) => {
    if (selectedProject === project) {
      // If the clicked project is already selected, close the side window
      setSelectedProject(null);
    } else {
      // Otherwise, show the clicked project in the side window
      setSelectedProject(project);
    }
  };

  // Function to close the side window
  const closeSideWindow = () => {
    setSelectedProject(null);
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
              onClick={() => handleProjectClick(project)} // Open or close side window
              style={{ cursor: "pointer" }}
            >
              {/* Uniform Project Card */}
              <div
                className="project-card p-4 rounded"
                style={{
                  backgroundColor: "#f5f5f5", // Use a light gray color
                  color: "#333", // Dark text for better visibility
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Add subtle shadow
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

      {/* Side Window (Off-canvas) */}
      <div className={`side-window ${selectedProject ? "show" : ""}`}>
        <div className="side-window-content">
          <button
            className="close-btn"
            onClick={closeSideWindow}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "none",
              border: "none",
              color: "#333",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            &times; {/* This is the "X" symbol */}
          </button>
          {selectedProject && (
            <>
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="img-fluid mb-3 rounded"
              />
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
              <p>
                <strong>Technologies:</strong> {selectedProject.technologies}
              </p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on GitHub
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;