import "./FeaturedProject.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturedProject = (props) => {
  return (
    <article id="featured-project">
      <h3>Loyaltree</h3>
      <div className="feature-group">
        <img
          className="feature-image"
          src="images/loyaltree/landing.png"
          alt="Loyaltree Landing Page"
        />
        <p>
          A full stack web application that makes it easy for users to buy gift
          cards for local businesses and send them to friends and family.
        </p>
      </div>
      <div className="feature-group">
        <img
          className="feature-image"
          src="images/loyaltree/scan.png"
          alt="Loyaltree Landing Page"
        />
        <p>
          Cards can be redeemed through the QR code scanner in the business
          owner's dashboard. Transaction history is available for both owners
          and card holders.
        </p>
      </div>
      <div className="feature-group">
        <div className="feature-collage">
          <img
            className="feature-image-sm"
            src="images/loyaltree/filter-clothing.png"
            alt=""
          />
          <img
            className="feature-image-sm"
            src="images/loyaltree/filter-restaurant.png"
            alt=""
          />
          <img
            className="feature-image-sm"
            src="images/loyaltree/filter-shop.png"
            alt=""
          />
        </div>
        <p>
          Easily find businesses or gift cards using the filter element. Search
          for store names or category tags. Results are displayed instantly.
        </p>
      </div>
      <div className="feature-full-width">
        <h4>Stack</h4>
        <div>
          <p>Postgres</p>
          <FontAwesomeIcon icon="fa-solid fa-database" />
          <p>Node</p>
          <FontAwesomeIcon icon="fa-brands fa-node-js" />
          <p>Express</p>
          <FontAwesomeIcon icon="fa-brands fa-react" />
          <p>React</p>
        </div>
        <div className="feature-links">
          <a href="https://loyaltree-dev.herokuapp.com">
            <FontAwesomeIcon icon="fa-solid fa-earth-americas" /> Live Site
          </a>
          <a href="https://github.com/loganwoolf/loyaltree">
            <FontAwesomeIcon icon="fa-brands fa-github" /> Github
          </a>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
