import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faCloud } from '@fortawesome/free-solid-svg-icons';

function Projects() {
  const projects = [
    {
      title: "Decision Tree Based Tourist Recommendation System",
      description: "A system that recommends tourist destinations based on user preferences using decision tree algorithms.",
      icon: faLaptopCode,
      githubLink: "https://github.com/sathwik-45/tourbot",
    },
    {
      title: "Movie Recommendation System Using Python",
      description: "A Python-based movie recommendation system that suggests movies based on user input and preferences.",
      icon: faMobileAlt,
      githubLink: "https://github.com/sathwik-45/mrs",
    },
    {
      title: "My Portfolio",
      description: "This portfolio showcases my work, skills, and projects, built using React, Bootstrap, and other modern web technologies.",
      icon: faCloud,
      githubLink: "https://github.com/sathwik-45/my-portfolio", // Replace with the actual GitHub link of this repo if available
    },
  ];

  return (
    <Container className="py-5 animate__animated animate__fadeIn">
      <h2 className="text-center mb-5">
        <FontAwesomeIcon icon={faLaptopCode} className="me-2" /> My Projects
      </h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>
                  <FontAwesomeIcon icon={project.icon} className="me-2" /> {project.title}
                </Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.githubLink} target="_blank">
                  <FontAwesomeIcon icon={faLaptopCode} className="me-2" /> View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
