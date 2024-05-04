import React from "react";

const Project = ({ project }) => {
  return (
    <div className="project__container">
      <h3>{project.title}</h3>
    </div>
  );
};

export default Project;
