import React, {useState} from "react";

const Projects = ({setHoveredProject, hoveredSkill}) => {
    const [activeProject, setActiveProject] = useState(null); // Track the project in the side window
    const [isSideWindowVisible, setIsSideWindowVisible] = useState(false); // Control side window visibility

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
        hoveredSkill && project.technologies.includes(hoveredSkill); // Check if project uses the hovered skill

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
                            onMouseEnter={() => setHoveredProject(project)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div
                                className="project-card p-4 rounded"
                                style={{
                                    backgroundColor: isRelevantProject(project) ? "#e0f7fa" : "#f5f5f5", // Highlight if relevant
                                    color: "#333",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    transform: isRelevantProject(project) ? "scale(1.05)" : "scale(1)", // Slightly enlarge on hover relevance
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
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
                            style={{border: "2px solid #ddd"}}
                        />
                        {/* Project Title */}
                        <h3>{activeProject.title}</h3>
                        {/* Project Description */}
                        <p>{activeProject.description}</p>
                        {/* Project Technologies */}
                        <ul>
                            {activeProject.technologies.map((tech, idx) => (
                                <li key={idx}>{tech}</li>
                            ))}
                        </ul>
                        {/* Project Link */}
                        <a
                            href={activeProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary mt-3"
                        >
                            View on GitHub
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;