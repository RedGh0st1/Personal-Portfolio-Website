import "./WebProjectCard.css";

const WebProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <section id="webprojectcard" className="webprojectcard--section">
    <div className="webprojectcard--container">
      <img src={project.src} className="card-img-top" alt={project.name} />
    </div>
    <div className="webprojectcard-section-container">
      <div className="webprojectcard--section--body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <a href={project.link} className="btn btn-primary">
          Visit Project
        </a>
      </div>
    </div>
  </section>
);

export default WebProjectCard;
