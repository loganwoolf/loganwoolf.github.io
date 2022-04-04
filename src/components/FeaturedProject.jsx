import "./FeaturedProject.css";

const FeaturedProject = (props) => {
  return (
    <article id="featured-project">
      <img
        className="feature-image"
        src="images/loyaltree/landing.png"
        alt="Loyaltree Landing Page"
      />
      <div className="feature-text">
        <h3>Loyaltree</h3>
        <p>
          A full stack web application that makes it easy for users to buy gift
          cards for local businesses and send them to friends and family.
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
          Easily find businesses or gift cards using the filter element. Search
          for store names or category tags. Results are displayed instantly.
        </p>
      </div>
    </article>
  );
};

export default FeaturedProject;
