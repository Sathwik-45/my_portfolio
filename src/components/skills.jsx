import React from "react";
import { Container } from "react-bootstrap";
import "animate.css";
import "./skills.css";

function Skills() {
  const skills = [
    { name: "HTML5", image: "/skills/html.jpeg", color: "#e44d26", percent: 80 },
    { name: "CSS3", image: "/skills/css.jpeg", color: "#264de4", percent: 70 },
    { name: "JavaScript", image: "/skills/javascript.jpeg", color: "#f0db4f", percent: 70 },
    { name: "React", image: "/skills/react.jpeg", color: "#61DBFB", percent: 60 },
    { name: "C", image: "/skills/c.jpeg", color: "#A8B9CC", percent: 80 },
    { name: "C++", image: "/skills/c++.jpeg", color: "#00599C", percent: 40 },
    { name: "Java", image: "/skills/java.jpeg", color: "#b07219", percent: 80 },
    { name: "Python", image: "/skills/python.jpeg", color: "#3776AB", percent: 50 },
    { name: "MongoDB", image: "/skills/mongodb.jpeg", color: "#4DB33D", percent: 60 },
  ];

  return (
    <Container className="py-5 animate__animated animate__fadeIn">
      <h2 className="text-center mb-4 fw-bold text-primary">My Skills</h2>
      <div className="marquee-container">
        <div className="marquee-content">
          {[...skills, ...skills].map((item, idx) => (
            <div className="skill-box" key={idx}>
              <div className="progress-circle" style={{ background: `conic-gradient(${item.color} ${item.percent}%, #ddd ${item.percent}%)` }}>
                <img src={item.image} alt={item.name} className="skill-image" />
              </div>
              <p className="skill-name">{item.name}</p>
              <p className="skill-percent">{item.percent}%</p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Skills;
