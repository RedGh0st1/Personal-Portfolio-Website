import data from "../../data/data.json";
import "./Skills.css";

const Skills: React.FC = () => {
  return (
    <section id="myskills" className="skills-section">
      <div className="skills-container">
        <p className="section-title"> Skills</p>
        <h3 className="skill-section-heading">
          {" "}
          Professional <strong className="word-skills">Skills</strong>
        </h3>
      </div>

      <div className="skiil-section-container">
        {/* This div contains the skills content */}
        {data?.skills.map((skill, index) => (
          <div className="skill-section-card" key={index}>
            <div className="skills-section-img">
              <img src={skill.src} alt="Skills list" />
            </div>

            <div className="skill-section-card-content">
              <h3 className="skill-section-title">{skill.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
