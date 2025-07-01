import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faPaintBrush,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { faJsSquare, faReact } from "@fortawesome/free-brands-svg-icons";

function Skills() {
  const skills = [
    { skill: "HTML5", percentage: 90, icon: faCode, color: "success", textColor: "#e34c26" },
    { skill: "CSS3", percentage: 85, icon: faPaintBrush, color: "success", textColor: "#264de4" },
    { skill: "JavaScript", percentage: 80, icon: faJsSquare, color: "success", textColor: "#f0db4f" },
    { skill: "React", percentage: 75, icon: faReact, color: "info", textColor: "#61DBFB" },
    { skill: "C", percentage: 80, icon: faCode, color: "warning", textColor: "#A8B9CC" },
    { skill: "C++", percentage: 60, icon: faCode, color: "warning", textColor: "#00599C" },
    { skill: "Java", percentage: 60, icon: faCode, color: "danger", textColor: "#b07219" },
    { skill: "Python", percentage: 40, icon: faCode, color: "info", textColor: "#3776AB" },
    { skill: "MongoDB", percentage: 50, icon: faCode, color: "danger", textColor: "#4DB33D" },
  ];

  return (
    <Container className="py-5 animate__animated animate__fadeIn">
      <h2 className="text-center mb-5 fw-bold text-primary">
        <FontAwesomeIcon icon={faStar} className="me-2" /> My Skills
      </h2>
      <Row>
        {skills.map((item, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <div className="skill-card shadow-lg rounded-4 p-3 bg-white border border-1 border-light h-100 transition-smooth">
              <div className="d-flex align-items-center mb-3">
                <div
                  className="icon-wrapper me-3"
                  style={{
                    backgroundColor: "#f5f0f0",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  <FontAwesomeIcon icon={item.icon} style={{ color: item.textColor }} />
                </div>
                {/* Make skill name text color black */}
                <h5 className="mb-0 fw-semibold text-dark">{item.skill}</h5>
              </div>
              <ProgressBar
                now={item.percentage}
                label={`${item.percentage}%`}
                animated
                variant={item.color}
                style={{ height: "20px", fontWeight: "500" }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
