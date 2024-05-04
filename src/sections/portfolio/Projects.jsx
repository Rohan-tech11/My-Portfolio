import React from "react";
import Project from "./Project";

const Projects = ({ projects }) => {
  return (
    <div className="container">
      {projects.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
    </div>
  );
};

export default Projects;
