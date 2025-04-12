import React from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'; // Correct import

function Skills() {
  const skills = [
    { skill: "HTML5", percentage: 90, icon: faCode },
    { skill: "CSS3", percentage: 85, icon: faPaintBrush },
    { skill: "JavaScript", percentage: 80, icon: faJsSquare },
    { skill: "React", percentage: 75, icon: faReact },
    { skill: "C", percentage: 50, icon: faCode },
    { skill: "C++", percentage: 60, icon: faCode },
    { skill: "Python", percentage: 70, icon: faCode },
    { skill: "Java", percentage: 30, icon: faCode },
    { skill: "MongoDB", percentage: 30, icon: faCode },
  ];

  return (
    <Container className="py-5 animate__animated animate__fadeIn">
      <h2 className="text-center mb-5">
        <FontAwesomeIcon icon={faCode} className="me-2" /> My Skills
      </h2>
      <Row>
        {skills.map((item, index) => (
          <Col md={6} key={index} className="mb-4">
            <h5>
              <FontAwesomeIcon icon={item.icon} className="me-2" />
              {item.skill}
            </h5>
            <ProgressBar now={item.percentage} label={`${item.percentage}%`} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Skills;
