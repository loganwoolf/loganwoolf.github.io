import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialLinks = () => {
  return (
    <ul id="social-links">
      <li>
        <a href="http://github.com/loganwoolf">
          <FontAwesomeIcon icon="fa-brands fa-github" />
        </a>
      </li>
      <li>
        <a href="http://codepen.io/loganwoolf">
          <FontAwesomeIcon icon="fa-brands fa-codepen" />
        </a>
      </li>
      <li>
        <a href="http://twitter.com/logan__woolf">
          <FontAwesomeIcon icon="fa-brands fa-twitter" />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/logan-woolf-33607b100">
          <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
