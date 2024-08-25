import "./About.css";
import Github from "./Github/Github";

const About: React.FC = () => {
  return (
    <section id="about" className="about--section--container">
      <div className="about--section--img">
        <img src="/images/About.png" alt="About Image" />
      </div>
      <div className="about-section-content-box">
        <div className="about-section-content">
          <h2 className="section--title">About</h2>
          <h4 className="about--section--heading">About Me</h4>
          <p className="hero-description">
            Hi there! I’m Lennie Nurse, and my journey into becoming a Software
            Engineer has been nothing short of an exciting adventure. It all
            started back in college, where I first dipped my toes into the world
            of programming with C++ and MathLab. I quickly realized that coding
            wasn’t just a subject for me—it was a passion that brought a smile
            to my face every time I solved a problem or built something new.
          </p>
          <br />
          <p className="hero-description">
            As I continued to explore this fascinating world, I took online
            classes on platforms like Khan Academy and Codecademy, and that
            initial spark of interest turned into a full-blown fire. The moment
            that really sealed the deal for me was when I decided to create my
            own animated fishbowl. It wasn’t just a project; it was a burst of
            joy and creativity that showed me the magic of bringing ideas to
            life through code. That’s when I knew—I was meant to be a Software
            Engineer.
          </p>
          <br />
          <p className="hero-description">
            This path led me to join the Pursuit fellowship in 2022, where I
            dove deep into full-stack web development. The program not only
            sharpened my technical skills but also connected me with a community
            of like-minded individuals who are just as passionate about making a
            difference through technology.
          </p>
          <br />
          <p className="hero-description">
            Fast forward to today, and I’m proud to say I’ve worked on some
            truly impactful projects, from building a 3-Tier Architecture on AWS
            as part of the Silver Lining SysOps Fellowship to developing a
            platform that empowers US immigrants by connecting them with job and
            housing opportunities. Each project has taught me something new,
            fueling my drive to innovate and create.
          </p>
          <br />
          <p className="hero-description">
            But it’s not just about the code for me—it’s about the people, the
            community, and the change we can create together. That’s why I
            volunteer with Pursuit, helping others on their journey into tech. I
            believe in the power of technology to transform lives, and I’m
            committed to being part of that positive change.
          </p>
          <br />
          <p className="hero-description">
            Whether I’m troubleshooting cloud infrastructure, collaborating with
            a team, or helping others learn, I approach every challenge with
            enthusiasm and a desire to learn and grow. I’m excited about where
            this journey will take me next, and I can’t wait to see what we’ll
            create together.
          </p>
          <br />
          <p className="hero-description">
            Let’s connect, collaborate, and build something amazing!
          </p>
        </div>
      </div>
      <Github />
    </section>
  );
};

export default About;
