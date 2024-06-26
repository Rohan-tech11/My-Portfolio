import ProjectCategories from "./ProjectCategories";
import Projects from "./Projects";
import "./portfolio.css";
import data from "./data";
import { useState } from "react";
const Portfolio = () => {
  const [projects, setProjects] = useState(data);
  const categories = data.map((item) => item.category);
  //... spread operator will spread the elements as each element in array
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if (category === "all") {
      setProjects(data);
      return;
    }
    const filterProjects = data.filter(
      (project) => project.category === category
    );
    setProjects(filterProjects);
  };
  return (
    <section id="portfolio">
      <h2> My portfolio</h2>
      <p>
        Check out my cool projects where i worked for one of the amazing client
      </p>
      <div className="container portfolio__container">
        <ProjectCategories
          categories={uniqueCategories}
          onFilterProjects={filterProjectsHandler}
        >
          {" "}
        </ProjectCategories>
        <Projects projects={projects}></Projects>
      </div>
    </section>
  );
};

export default Portfolio;
