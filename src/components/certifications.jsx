import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate, faSearchPlus } from "@fortawesome/free-solid-svg-icons";

const certificateImages = [
  { src: "/certificates/wipro.png", title: "Wipro Gen AI Internship Completion", issuer: "Wipro" },
  { src: "/certificates/tcs.jpg", title: "TCS iON Career Edge", issuer: "TCS iON" },
  { src: "/certificates/javascript.jpg", title: "Infosys Springboard - JavaScript", issuer: "Infosys" },
  { src: "/certificates/software.jpg", title: "Infosys Springboard - Software Engineering", issuer: "Infosys" },
  { src: "/certificates/da.jpg", title: "Deloitte Data Analytics", issuer: "Deloitte" },
  { src: "/certificates/hmi.jpg", title: "Industrial Training", issuer: "HMI" },
  { src: "/certificates/tresurer.jpg", title: "College Fest Treasurer", issuer: "JNTU GV" },
  { src: "/certificates/leetcode.png", title: "100 Days LeetCode Completion", issuer: "LeetCode" },
  { src: "/certificates/nxt24.jpg", title: "React.js Developer Internship", issuer: "Next24techSolutions" },
  { src: "/certificates/Apex.png", title: "Web Development Internship", issuer: "Apex" },
  { src: "/certificates/uptoskills.png", title: "MERN Stack Developer Internship", issuer: "Uptoskills" }
];

function Certifications() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  return (
    <Container className="py-5">
      <div className="text-center mb-5 animate__animated animate__fadeIn">
        <span className="hero-subtitle">My Achievements</span>
        <h2 className="text-gradient display-5 fw-bold mt-2">
          <FontAwesomeIcon icon={faCertificate} className="me-2" style={{ fontSize: "2rem" }} />
          Certifications & Internships
        </h2>
        <p className="text-muted max-w-2xl mx-auto mt-3">
          Verifications of technical training, core engineering capabilities, and developer experience.
        </p>
      </div>

      <Row className="g-4">
        {certificateImages.map((cert, index) => (
          <Col xs={12} sm={6} lg={4} key={index} data-aos="fade-up" data-aos-delay={index * 50}>
            <div className="cert-card" onClick={() => handleImageClick(cert)}>
              <div className="cert-img-wrapper">
                <img
                  src={cert.src}
                  alt={cert.title}
                  className="cert-img"
                />
                <div className="cert-overlay">
                  <span className="text-white fw-bold d-flex flex-column align-items-center">
                    <FontAwesomeIcon icon={faSearchPlus} size="2x" className="mb-2" />
                    Expand Certificate
                  </span>
                </div>
              </div>
              <div style={{ padding: "20px" }}>
                <span className="badge bg-dark border border-secondary text-info mb-2 px-2 py-1 small" style={{ fontSize: "0.7rem" }}>
                  {cert.issuer}
                </span>
                <h5 className="fs-6 fw-bold text-white mb-0" style={{ lineHeight: "1.4" }}>{cert.title}</h5>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal for full image view */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered 
        size="lg"
        contentClassName="modal-content-custom"
      >
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title className="text-gradient fw-bold fs-5">{selectedImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-4">
          <img
            src={selectedImage?.src}
            alt={selectedImage?.title}
            style={{ width: "100%", maxHeight: "70vh", objectFit: "contain", borderRadius: "12px" }}
          />
          <div className="mt-3">
            <span className="badge bg-secondary px-3 py-2 text-dark font-weight-bold">
              Issued by {selectedImage?.issuer}
            </span>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Certifications;
