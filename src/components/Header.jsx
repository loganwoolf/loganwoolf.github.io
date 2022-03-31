import './Header.css';

import Navigation from './Navigation';
import QuickLinks from "./QuickLinks";

const Header = (props) => {
  return (
    <header id="welcome">
      <h1>Logan Woolf</h1>
      <p>Full Stack Web Developer</p>
      <QuickLinks />
      <Navigation transition={props.transition} />
    </header>
  );
};

export default Header;
