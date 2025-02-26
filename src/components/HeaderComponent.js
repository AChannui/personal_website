// src/components/Header.js
import React from "react";
import "./Header.css"; // Ensure the CSS file is imported for styles

const Header = () => {
    const title = "Hi, I'm Alex";

    return (
        <header className="header-section text-white" id="home">
            <div className="container text-center">
                {/* Split the title into words for proper animation */}
                <h1 className="header-title">
                    {title.split(" ").map((word, index) => (
                        <span key={index}>{word}</span>
                    ))}
                </h1>
                <p className="header-subtitle">A Passionate Frontend Developer</p>
                <a href="#about" className="btn btn-light btn-lg header-btn">
                    Learn More
                </a>
            </div>
        </header>
    );
};

export default Header;