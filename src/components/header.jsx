import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faTools, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [expanded, setExpanded] = useState(false); // To track navbar state

  const handleNavClick = () => {
    setExpanded(false); // Collapse navbar on link click
  };

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="animate__animated animate__fadeIn"
      expanded={expanded}
    >
      <Navbar.Brand className="ps-5" href="#">
        My Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto pe-5">
          <Nav.Item>
            <Nav.Link as={Link} to="/" onClick={handleNavClick} className="nav-hover">
              <FontAwesomeIcon icon={faHome} className="me-2" /> Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/projects" onClick={handleNavClick} className="nav-hover">
              <FontAwesomeIcon icon={faBriefcase} className="me-2" /> Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/skills" onClick={handleNavClick} className="nav-hover">
              <FontAwesomeIcon icon={faTools} className="me-2" /> Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact" onClick={handleNavClick} className="nav-hover">
              <FontAwesomeIcon icon={faPhoneAlt} className="me-2" /> Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
