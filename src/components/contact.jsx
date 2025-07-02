import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faMailBulk, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; // ✅ correct import
import myPhoto from '../assets/images/my-photo2.jpg'; // Import your photo

const Contact = () => {
  return (
    <section className="contact-section py-5">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={4} className="text-center mb-4">
            <img
              src={myPhoto} // Use your photo
              alt="My Photo"
              className="rounded mx-auto d-block mb-4"
              style={{ maxWidth: '250px', }}
            />
            <h4>Sathwik</h4>
            <p>Web Developer | Passionate about coding</p>
            <div>
              <a href="https://www.linkedin.com/in/sathwik-pentakoti-56868a292" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://leetcode.com/Sathwik_Pentakoti/" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FontAwesomeIcon icon={faCode} size="2x" />
              </a>
              <a href="https://github.com/sathwik-45" target="_blank" rel="noopener noreferrer" className="mx-2">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="tel:6281792950" className="mx-2">
                <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
