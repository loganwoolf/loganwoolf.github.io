import "./FeaturedProject.css"

const FeaturedProject = (props) => {
  return (
    <main id="featured-project">
      <img src="images/loyaltree/landing.png" alt="Loyaltree Landing Page" />
      <div>
        <h3>Loyaltree</h3>
        <p>
          A full stack web application that makes it easy for users to buy gift
          cards for local businesses and send them to friends and family.
        </p>
      </div>
      <div>
        <p>
          Cards can be redeemed through the QR code scanner in the business
          owner's dashboard. Transaction history is available for both owners
          and card holders.
        </p>
      </div>
      <img src="images/loyaltree/scan.png" alt="Loyaltree Landing Page" />
    </main>
  );
};

export default FeaturedProject;
