import React from "react";
import "./Hero.css";
// Hero component
// This component renders the hero section of the website
// It contains the hero title, description, and a button to view my work

const Hero: React.FC = () => {
  console.log("Hero component rendered");
  return (
    <section id="heroSection" className="hero-section-container">
      {/* This div contains the hero content */}
      {/* The hero content includes the title, description, and a button */}
      {/* The hero content is centered using flexbox */}
      <div className="hero-content-box">
        {/* This div contains the hero content */}
        <div className="hero-content">
          <p className="section--title">Hi!! I'm Lennie Nurse</p>
          <h1 className="hero-section-title">
            <span className="hero-title-color">
              Full Stack Developer <br />
            </span>{" "}
            <strong className="word">DevOps</strong> Engineer
          </h1>
          <p className="hero-description">
            I'm a full stack web developer with a passion for creating beautiful
            and functional websites. I'm always looking for new challenges and
            opportunities to grow as a developer.
          </p>
        </div>
        {/* This button will take the user to the specific section of the website */}
        <button className="hero-button">Get In Touch</button>
      </div>
      {/* This div contains the hero picture of the developer */}
      <div className="hero-pic">
        <img src="./public/img/Avatar.png" alt="Developer pic" />
      </div>
    </section>
  );
};

export default Hero;
