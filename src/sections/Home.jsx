import React from "react";
import portrait from "../assets/armaan_ieee.jpg";

const Home = () => {
  return (
    <section id="home" className="section hero">
      <div className="hero-split container">
        <div className="hero-media">
          <div className="media-card" title="CH Armaan">
            <img src={portrait} alt="CH Armaan portrait" className="photo-3d" />
            <span className="ring r1" />
            <span className="ring r2" />
            <span className="shine" />
          </div>
        </div>

        <div className="hero-content">
          <p className="eyebrow">Namaste, I'm</p>
          <h1 className="title">CH ARMAAN</h1>
          <p className="subtitle">Python Enthusiast • UI/UX Enthusiast • Problem Solver • React Developer</p>
          <div className="cta">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn ghost">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
