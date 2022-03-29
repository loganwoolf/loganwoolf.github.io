const ProjectListItem = (props) => {
  const { title, sub, image, link, repo } = props;
  return (
    <article>
      <img src={image} alt="project preview" />
      <h3>{title}</h3>
      <p>{sub}</p>
      <footer>
        <a href={link}>See it live</a>
        <a href={repo}>See the code</a>
      </footer>
    </article>
  );
};

export default ProjectListItem;
