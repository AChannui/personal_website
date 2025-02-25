import React from "react";
import {FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="py-5">
            <div className="container text-center">
                <h2 className="mb-4">Contact Info</h2>
                <div className="d-flex justify-content-center align-items-center gap-4">
                    {/* Email */}
                    <a
                        href="mailto:alex@tiny.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center gap-2 text-dark"
                    >
                        <FaEnvelope size={24} title="Email"/>
                        alex@tiny.org
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/alexander-chan-nui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center gap-2 text-dark"
                    >
                        <FaLinkedin size={24} title="LinkedIn"/>
                        LinkedIn.com/in/alexander-chan-nui/
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Achannui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center gap-2 text-dark"
                    >
                        <FaGithub size={24} title="GitHub"/>
                        github.com/Achannui
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;