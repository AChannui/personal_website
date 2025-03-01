import React from "react";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavbarComponent"; // Ensure Navbar is imported correctly
import Header from "./components/HeaderComponent";
import About from "./components/AboutSection";
import PortfolioIntegration from "./components/PortfolioIntegration"; // Use the combined component
import Contact from "./components/ContactInfo";
import WorkExperienceTimeline from "./components/WorkExperienceTimeline";

const App = () => {
    return (
        <div>
            <Navbar/> {/* Render Navbar at the top */}
            <Header/>
            <About/>
            <PortfolioIntegration/> {/* Integrates Projects and TechnicalSkills */}
            {/* <WorkExperienceTimeline/> */}
            <Contact/>
        </div>
    );
};

export default App;