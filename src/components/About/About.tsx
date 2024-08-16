import Skills from "../Skills/Skills";
import Github from "../About/Github/Github";

const About: React.FC = () => {
  return (
    <section id="about" className="about-section-container">
      <div className="about-section-img">
        <img src="/images/About.png" alt="About Image" />
      </div>
      <div className="about-section-content-box">
        <div className="about-section-content">
          <p className="section-title">About</p>
          <h2 className="skill-section-heading">About Me</h2>
          <p className="hero-description">
            I'm a software developer with a passion for creating innovative and
            user-friendly applications. With a background in computer science
            and a focus on full-stack development, I strive to build scalable
            and maintainable software solutions.
          </p>
          <p className="hero-description">
            I am always looking for new challenges and opportunities to grow as
            a coding professional. Let's work together to bring your ideas to
            life!
          </p>
        </div>
      </div>
      <Skills />
      <Github />
    </section>
  );
};

export default About;
