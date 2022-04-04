import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Writing from "./components/Writing";
import Resources from "./components/Resources";

import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);

function App() {
  return (
    <>
      <Navigation />
      <Home />
      <ProjectList />
      <About />
      <Writing />
      <Resources />
    </>
  );
}

export default App;
