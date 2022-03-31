import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Writing from "./components/Writing";
import Resources from "./components/Resources";

import useView from "./hooks/useView";

import "./App.css";

function App() {
  const { view, transition } = useView("ABOUT");

  return (
    <>
      <Header transition={transition} />
      {view === "ABOUT" && <About />}
      {view === "PROJECTS" && <ProjectList />}
      {view === "WRITING" && <Writing />}
      {view === "RESOURCES" && <Resources />}
    </>
  );
}

export default App;
