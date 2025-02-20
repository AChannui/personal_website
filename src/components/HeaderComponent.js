// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-primary text-white text-center" id="home" style={{ padding: "100px 0" }}>
      <div className="container">
        <h1>Hi, I'm John Doe</h1>
        <p className="lead">A passionate Frontend Developer</p>
        <a href="#about" className="btn btn-light btn-lg mt-4">Learn More</a>
      </div>
    </header>
  );
};

export default Header;