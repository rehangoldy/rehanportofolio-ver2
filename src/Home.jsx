import React from "react";
import './Assets/main.css'
import NavbarMain from "./Components/NavbarMain";
import Experience from "./Components/Experience";
import HeroSection from "./Components/HeroSection";
import Skill from "./Components/Skill";
import Project from "./Components/Project";
import Footer from "./Components/Footer";
import MyService from "./Components/MyService";


const Home = () => {
    return (
        <div className="container-home">
            <div className="main-container">
                <NavbarMain />
                <HeroSection/>
                <MyService/>
                <Experience/>
                <Skill/>
                <Project/>
                <Footer />
            </div>
        </div>

    )
}

export default Home;