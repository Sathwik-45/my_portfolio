import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faGraduationCap, faLaptopCode, faArrowRight, faDownload, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import myPhoto from "../assets/images/my-photo.png";

function About() {
  const roles = [
    "MERN Stack Developer",
    "Java Full Stack Developer",
    "Machine Learning Specialist"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2200);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
      
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(handleTyping, speed);
    };
    
    timer = setTimeout(handleTyping, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container className="py-5">
      <Row className="align-items-center mb-5 pb-4">
        {/* Left Column: Bio and Greetings */}
        <Col lg={7} className="order-2 order-lg-1 text-start" data-aos="fade-right" data-aos-duration="1000">
          <span className="hero-subtitle">Welcome to my space</span>
          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Sathwik Pentakoti</span>
          </h1>
          <h3 className="mb-4 fs-4">
            Creative <span className="typing-text">{currentText}</span>
            <span className="cursor" style={{ animation: "blink 0.75s infinite" }}>|</span>
          </h3>
          
          <p className="lead text-muted mb-4" style={{ fontSize: "1.05rem", lineHeight: "1.7" }}>
            I am a passionate Full Stack Developer specializing in the **MERN Stack** (MongoDB, Express, React, Node.js), robust **Java Spring Boot** backend development, and building hands-on **Machine Learning** projects. 
            I thrive on crafting high-performance, visually immersive web applications that bridge elegant user interfaces with strong database architectures.
          </p>

          <div className="d-flex flex-wrap gap-3">
            <button onClick={handleScrollToContact} className="contact-btn">
              Get In Touch <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
            </button>
            <a href="/resume.pdf" download className="project-btn d-inline-flex align-items-center px-4">
              <FontAwesomeIcon icon={faDownload} className="me-2" /> Download CV
            </a>
          </div>
        </Col>

        {/* Right Column: Photo Frame */}
        <Col lg={5} className="order-1 order-lg-2 text-center mb-5 mb-lg-0" data-aos="fade-left" data-aos-duration="1000">
          <div className="about-photo-wrapper">
            <img
              src={myPhoto}
              alt="Sathwik Pentakoti Profile"
              className="img-fluid rounded-circle about-photo"
              style={{ maxWidth: "320px", height: "auto", border: "5px solid rgba(255,255,255,0.05)" }}
            />
          </div>
        </Col>
      </Row>

      {/* Work Experience Section */}
      <Row className="mt-5 pt-3">
        <Col md={12} data-aos="fade-up" data-aos-duration="1000">
          <div className="glass-card">
            <h2 className="mb-5 text-gradient d-inline-block">Professional Experience</h2>
            <div className="timeline">
              
              <div className="timeline-item">
                <div className="timeline-dot" style={{ borderColor: "var(--accent-java)", boxShadow: "0 0 10px var(--accent-java)" }}></div>
                <div className="timeline-content">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <h5 className="mb-1 text-gradient fw-bold">
                      <FontAwesomeIcon icon={faBriefcase} className="me-2 text-warning" />
                      Wipro Limited
                    </h5>
                    <span className="badge bg-dark border border-secondary px-3 py-2 text-light">Feb 2026 - Apr 2026</span>
                  </div>
                  <h6 className="text-white-50 mt-1">Gen AI Intern (Onsite — 2 Months)</h6>
                  <p className="text-muted mt-2 mb-0">
                    Engineered and optimized an <strong>AI-Powered Ticket Prioritisation System</strong> utilizing local LLMs via <strong>Ollama</strong> and fine-tuned <strong>BERT</strong> transformer models. Built classification pipelines to automatically analyze, prioritize, and route high-volume IT support tickets, reducing routing delays.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Col>
      </Row>

      {/* Education & About detail section */}
      <Row className="mt-5 pt-3">
        <Col md={12} data-aos="fade-up" data-aos-duration="1000">
          <div className="glass-card">
            <h2 className="mb-5 text-gradient d-inline-block">Education Journey</h2>
            <div className="timeline">
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <h5 className="mb-1 text-gradient fw-bold">
                      <FontAwesomeIcon icon={faLaptopCode} className="me-2 text-info" />
                      JNTU GV University
                    </h5>
                    <span className="badge bg-dark border border-secondary px-3 py-2 text-light">2023 - 2026</span>
                  </div>
                  <h6 className="text-white-50 mt-1">Bachelor of Technology (B.Tech) — Computer Science and Engineering</h6>
                  <p className="text-muted mt-2 mb-0">
                    Currently pursuing advanced studies in core computer science subjects. Specialized focus on full stack web development, systems analysis, databases, and machine learning models.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <h5 className="mb-1 text-gradient fw-bold">
                      <FontAwesomeIcon icon={faGraduationCap} className="me-2 text-warning" />
                      Govt Polytechnic Anakapalli
                    </h5>
                    <span className="badge bg-dark border border-secondary px-3 py-2 text-light">2020 - 2023</span>
                  </div>
                  <h6 className="text-white-50 mt-1">Diploma in Computer Engineering</h6>
                  <p className="text-muted mt-2 mb-0">
                    Acquired strong fundamentals in computer programming, software engineering principles, and operating systems. Graduated with a final score of <strong>87%</strong>.
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                    <h5 className="mb-1 text-gradient fw-bold">
                      <FontAwesomeIcon icon={faSchool} className="me-2 text-success" />
                      Cambridge School — Srungavarapukota
                    </h5>
                    <span className="badge bg-dark border border-secondary px-3 py-2 text-light">2020</span>
                  </div>
                  <h6 className="text-white-50 mt-1">Secondary School Certificate (SSC)</h6>
                  <p className="text-muted mt-2 mb-0">
                    Completed schooling with an outstanding academic record, achieving a perfect GPA of <strong>10/10 points</strong>.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
