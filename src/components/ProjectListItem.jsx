import "./ProjectListItem.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectListItem = (props) => {
  const { title, sub, image, link, repo } = props;
  return (
    <article className="project-list-item">
      <img src={image} alt="project preview" />
      <h3>{title}</h3>
      <p>{sub}</p>
      <footer>
        <a href={link}><FontAwesomeIcon icon="fa-solid fa-earth-americas" /> Live site</a>
        <a href={repo}><FontAwesomeIcon icon="fa-brands fa-github" /> GitHub</a>
      </footer>
    </article>
  );
};

export default ProjectListItem;
