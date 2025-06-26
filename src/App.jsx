import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/project";
import Skills from "./components/skills";
import Contact from "./components/contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default App;
