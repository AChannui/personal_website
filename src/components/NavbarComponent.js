import React, {useState, useEffect} from "react";
import {FaEnvelope, FaLinkedin, FaGithub} from "react-icons/fa";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showContactPopup, setShowContactPopup] = useState(false);

    // Function to handle the scroll event
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true); // User scrolled down
        } else {
            setScrolled(false); // User scrolled back to the top
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll); // Add scroll event listener
        return () => {
            window.removeEventListener("scroll", handleScroll); // Clean up listener on unmount
        };
    }, []);

    // Function to toggle popup visibility
    const toggleContactPopup = () => {
        setShowContactPopup((prev) => !prev);
    };

    const handleLinkClick = (e, targetId) => {
        e.preventDefault(); // Prevent default anchor behavior
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offset = 60; // Adjust this offset to match the navbar height
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
            });
        }
    };
    return (
        <nav
            className={`navbar navbar-expand-lg ${
                scrolled ? "scrolled" : "transparent"
            } fixed-top`}
        >
            <div className="container">
                <a
                    className="navbar-brand"
                    href="#home"
                    onClick={(e) => handleLinkClick(e, "#home")}
                >
                    Alex
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#about"
                                onClick={(e) => handleLinkClick(e, "#about")}
                            >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#technical-skills"
                                onClick={(e) => handleLinkClick(e, "#technical-skills")}
                            >
                                Skills
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#projects"
                                onClick={(e) => handleLinkClick(e, "#projects")}
                            >
                                Projects
                            </a>
                        </li>
                        {/*
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="#work-experience"
                                onClick={(e) => handleLinkClick(e, "#work-experience")}
                            >
                                Experience
                            </a>
                        </li>
                        */}
                        <li className="nav-item">
                            <button
                                className="btn nav-link contact-button"
                                onClick={toggleContactPopup}
                            >
                                Contact
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Modal Popup */}
            {showContactPopup && (
                <div className="contact-popup">
                    <div className="popup-content">
                        <button className="close-btn" onClick={toggleContactPopup}>&times;</button>
                        <h4>Contact Me</h4>
                        <ul>
                            <li>
                                <a href="mailto:example@email.com">
                                    <FaEnvelope className="popup-icon"/> Email
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="popup-icon"/> LinkedIn
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="popup-icon"/> GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;