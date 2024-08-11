import "./Hero.css";
// Hero component
// This component renders the hero section of the website
// It contains the hero title, description, and a button to view my work

export default function Hero() {
  return (
    <section id="heroSection" className="hero-section-container">
      <div className="hero-content-box">
        <div className="hero-content">
          <p className="hero-section-title">Hi, I'm Lennie</p>
          <h1 className="hero-section-title">
            <span className="hero-title-color">Full Stack </span> <br />
            Developer
          </h1>
          <p className="hero-description">
            I'm a full stack developer with a passion for creating beautiful and
            functional websites.
            <br /> I'm always looking for new challenges and opportunities to
            grow as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}
