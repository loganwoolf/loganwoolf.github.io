import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

const QuickLinks = () => {
  return (
    <div className="quick-links">
      <ul>
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
          <a href="http://github.com/loganwoolf">
            <FontAwesomeIcon icon="fa-brands fa-twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/logan-woolf-33607b100">
            <FontAwesomeIcon icon="fa-brands fa-linkedin" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
