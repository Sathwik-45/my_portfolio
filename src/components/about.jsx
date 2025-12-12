import React, { useState } from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faGraduationCap, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import myPhoto from "../assets/images/my-photo.png";

function About() {
  const [flipping, setFlipping] = useState(false);

  const handleFlip = () => {
    if (flipping) return;
    setFlipping(true);
    setTimeout(() => setFlipping(false), 1000);
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Image column */}
        <Col xs={12} md={6} className="text-center order-1 order-md-2 mb-4 mb-md-0">
          <div className="about-photo-wrapper">
            <img
              src={myPhoto}
              alt="My Photo"
              onMouseEnter={handleFlip}
              className={`img-fluid rounded-circle about-photo ${flipping ? "flip" : ""}`}
              style={{ maxWidth: "250px", height: "auto" }}
            />
          </div>
        </Col>

        {/* Text column */}
        <Col xs={12} md={6} className="order-2 order-md-1">
          <h2 className="animate__animated animate__fadeIn">About Me</h2>
          <p className="animate__animated animate__fadeIn">
          Hello! I'm Sathwik — a Full Stack Developer skilled in MERN Stack, PostgreSQL, and modern web technologies.
I enjoy building scalable, responsive, and user-friendly applications with clean UI and strong backend logic.

I work with React, Node.js, Express, MongoDB, PostgreSQL, Supabase, and modern tools like Tailwind CSS.
I’m also strong in Java and Python, which helps me write efficient logic and solve problems effectively.

I continuously learn, explore new technologies, and improve both frontend and backend skills to become a better engineer every day.
          </p>

          <h3 className="mt-4 animate__animated animate__fadeIn">Education</h3>
          <ListGroup className="animate__animated animate__fadeIn">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faLaptopCode} className="me-2" />
              <strong>JNTU GV University</strong>
              <br />
              <small>Currently pursuing B.Tech in Computer Science and Engineering (Passing out in 2026)</small>
            </ListGroup.Item>
                   <ListGroup.Item>
              <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
              <strong>Govt Polytechnic Anakapalli</strong>
              <br />
              <small>Diploma in Computer Engineering (2023) - 87%</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faSchool} className="me-2" />
              <strong>Cambridge School</strong> - Srungavarapukota
              <br />
              <small>Passed in 2020 with 10/10 points</small>
            </ListGroup.Item>
  
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
