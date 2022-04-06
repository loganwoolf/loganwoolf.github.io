import { useState, useEffect } from "react";
import FeaturedProject from "./FeaturedProject";
import ProjectListItem from "./ProjectListItem";

import "./ProjectList.css";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  const getProjects = () => {
    fetch("/data/projects.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setProjects(jsonData.projects);
      });
  };

  useEffect(() => getProjects(), []);

  const componentArr = projects.map((project, index) => (
    <ProjectListItem key={index} {...project} />
  ));

  return (
    <section id="projects">
      <h2>Featured Project</h2>
      <FeaturedProject />
      <h2>More Projects</h2>
      <div className="project-list">{componentArr}</div>
    </section>
  );
};

export default ProjectList;
