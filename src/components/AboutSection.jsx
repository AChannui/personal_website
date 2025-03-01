import React, {useEffect, useRef} from "react";
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
                    I am a highly motivated and detail-oriented computer science professional with a strong background
                    in solving technical problems and delivering impactful solutions. With hands-on experience from
                    industry projects and a Bachelor of Science in Computer Science from the University of Texas at
                    Dallas, I am passionate about leveraging my expertise in programming and system design to create
                    efficient and reliable solutions. My ability to lead, collaborate, and develop creative solutions is
                    what drives me to excel in every project I take on.
                </p>

                {/* Two Columns */}
                <div className="row mt-4">
                    <div className="col-md-6 animate-on-scroll">
                        <i className="bi bi-code-slash h1"></i>
                        <h4>Always Growing, Always Learning</h4>
                        <p>I am driven by an insatiable curiosity and a desire to constantly improve my skills. Whether
                            exploring new technologies, diving into complex systems, or solving unique challenges, I am
                            always eager to push my boundaries and discover innovative solutions. I believe that
                            learning is a continuous journey, and I’m excited by opportunities that broaden my
                            perspective and deepen my technical expertise.
                        </p>
                    </div>

                    <div className="col-md-6 animate-on-scroll">
                        <i className="bi bi-laptop h1"></i>
                        <h4>Embracing Complex Challenges</h4>
                        <p> I am energized by the pursuit of challenging problems and thrive in environments that push
                            me to think critically and creatively. Whether it's automating complex workflows, designing
                            scalable systems, or diving deep into embedded technologies, I actively seek opportunities
                            that test my skills and expand my horizons. To me, every challenge is a chance to grow,
                            innovate, and deliver tailored solutions that make a lasting impact. I firmly believe that
                            pushing the boundaries of what’s possible is the key to both personal and professional
                            development.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;