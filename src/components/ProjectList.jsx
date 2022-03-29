import { useState, useEffect } from "react";
import ProjectListItem from "./ProjectListItem";

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
        console.log({ response });
        return response.json();
      })
      .then((jsonData) => {
        console.log({ jsonData });
        setProjects(jsonData.projects);
      });
  };

  useEffect(() => getProjects(), []);

  const componentArr = projects.map((project, index) => (
    <ProjectListItem key={index} {...project} />
  ));

  return <div className="project-list">{componentArr}</div>;
};

export default ProjectList;
