import Header from "./components/Header";
import Navigation from "./components/Navigation";
import About from "./components/About";
import ProjectList from "./components/ProjectList";

import useView from "./hooks/useView";

import "./App.css";

function App() {
  const { view, transition } = useView("ABOUT");

  return (
    <>
      <Header />
      <Navigation transition={transition} />
      {view === "ABOUT" && <About />}
      {view === "PROJECTS" && <ProjectList />}
      {view === "WRITING" && <About />}
      {view === "RESOURCES" && <ProjectList />}
      {view === "CONTACT" && <About />}
    </>
  );
}

export default App;
