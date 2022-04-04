import Home from "./components/Home";
import Navigation from "./components/Navigation";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Writing from "./components/Writing";
import Resources from "./components/Resources";

import "./App.css";

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
