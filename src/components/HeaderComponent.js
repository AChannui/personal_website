// src/components/Header.js
import React from "react";
import "./Header.css"; // Ensure the CSS file is imported for styles

const Header = () => {
    const title = "Hi, I'm Alex";

    const handleLearnMoreClick = (e) => {
        e.preventDefault(); // Prevent default anchor behavior
        const aboutSection = document.querySelector("#about");
        const navbarHeight = document.querySelector(".navbar").offsetHeight; // Get the navbar's height

        // Smooth scroll to the About section, considering the navbar height
        window.scrollTo({
            top: aboutSection.offsetTop - navbarHeight,
            behavior: "smooth",
        });
    };

    return (
        <header className="header-section text-white" id="home">
            <div className="container text-center">
                <h1 className="header-title">
                    {title.split(" ").map((word, index) => (
                        <span key={index}>{word}</span>
                    ))}
                </h1>
                <p className="header-subtitle">Embracing every opportunity to learn and grow</p>
                <a
                    href="#about"
                    className="btn btn-light btn-lg header-btn"
                    onClick={handleLearnMoreClick}
                >
                    Learn More
                </a>
            </div>
        </header>
    );
};

export default Header;