import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer py-4 bg-dark text-white">
            <div className="container text-center">
                <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
                    {/* Email */}
                    <a
                        href="mailto:alex@tiny.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center gap-2 text-white"
                    >
                        <FaEnvelope size={24} title="Email" />
                        alex@tiny.org
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/alexander-chan-nui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center gap-2 text-white"
                    >
                        <FaLinkedin size={24} title="LinkedIn" />
                        LinkedIn.com/in/alexander-chan-nui/
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/Achannui"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-flex align-items-center gap-2 text-white"
                    >
                        <FaGithub size={24} title="GitHub" />
                        github.com/Achannui
                    </a>
                </div>
                <p className="mb-0">&copy; {new Date().getFullYear()} Alexander Chan-Nui. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;