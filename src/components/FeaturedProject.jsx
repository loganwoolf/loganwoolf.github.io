import "./FeaturedProject.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FeaturedProject = (props) => {
  return (
    <>
      <h2>Featured Project</h2>
      <article id="featured-project">
        <img
          className="feature-image"
          src="images/loyaltree/landing.png"
          alt="Loyaltree Landing Page"
        />
        <div className="feature-text">
          <h3>Loyaltree</h3>
          <p>
            A full stack web application that makes it easy for users to buy
            gift cards for local businesses and send them to friends and family.
          </p>
        </div>
        <div className="feature-text">
          <p>
            Cards can be redeemed through the QR code scanner in the business
            owner's dashboard. Transaction history is available for both owners
            and card holders.
          </p>
        </div>
        <img
          className="feature-image"
          src="images/loyaltree/scan.png"
          alt="Loyaltree Landing Page"
        />
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
        <div className="feature-text">
          <p>
            Easily find businesses or gift cards using the filter element.
            Search for store names or category tags. Results are displayed
            instantly.
          </p>
        </div>
        <div className="feature-full-width">
          <p>Built using</p>
          <div>
            <p>Postgres</p>
            <FontAwesomeIcon icon="fa-solid fa-database" />
            <p>Node</p>
            <FontAwesomeIcon icon="fa-brands fa-node-js" />
            <p>Express</p>
            <FontAwesomeIcon icon="fa-brands fa-react" />
            <p>React</p>
          </div>
          <p>
            See it live{" "}
            <a href="https://loyaltree-dev.herokuapp.com">
              <FontAwesomeIcon icon="fa-solid fa-earth-americas" /> Heroku
            </a>
          </p>
          <p>
            See the code{" "}
            <a href="https://github.com/loganwoolf/loyaltree">
              <FontAwesomeIcon icon="fa-brands fa-github" /> Github
            </a>
          </p>
        </div>
      </article>
    </>
  );
};

export default FeaturedProject;
