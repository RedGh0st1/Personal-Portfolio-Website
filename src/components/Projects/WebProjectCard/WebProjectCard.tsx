import "./WebProjectCard.css";
import { Project } from "../Projects";
const WebProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <section id="webprojectcard" className="webprojectcard--section--container">
    <div className="webprojectcard--section--image">
      <img src={project.src} className="card--img" alt={project.title} />
    </div>

    <div className="webprojectcard--section--card--content">
      <h5 className="webprojectcard--section--title">{project.title}</h5>
      <p className="webproject--section--text">{project.description}</p>
      <a href={project.link} className="github--btn">
        Github Respository
      </a>
    </div>
  </section>
);

export default WebProjectCard;
