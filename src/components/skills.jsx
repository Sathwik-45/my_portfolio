import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faServer, faCode, faCogs } from "@fortawesome/free-solid-svg-icons";
import "animate.css";
import "./skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: faLaptopCode,
      skills: [
        { name: "HTML5", image: "/skills/html.jpeg", percent: 90 },
        { name: "CSS3", image: "/skills/css.jpeg", percent: 85 },
        { name: "JavaScript", image: "/skills/javascript.jpeg", percent: 85 },
        { name: "React", image: "/skills/react.jpeg", percent: 80 }
      ]
    },
    {
      title: "Backend & Databases",
      icon: faServer,
      skills: [
        { name: "Node.js", fontIcon: faCode, percent: 80 },
        { name: "Express.js", fontIcon: faCode, percent: 80 },
        { name: "Java Spring Boot", fontIcon: faServer, percent: 80 },
        { name: "MongoDB", image: "/skills/mongodb.jpeg", percent: 75 }
      ]
    },
    {
      title: "Programming Languages",
      icon: faCode,
      skills: [
        { name: "Java", image: "/skills/java.jpeg", percent: 90 },
        { name: "Python", image: "/skills/python.jpeg", percent: 75 },
        { name: "C", image: "/skills/c.jpeg", percent: 85 },
        { name: "C++", image: "/skills/c++.jpeg", percent: 60 }
      ]
    },
    {
      title: "Tools & Methods",
      icon: faCogs,
      skills: [
        { name: "Git & GitHub", fontIcon: faCode, percent: 85 },
        { name: "Docker", fontIcon: faServer, percent: 60 },
        { name: "Postman", fontIcon: faLaptopCode, percent: 80 }
      ]
    }
  ];

  // Flat list for the infinite slider
  const tickerSkills = [
    { name: "HTML5", image: "/skills/html.jpeg" },
    { name: "CSS3", image: "/skills/css.jpeg" },
    { name: "JavaScript", image: "/skills/javascript.jpeg" },
    { name: "React", image: "/skills/react.jpeg" },
    { name: "Java", image: "/skills/java.jpeg" },
    { name: "Python", image: "/skills/python.jpeg" },
    { name: "MongoDB", image: "/skills/mongodb.jpeg" },
    { name: "C", image: "/skills/c.jpeg" },
    { name: "C++", image: "/skills/c++.jpeg" }
  ];

  return (
    <Container className="py-5">
      <div className="text-center mb-5 animate__animated animate__fadeIn">
        <span className="hero-subtitle">What I Know</span>
        <h2 className="text-gradient display-5 fw-bold mt-2">Technical Skills</h2>
        <p className="text-muted max-w-2xl mx-auto mt-3">
          A breakdown of my technical proficiencies in web design, server frameworks, and logic formulation.
        </p>
      </div>

      <Row className="g-4 mb-5">
        {skillCategories.map((category, idx) => (
          <Col md={6} key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <div className="glass-card h-100" style={{ padding: "24px" }}>
              <h4 className="skill-category-title">
                <FontAwesomeIcon icon={category.icon} className="text-info me-2" />
                {category.title}
              </h4>
              
              <div className="skills-grid-layout">
                {category.skills.map((skill, sIdx) => (
                  <div className="skill-card-new" key={sIdx}>
                    <div className="skill-icon-wrapper">
                      {skill.image ? (
                        <img src={skill.image} alt={skill.name} className="skill-icon-img" />
                      ) : (
                        <FontAwesomeIcon icon={skill.fontIcon} className="text-info" size="lg" />
                      )}
                    </div>
                    <p className="skill-info-title">{skill.name}</p>
                    
                    {/* Progress Indicator */}
                    <div className="w-100 mt-3">
                      <div className="progress-bg" style={{ height: "4px", background: "rgba(255,255,255,0.06)", borderRadius: "2px", overflow: "hidden" }}>
                        <div 
                          className="progress-fill" 
                          style={{ 
                            width: `${skill.percent}%`, 
                            height: "100%", 
                            background: "linear-gradient(90deg, var(--accent-primary), var(--accent-mern))", 
                            borderRadius: "2px" 
                          }}
                        ></div>
                      </div>
                      <span className="text-muted d-block mt-1" style={{ fontSize: "0.75rem", fontWeight: "600" }}>{skill.percent}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Infinite Horizontal Ticker */}
      <div className="marquee-container mt-5" data-aos="fade-up">
        <div className="marquee-content">
          {[...tickerSkills, ...tickerSkills, ...tickerSkills].map((item, idx) => (
            <div className="ticker-item" key={idx}>
              <img src={item.image} alt={item.name} className="ticker-img" />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Skills;
