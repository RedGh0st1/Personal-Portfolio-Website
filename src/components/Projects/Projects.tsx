import "./Projects.css";
import data from "../../data/data.json";
import WebProjectCard from "./WebProjectCard/WebProjectCard";
import CloudProjectCard from "./CloudProjectCard/CloudProjectCard";

// Interfaces for Data Types:
// Project Interface: Defines the structure of each project, including optional fields link and github.
export interface Project {
  title: string;
  description: string;
  src: string;
  link?: string;
  github?: string;
}

// Data Interface: Defines the structure of the data object, containing arrays of cloud_projects and web_projects.
interface Data {
  cloud_projects: Project[];
  web_projects: Project[];
}
const Projects: React.FC = () => {
  const projectData = data as Data;

  console.log("rendered data: ", projectData.cloud_projects);
  console.log("rendered data: ", projectData.web_projects);

  // if data.length === 0 show no results
  const renderWebProjectContent = (): JSX.Element => {
    if (projectData.web_projects.length === 0) {
      return <p>No results found</p>;
    } else {
      return (
        <div className="web--projects--content">
          {/* This div contains the web projects content */}
          {projectData?.web_projects.map((webProject, index) => (
            <WebProjectCard key={index} project={webProject} />
          ))}
        </div>
      );
    }
  };

  const renderCloudProjectsContent = (): JSX.Element => {
    if (projectData.cloud_projects.length === 0) {
      return <p>No results found</p>;
    } else {
      return (
        <div className="cloud--projects--content">
          {/* This div contains the cloud projects content */}
          {projectData?.cloud_projects.map((cloudProject, index) => (
            <CloudProjectCard key={index} project={cloudProject} />
          ))}
        </div>
      );
    }
  };

  return (
    <section id="projectsSection" className="projects--section">
      <div className="projects--section--container">
        <div className="projects--container">
          <p className="section--title">Projects</p>
          <h2 className="projects--section--heading">Web Projects</h2>
          {/* This div contains the web projects content */}
          <div className="web--projects--section">
            {renderWebProjectContent()}
          </div>
          <h2 className="projects--section--heading">Cloud Projects</h2>
          {/* This div contains the cloud projects content */}
          <div className="cloud--projects--section">
            {renderCloudProjectsContent()}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
