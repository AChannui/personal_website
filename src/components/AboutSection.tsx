// src/components/About.js
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <h2 className="text-center">About Me</h2>
        <p className="text-center">
          I am a passionate web developer with expertise in React and Bootstrap.
          I enjoy creating modern, responsive, and user-friendly web applications.
        </p>
        <div className="row mt-4">
          <div className="col-md-6">
            <i className="bi bi-code-slash h1"></i>
            <h4>Frontend Development</h4>
            <p>I specialize in creating responsive and visually appealing UIs.</p>
          </div>
          <div className="col-md-6">
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