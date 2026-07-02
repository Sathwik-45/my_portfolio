import React, { useState } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCode, faEnvelope, faPhoneAlt, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import myPhoto from '../assets/images/my-photo2.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2500);
  };

  return (
    <section id="contact" className="py-5">
      <Container>
        <div className="text-center mb-5 animate__animated animate__fadeIn">
          <span className="hero-subtitle">Let's Connect</span>
          <h2 className="text-gradient display-5 fw-bold mt-2">Get In Touch</h2>
          <p className="text-muted max-w-2xl mx-auto mt-3">
            Have a question, an internship opportunity, or want to build a project together? Drop me a message!
          </p>
        </div>

        <Row className="g-4 align-items-stretch">
          {/* Left Column: Contact details */}
          <Col lg={5} data-aos="fade-right" data-aos-duration="1000">
            <div className="glass-card h-100 d-flex flex-column justify-content-between">
              <div>
                <div className="d-flex align-items-center gap-3 mb-4">
                  <img
                    src={myPhoto}
                    alt="Sathwik Profile"
                    className="rounded-circle border border-secondary"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 className="text-white mb-0 fw-bold">Sathwik Pentakoti</h4>
                    <p className="text-muted mb-0 small">MERN & Java Full Stack Dev | ML Enthusiast</p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="social-icon-btn disabled" style={{ cursor: "default" }}>
                      <FontAwesomeIcon icon={faPhoneAlt} className="text-info" />
                    </div>
                    <div>
                      <span className="text-muted small d-block">Phone Number</span>
                      <a href="tel:6281792950" className="text-white text-decoration-none fw-bold">+91 6281792950</a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="social-icon-btn disabled" style={{ cursor: "default" }}>
                      <FontAwesomeIcon icon={faEnvelope} className="text-info" />
                    </div>
                    <div>
                      <span className="text-muted small d-block">Email Address</span>
                      <a href="mailto:sathwikpentakoti45@gmail.com" className="text-white text-decoration-none fw-bold">sathwikpentakoti45@gmail.com</a>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="social-icon-btn disabled" style={{ cursor: "default" }}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="text-info" />
                    </div>
                    <div>
                      <span className="text-muted small d-block">Current Location</span>
                      <span className="text-white fw-bold">Visakhapatnam, Andhra Pradesh, India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-4 pt-3 border-top border-secondary">
                <span className="text-muted small d-block mb-3">Social Portals & Coding Handles</span>
                <div className="d-flex gap-2">
                  <a href="https://github.com/sathwik-45" target="_blank" rel="noopener noreferrer" className="social-icon-btn github" title="GitHub">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                  <a href="https://www.linkedin.com/in/sathwik-pentakoti-56868a292" target="_blank" rel="noopener noreferrer" className="social-icon-btn linkedin" title="LinkedIn">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                  <a href="https://leetcode.com/Sathwik_Pentakoti/" target="_blank" rel="noopener noreferrer" className="social-icon-btn leetcode" title="Leetcode">
                    <FontAwesomeIcon icon={faCode} size="lg" />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Right Column: Contact form */}
          <Col lg={7} data-aos="fade-left" data-aos-duration="1000">
            <div className="glass-card h-100">
              <h3 className="text-white fw-bold mb-4">Send a Message</h3>
              
              {submitted ? (
                <div className="h-75 d-flex flex-column align-items-center justify-content-center text-center">
                  <div className="social-icon-btn mb-3" style={{ width: "60px", height: "60px", background: "var(--accent-mern)", color: "white" }}>
                    <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                  </div>
                  <h4 className="text-info fw-bold">Thank You!</h4>
                  <p className="text-muted">Your message has been dispatched successfully. I will get back to you shortly.</p>
                </div>
              ) : (
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label className="text-muted small">Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "white",
                        borderRadius: "10px",
                        padding: "12px"
                      }}
                      className="form-input-focus"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="text-muted small">Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "white",
                        borderRadius: "10px",
                        padding: "12px"
                      }}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label className="text-muted small">Message / Inquiry</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      placeholder="Write your details here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{
                        background: "rgba(255, 255, 255, 0.02)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
                        color: "white",
                        borderRadius: "10px",
                        padding: "12px"
                      }}
                    />
                  </Form.Group>

                  <button type="submit" className="contact-btn w-100">
                    Send Message <FontAwesomeIcon icon={faPaperPlane} className="ms-2" />
                  </button>
                </Form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
