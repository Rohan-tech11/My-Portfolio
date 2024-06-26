import React from "react";
import Card from "../../components/Card";

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="Project-img" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        <a
          href={project.demo}
          className="btn sm"
          target="__blank"
          rel="noopener noreferer"
        >
          Demo
        </a>
        <a
          href={project.github}
          className="btn sm primary"
          target="__blank"
          rel="noopener noreferer"
        >
          Github
        </a>
      </div>
    </Card>
  );
};

export default Project;
