import React from "react";
import CategoryButton from "./CategoryButton";

const ProjectCategories = ({ categories }) => {
  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton key={category} category={category} />
      ))}
    </div>
  );
};

export default ProjectCategories;
