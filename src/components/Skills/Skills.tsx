import data from "../../data/data.json";
import "./Skills.css";

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills--section">
      <h2 className="section--title"> Skills</h2>
      <div className="skills--section--container">
        {/* This div contains the skills content */}
        {data?.skills.map((skill, index) => (
          <div className="skills--section--card" key={index}>
            <div className="skills--section--img">
              <img src={skill.src} alt="Skills list" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{skill.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
