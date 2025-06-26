import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBriefcase, faTools, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = (id) => {
    setExpanded(false); // Collapse navbar on click
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="animate__animated animate__fadeIn"
      expanded={expanded}
      fixed="top"
    >
<Navbar.Brand className="ps-5 brand-name" href="#">
  <span className="first-name">SATHWIK</span>{" "}
  <span className="last-name">PENTAKOTI</span>
</Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarNav" onClick={() => setExpanded(!expanded)} />
      <Navbar.Collapse id="navbarNav">
        <Nav className="ms-auto pe-5">
          <Nav.Item>
            <Nav.Link onClick={() => handleNavClick("about")} className="nav-hover">
              <FontAwesomeIcon icon={faHome} className="me-2" /> About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleNavClick("projects")} className="nav-hover">
              <FontAwesomeIcon icon={faBriefcase} className="me-2" /> Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleNavClick("skills")} className="nav-hover">
              <FontAwesomeIcon icon={faTools} className="me-2" /> Skills
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => handleNavClick("contact")} className="nav-hover">
              <FontAwesomeIcon icon={faPhoneAlt} className="me-2" /> Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
