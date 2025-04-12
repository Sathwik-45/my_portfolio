import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faTools, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="animate__animated animate__fadeIn">
      <Navbar.Brand className="ps-5" href="#" > My Portfolio </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto pe-5">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              <FontAwesomeIcon icon={faHome} className="me-2 ps-3 " /> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/projects">
              <FontAwesomeIcon icon={faBriefcase} className="me-2 ps-3" /> Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/skills">
              <FontAwesomeIcon icon={faTools} className="me-2 ps-3" /> Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact">
              <FontAwesomeIcon icon={faPhoneAlt} className="me-2 ps-3" /> Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
