import React, { useState, useEffect } from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/project";
import Skills from "./components/skills";
import Certifications from "./components/certifications";
import Contact from "./components/contact";
import LoadingScreen from "./components/LoadingScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);



  // Scroll reveal setup for portfolio sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    const sections = document.querySelectorAll(".scroll-reveal");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="portfolio-scroll-view">
        <Header onNavClick={handleNavClick} />

        {/* Scroll progress indicator */}
        <ScrollProgress />

          <div style={{ paddingTop: "70px" }}>
            <section id="about" className="scroll-reveal">
              <About />
            </section>
            <div className="nebula-divider" />
            <section id="projects" className="scroll-reveal">
              <Projects />
            </section>
            <div className="nebula-divider" />
            <section id="skills" className="scroll-reveal">
              <Skills />
            </section>
            <div className="nebula-divider" />
            <section id="certifications" className="scroll-reveal">
              <Certifications />
            </section>
            <div className="nebula-divider" />
            <section id="contact" className="scroll-reveal">
              <Contact />
            </section>
          </div>
        </div>
      

      {!loadingComplete && (
        <LoadingScreen onComplete={() => setLoadingComplete(true)} />
      )}
    </>
  );
}

// Scroll progress indicator component
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-progress-track">
      <div
        className="scroll-progress-bar"
        style={{ height: `${progress}%` }}
      />
      <div
        className="scroll-progress-dot"
        style={{ top: `${progress}%` }}
      />
    </div>
  );
}

export default App;
