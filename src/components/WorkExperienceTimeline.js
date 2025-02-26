import React from "react";

const WorkExperienceTimeline = () => {
    const workExperiences = [
        {
            position: "Frontend Developer",
            company: "Tech Solutions Inc.",
            duration: "Jan 2022 - Present",
            responsibilities: [
                "Developed dynamic and responsive web applications using React and Redux.",
                "Collaborated with designers and backend developers to create seamless user interfaces.",
                "Optimized application performance, reducing load times by 30%.",
            ],
        },
        {
            position: "Web Developer Intern",
            company: "Creative Agency",
            duration: "Jun 2021 - Dec 2021",
            responsibilities: [
                "Assisted in developing client websites using HTML, CSS, and JavaScript.",
                "Worked on cross-browser compatibility and debugging.",
                "Participated in daily team stand-ups and project updates.",
            ],
        },
        {
            position: "Software Engineering Intern",
            company: "Innovatech",
            duration: "Feb 2021 - May 2021",
            responsibilities: [
                "Collaborated with the development team to build efficient data-driven applications.",
                "Integrated APIs and managed the backend communication using Node.js.",
                "Documented software processes and prepared user manuals.",
            ],
        },
    ];

    return (
        <section id="work-experience" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-5">Work Experience</h2>
                <div className="timeline">
                    {workExperiences.map((experience, index) => (
                        <div
                            key={index}
                            className={`timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`}
                        >
                            <div className="timeline-content">
                                <h3 className="position">{experience.position}</h3>
                                <h4 className="company">{experience.company}</h4>
                                <p className="duration">{experience.duration}</p>
                                <ul>
                                    {experience.responsibilities.map((resp, respIndex) => (
                                        <li key={respIndex}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkExperienceTimeline;