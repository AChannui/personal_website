import React, { useEffect, useRef } from "react";
import "./AboutSection.css"; // Add a separate CSS file for styles

const About = () => {
    const sectionRef = useRef(null); // Removed TypeScript type annotation

    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.15, // Trigger when 15% of the element is visible
        });

        // Watch all animation-triggered elements
        const children = sectionRef.current?.querySelectorAll(".animate-on-scroll");
        children?.forEach((child) => observer.observe(child));

        return () => {
            children?.forEach((child) => observer.unobserve(child));
        };
    }, []);

    return (
        <section id="about" className="about-section py-5" ref={sectionRef}>
            <div className="container">
                {/* Heading */}
                <h2 className="text-center animate-on-scroll">About Me</h2>
                <p className="text-center animate-on-scroll">
                    I am a passionate web developer with expertise in React and Bootstrap.
                    I enjoy creating modern, responsive, and user-friendly web applications.
                </p>

                {/* Two Columns */}
                <div className="row mt-4">
                    {/* Frontend Development */}
                    <div className="col-md-6 animate-on-scroll">
                        <i className="bi bi-code-slash h1"></i>
                        <h4>Frontend Development</h4>
                        <p>I specialize in creating responsive and visually appealing UIs.</p>
                    </div>

                    {/* Backend Development */}
                    <div className="col-md-6 animate-on-scroll">
                        <i className="bi bi-laptop h1"></i>
                        <h4>Backend Development</h4>
                        <p>I work with Node.js and databases to build seamless applications.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;