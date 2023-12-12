import React from "react";
import './Assets/main.css'
import NavbarMain from "./Components/NavbarMain";
import Experience from "./Components/Experience";
import HeroSection from "./Components/HeroSection";
import Skill from "./Components/Skill";
import Project from "./Components/Project";


const Home = () => {
    return (
        <div className="container-home">
            <div className="main-container">
                <NavbarMain />
                <HeroSection/>
                <Experience/>
                <Skill/>
                <Project/>
            </div>
        </div>

    )
}

export default Home;