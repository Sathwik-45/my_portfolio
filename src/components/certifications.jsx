import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";

const certificateImages = [
  { src: "/certificates/tcs.jpg", title: "TCS iON Career Edge" },
  { src: "/certificates/javascript.jpg", title: "Infosys Springboard - JavaScript" },
  { src: "/certificates/software.jpg", title: "Infosys Springboard - Software Engineering" },
  { src: "/certificates/da.jpg", title: "Deloitte Data Analytics" },
  { src: "/certificates/hmi.jpg", title: "Industrial Training" },
  { src: "/certificates/tresurer.jpg", title: "College Fest Treasurer" },
  { src: "/certificates/leetcode.png", title: "100 Days Completion" },
    { src: "/certificates/nxt24.jpg", title: "Intern as Reactjs Devloper in Next24techSolutions" },
  { src: "/certificates/Apex.png", title: "Intern as Web devlopment in Apex" },
   { src: "/certificates/uptoskills.png", title: "Intern as Mern stack devloper in uptoskills" }
];

function Certifications() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (img) => {
    setSelectedImage(img);
    setShowModal(true);
  };

  return (
    <Container className="py-5 animate__animated animate__fadeIn">
      <h2 className="text-center mb-5 fw-bold text-primary">My Certifications</h2>
      <Row>
        {certificateImages.map((cert, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card className="shadow-sm border-0 h-100">
              <Card.Img
                variant="top"
                src={cert.src}
                alt={cert.title}
                onClick={() => handleImageClick(cert)}
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderRadius: "0.5rem 0.5rem 0 0",
                  cursor: "pointer",
                }}
              />
              <Card.Body className="text-center">
                <Card.Title className="fs-6">{cert.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for full image view */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>{selectedImage?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <img
            src={selectedImage?.src}
            alt={selectedImage?.title}
            style={{ width: "100%", maxHeight: "80vh", objectFit: "contain" }}
          />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Certifications;
