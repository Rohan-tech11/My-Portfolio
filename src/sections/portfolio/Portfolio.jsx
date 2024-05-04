import ProjectCategories from "./ProjectCategories";
import Projects from "./Projects";
import "./portfolio.css";
import data from "./data";
import { useState } from "react";
const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  return (
    <section id="portfolio">
      <h2> My portfolio</h2>
      <p>
        Check out my cool projects where i worked for one of the amazing client
      </p>
      <div className="container portfolio__container">
        <ProjectCategories>
          {" "}
          <h3>insideee</h3>
        </ProjectCategories>
        <Projects projects={projects}></Projects>
      </div>
    </section>
  );
};

export default Portfolio;
