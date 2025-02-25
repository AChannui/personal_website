import React, {useState} from "react";

const Projects = ({setHoveredProject, hoveredSkill}) => {
    const [activeProject, setActiveProject] = useState(null); // Track the project in the side window
    const [isSideWindowVisible, setIsSideWindowVisible] = useState(false); // Control side window visibility
    const [hoveredProjectIndex, setHoveredProjectIndex] = useState(null); // Track the index of the hovered project

    const projects = [
        {
            title: "Project 1",
            description: "A more detailed description for Project 1.",
            img: "https://via.placeholder.com/300",
            technologies: ["Python", "SQL", "C++", "Windows Development"],
            link: "https://github.com/project-1",
        },
        {
            title: "Project 2",
            description: "A more detailed description for Project 2.",
            img: "https://via.placeholder.com/300",
            technologies: ["Java", "HTML", "MySQL"],
            link: "https://github.com/project-2",
        },
        {
            title: "Project 3",
            description: "A more detailed description for Project 3.",
            img: "https://via.placeholder.com/300",
            technologies: ["Python", "C++"],
            link: "https://github.com/project-3",
        },
    ];

    const isRelevantProject = (project) =>
        hoveredSkill && project.technologies.includes(hoveredSkill); // Check if project is relevant to hovered skill

    // Handle opening the side window
    const handleProjectClick = (project) => {
        setActiveProject(project); // Set the clicked project as active
        setIsSideWindowVisible(true); // Show the side window
    };

    // Handle closing the side window
    const handleCloseClick = () => {
        setIsSideWindowVisible(false); // Hide the side window
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
                            onMouseEnter={() => {
                                setHoveredProject(project);
                                setHoveredProjectIndex(index); // Set the index of the hovered project
                            }}
                            onMouseLeave={() => {
                                setHoveredProject(null);
                                setHoveredProjectIndex(null); // Reset the hovered project index
                            }}
                            style={{
                                opacity:
                                    hoveredSkill && !isRelevantProject(project) ? 0.4 : 1, // Grey out non-relevant projects when a skill is hovered
                                transform:
                                    isRelevantProject(project) || index === hoveredProjectIndex
                                        ? "scale(1.05)" // Scale if relevant or hovered
                                        : "scale(1)", // Default scale
                                transition: "opacity 0.3s ease, transform 0.3s ease", // Smooth transition for opacity and scale
                            }}
                        >
                            <div
                                className="project-card p-4 rounded"
                                style={{
                                    backgroundColor:
                                        hoveredSkill && isRelevantProject(project)
                                            ? "#e0f7fa"
                                            : index === hoveredProjectIndex
                                                ? "#f0f8ff" // Highlight color for hovered projects
                                                : "#f5f5f5", // Default color
                                    color: "#333",
                                    boxShadow:
                                        index === hoveredProjectIndex
                                            ? "0 6px 12px rgba(0, 0, 0, 0.2)" // Enhanced shadow for hovered
                                            : "0 4px 6px rgba(0, 0, 0, 0.1)", // Default shadow
                                    cursor: "pointer", // Clickable projects
                                }}
                                onClick={() => handleProjectClick(project)} // Open side window on click
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Side Window for Project Details */}
            <div
                className={`side-window ${isSideWindowVisible ? "show" : "hide"}`} // Add class based on visibility
            >
                <button
                    className="close-btn"
                    onClick={handleCloseClick}
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        fontSize: "24px",
                        fontWeight: "bold",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                    }}
                    aria-label="Close"
                >
                    &times; {/* Renders the "X" symbol */}
                </button>
                {activeProject && (
                    <div className="side-window-content my-3">
                        {/* Project Image */}
                        <img
                            src={activeProject.img}
                            alt={activeProject.title}
                            className="img-fluid mb-3 rounded"
                        />
                        <h2>{activeProject.title}</h2>
                        <p>{activeProject.description}</p>
                        <a
                            href={activeProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            View Project
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;