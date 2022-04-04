import SocialLinks from "./SocialLinks";

import "./Navigation.css";

const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#writing">Writing</a>
        </li>
        <li>
          <a href="#resources">Resources</a>
        </li>
      </ul>
      <SocialLinks />
    </nav>
  );
};

export default Navigation;
