import React from "react";
import "./Project.css";

const Project = ({ project }) => {
  return (
    <div className="portfolio__project">
      <div className="project__title">
        <h2>{project.title}</h2>
      </div>
      <div
        className="project__info"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <div className="project__buttons">
        <a
          href={project.projectUrl}
          rel="noreferrer"
          target="_blank"
          className="project__button demo"
        >
          Demo
        </a>
        <a
          href={project.projectUrl}
          rel="noreferrer"
          target="_blank"
          className="project__button source"
        >
          Source
        </a>
        </div>
        
      </div>
    </div>
  );
};

export default Project;
