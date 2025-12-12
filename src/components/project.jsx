import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faMobileAlt, faCloud, faTasks, faTrademark, faShop, faBasketShopping } from "@fortawesome/free-solid-svg-icons";

// Import project images
import tourbotImg from "../assets/images/tourbot.png";
import movieImg from "../assets/images/mrs.png";
import portfolioImg from "../assets/images/portfolio.png";
import TaskImg from "../assets/images/Task.png";
import dmaImg from "../assets/images/dma.png";
import hrmsImg from "../assets/images/hrms.png";
import taxbidsImg from "../assets/images/taxbids.png";
function Projects() {
  const projects = [
    {
      title: "Decision Trees Based Tourist Recommendation System",
      description: "A system that recommends tourist destinations based on user preferences using decision tree algorithms.",
      icon: faLaptopCode,
      image: tourbotImg,
      githubLink: "https://github.com/sathwik-45/tourbot",
    },
    {
      title: "Movie Recommendation System Using Python",
      description: "A Python-based movie recommendation system that suggests movies based on user input and preferences.",
      icon: faMobileAlt,
      image: movieImg,
      githubLink: "https://github.com/Sathwik-45/movierecomendationapp",
    },
    {
      title: "My Portfolio",
      description: "This portfolio showcases my work, skills, and projects, built using React, Bootstrap, and other modern web technologies.",
      icon: faCloud,
      image: portfolioImg,
      githubLink: "https://github.com/sathwik-45/my_portfolio",
    },
     {
      title: "TASKMANAGER",
      description: "This portfolio showcases my work, skills, and projects, built using React, Bootstrap, and other modern web technologies.",
      icon: faTasks,
      image: TaskImg,
      githubLink: "https://github.com/sathwik-45/taskmanagar",
      projectlink:"https://taskmanager-orpin-kappa.vercel.app/"
    },
     {
      title: "DIGITAL MARKETING AGENCY",
      description: "This portfolio showcases my work, skills, and projects, built using React, Bootstrap, and other modern web technologies.",
      icon: faBasketShopping,
      image: dmaImg,
      githubLink: "https://github.com/sathwik-45/dma",
      projectlink:"https://dma-bay.vercel.app/"
    },
    {
      title: "TaxBids admin dashborad",
      description: "A system that manages the work of taxpayers and taxagents.",
      icon: faLaptopCode,
      image: tourbotImg,
      githubLink: "https://github.com/sathwik-45/tourbot",
      projectlink:"https://taxbis-admin-frontend.vercel.app/"
    },
    {
      title: "human resource management system",
      description: "A system that manages the employe and make tasks easy to hr.",
      icon: faLaptopCode,
      image: hrmsImg,
      githubLink: "https://github.com/sathwik-45/hrms",
      projectlink:"https://hrms-rust.vercel.app/"
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
            <Card className="shadow-lg h-100">
              <Card.Img
                variant="top"
                src={project.image}
                alt={`${project.title} screenshot`}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>
                  <FontAwesomeIcon icon={project.icon} className="me-2" />
                  {project.title}
                </Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button variant="primary" href={project.githubLink} target="_blank">
                  View Project
                </Button><br /><br />
                 <Button variant="primary" href={project.projectlink} target="_blank">
                  See Project
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
