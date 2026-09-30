import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faTools,
  faPhoneAlt,
  faDownload,
  faNoteSticky,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

function Header({ onNavClick }) {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (id) => {
    setExpanded(false);
    if (onNavClick) {
      onNavClick(id);
    } else {
      const section = document.getElementById(id);
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expand="lg"
      variant="dark"
      className="navbar-custom navbar-dark"
      expanded={expanded}
      fixed="top"
    >
      <Navbar.Brand
        className="ps-4 ps-lg-5 brand-name d-flex align-items-center"
        href="#"
        onClick={() => handleNavClick("about")}
      >

        <span className="first-name">SATHWIK</span>{" "}
        <span className="last-name">PENTAKOTI</span>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="navbarNav"
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto pe-4 pe-lg-5 align-items-lg-center">
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick("about")}
              className="nav-hover"
            >
              <FontAwesomeIcon icon={faHome} className="me-2" /> About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick("projects")}
              className="nav-hover"
            >
              <FontAwesomeIcon icon={faBriefcase} className="me-2" /> Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick("skills")}
              className="nav-hover"
            >
              <FontAwesomeIcon icon={faTools} className="me-2" /> Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick("certifications")}
              className="nav-hover"
            >
              <FontAwesomeIcon icon={faNoteSticky} className="me-2" />{" "}
              Certifications
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => handleNavClick("contact")}
              className="nav-hover"
            >
              <FontAwesomeIcon icon={faPhoneAlt} className="me-2" /> Contact
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="ms-lg-2">
            <Nav.Link
              as="a"
              href="/resume.pdf"
              download
              className="resume-btn-nav"
            >
              <FontAwesomeIcon icon={faDownload} className="me-2" /> RESUME
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
