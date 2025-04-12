import React from "react";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faGraduationCap, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import myPhoto from "../assets/images/my-photo.png";

function About() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        {/* Image first on small screens, second on medium and above */}
        <Col xs={12} md={6} className="text-center order-1 order-md-2 mb-4 mb-md-0">
          <img
            src={myPhoto}
            alt="My Photo"
            className="img-fluid rounded-circle animate__animated animate__fadeIn"
            style={{ maxWidth: "250px", height: "auto" }} // Responsive smaller size
          />
        </Col>

        {/* Text content */}
        <Col xs={12} md={6} className="order-2 order-md-1">
          <h2 className="animate__animated animate__fadeIn">About Me</h2>
          <p className="animate__animated animate__fadeIn">
            Hello! I'm Sathwik, a passionate web developer with experience in React, JavaScript, HTML, CSS, and more. I love building web applications that are both functional and user-friendly. I am continuously learning new technologies to stay ahead in the ever-changing world of web development.
          </p>

          <h3 className="mt-4 animate__animated animate__fadeIn">Education</h3>
          <ListGroup className="animate__animated animate__fadeIn">
            <ListGroup.Item>
              <FontAwesomeIcon icon={faSchool} className="me-2" />
              <strong>Cambridge School</strong> - Srungavarapukota
              <br />
              <small>Passed in 2020 with 10/10 points</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
              <strong>Govt Polytechnic Anakapalli</strong>
              <br />
              <small>Diploma in Computer Engineering (2023) - 87%</small>
            </ListGroup.Item>
            <ListGroup.Item>
              <FontAwesomeIcon icon={faLaptopCode} className="me-2" />
              <strong>JNTU GV University</strong>
              <br />
              <small>Currently pursuing B.Tech in Computer Science and Engineering (Passing out in 2026)</small>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
