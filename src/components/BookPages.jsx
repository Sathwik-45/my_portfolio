import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBookOpen, 
  faGraduationCap, 
  faBriefcase, 
  faLaptopCode, 
  faArrowRight, 
  faDownload, 
  faCode, 
  faBrain, 
  faDatabase, 
  faTasks, 
  faExternalLinkAlt, 
  faCertificate, 
  faPaperPlane,
  faEnvelope,
  faPhoneAlt,
  faMapMarkerAlt,
  faSchool,
  faSearchPlus,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Modal, Form } from "react-bootstrap";

import myPhoto from "../assets/images/my-photo.png";
import myPhoto2 from "../assets/images/my-photo2.jpg";

// Import project images
import tourbotImg from "../assets/images/tourbot.png";
import movieImg from "../assets/images/mrs.png";
import TaskImg from "../assets/images/Task.png";
import taxbidsImg from "../assets/images/taxbids.png";
import puredropimg from "../assets/images/puredrop.png";
import puredropowner from "../assets/images/puredropowner.png";
import ticketimg from "../assets/images/ticket.png";
import pdmsimg from "../assets/images/pdms.png";
import hrmsImg from "../assets/images/hrms.png";

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

export function PageCover({ onOpenBook }) {
  return (
    <div className="book-cover-3d" onClick={onOpenBook}>
      <div className="book-cover-inner">
        <div className="book-spine-shine"></div>
        <div className="corner-decor top-left"></div>
        <div className="corner-decor top-right"></div>
        <div className="corner-decor bottom-left"></div>
        <div className="corner-decor bottom-right"></div>
        
        <div className="cover-badge-emblem">
          <div className="emblem-circle">
            <FontAwesomeIcon icon={faBookOpen} size="2x" className="gold-icon" />
          </div>
          <span className="edition-tag">SPECIAL PORTFOLIO EDITION</span>
        </div>

        <h1 className="cover-title-main">
          WHO IS <br /><span className="gold-gradient-text">SATHWIK?</span>
        </h1>

        <div className="cover-divider">
          <span>◆</span>
          <div className="gold-line"></div>
          <span>◆</span>
        </div>

        <p className="cover-subtitle">
          THE CHRONICLES & PORTFOLIO OF <br />
          <strong>SATHWIK PENTAKOTI</strong>
        </p>

        <p className="cover-roles">
          MERN STACK • JAVA FULL STACK • MACHINE LEARNING
        </p>

        <button className="book-open-cta-btn" onClick={(e) => { e.stopPropagation(); onOpenBook(); }}>
          <span>UNFOLD THE BOOK</span>
          <FontAwesomeIcon icon={faArrowRight} className="ms-2 pulse-arrow" />
        </button>

        <div className="cover-footer-note">
          <small>Click book cover to flip open</small>
        </div>
      </div>
    </div>
  );
}

export function PageIntro({ onGoToContact }) {
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
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
      const speed = isDeleting ? 40 : 70;
      timer = setTimeout(handleTyping, speed);
    };
    
    timer = setTimeout(handleTyping, 100);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <div className="book-page-content">
      <div className="page-header-ribbon">
        <span className="page-chapter-num">CHAPTER I</span>
        <h3 className="page-chapter-title">The Developer Persona</h3>
      </div>

      <div className="intro-profile-card">
        <div className="profile-img-frame">
          <img src={myPhoto} alt="Sathwik Pentakoti" className="book-profile-img" />
          <div className="online-badge" title="Available for Opportunities"></div>
        </div>
        <div className="intro-head-info">
          <h2 className="bio-name">Sathwik Pentakoti</h2>
          <div className="role-typing-box">
            <span className="typing-text">{currentText}</span>
            <span className="typing-cursor">|</span>
          </div>
          <span className="location-pill">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1 text-info" /> Visakhapatnam, India
          </span>
        </div>
      </div>

      <div className="parchment-box mt-3">
        <p className="bio-text">
          I am a passionate Full Stack Software Engineer specializing in high-performance web applications, robust backend architectures in Java Spring Boot, and predictive Machine Learning pipelines.
        </p>
        <p className="bio-text">
          I bridge front-end user experiences with resilient databases and cloud microservices. Currently pursuing B.Tech in CSE at JNTU GV.
        </p>
      </div>

      <div className="quick-stats-row">
        <div className="stat-pill">
          <span className="stat-num">10+</span>
          <span className="stat-label">Projects Built</span>
        </div>
        <div className="stat-pill">
          <span className="stat-num">11+</span>
          <span className="stat-label">Certifications</span>
        </div>
        <div className="stat-pill">
          <span className="stat-num">100+</span>
          <span className="stat-label">LeetCode Solved</span>
        </div>
      </div>

      <div className="page-cta-row">
        <button onClick={onGoToContact} className="mini-cta-btn primary">
          Contact Sathwik <FontAwesomeIcon icon={faArrowRight} className="ms-1" />
        </button>
        <a href="/resume.pdf" download className="mini-cta-btn outline">
          <FontAwesomeIcon icon={faDownload} className="me-1" /> Download CV
        </a>
      </div>
    </div>
  );
}

export function PageExperience() {
  return (
    <div className="book-page-content">
      <div className="page-header-ribbon">
        <span className="page-chapter-num">CHAPTER II</span>
        <h3 className="page-chapter-title">Professional Experience</h3>
      </div>

      <div className="experience-card-book">
        <div className="exp-badge">INTERNSHIP</div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <h4 className="company-title">
            <FontAwesomeIcon icon={faBriefcase} className="me-2 text-warning" />
            Wipro Limited
          </h4>
          <span className="date-tag">Feb 2026 - Apr 2026</span>
        </div>
        <h6 className="role-subtitle-text">Gen AI Intern (Onsite — 2 Months)</h6>
        <div className="tech-pills-row">
          <span className="t-pill">Ollama</span>
          <span className="t-pill">BERT Transformers</span>
          <span className="t-pill">Python NLP</span>
          <span className="t-pill">Local LLM</span>
        </div>
        <ul className="exp-bullet-list">
          <li>Engineered and deployed an <strong>AI-Powered Ticket Prioritisation System</strong> leveraging local LLMs via <strong>Ollama</strong> and fine-tuned <strong>BERT</strong> transformers.</li>
          <li>Created automated classification pipelines to analyze, prioritize, and route IT support tickets.</li>
          <li>Reduced ticket triage delays by 40% with high precision NLP feature extraction.</li>
        </ul>
      </div>

      <div className="parchment-box mt-3">
        <h5 className="section-mini-head">
          <FontAwesomeIcon icon={faStar} className="me-2 text-info" />
          Engineering Philosophy
        </h5>
        <p className="mb-0 small text-muted" style={{ lineHeight: "1.6" }}>
          "Clean code, clean architecture, and rapid user responsiveness. I build systems where security, efficiency, and elegant UX work in perfect synchronization."
        </p>
      </div>
    </div>
  );
}

export function PageEducation() {
  return (
    <div className="book-page-content">
      <div className="page-header-ribbon">
        <span className="page-chapter-num">CHAPTER III</span>
        <h3 className="page-chapter-title">Education Journey</h3>
      </div>

      <div className="timeline-mini-book">
        <div className="t-item">
          <div className="t-dot"></div>
          <div className="t-card">
            <div className="d-flex justify-content-between align-items-start">
              <h5 className="school-title">
                <FontAwesomeIcon icon={faLaptopCode} className="me-2 text-info" />
                JNTU GV University
              </h5>
              <span className="t-date">2023 - 2026</span>
            </div>
            <p className="degree-name">B.Tech — Computer Science and Engineering</p>
            <p className="t-desc">Specialized in web development, database management systems, algorithms, and AI/ML.</p>
          </div>
        </div>

        <div className="t-item">
          <div className="t-dot"></div>
          <div className="t-card">
            <div className="d-flex justify-content-between align-items-start">
              <h5 className="school-title">
                <FontAwesomeIcon icon={faGraduationCap} className="me-2 text-warning" />
                Govt Polytechnic Anakapalli
              </h5>
              <span className="t-date">2020 - 2023</span>
            </div>
            <p className="degree-name">Diploma in Computer Engineering</p>
            <p className="t-desc">Core fundamentals of programming, logic building, data structures. Score: <strong>87%</strong>.</p>
          </div>
        </div>

        <div className="t-item">
          <div className="t-dot"></div>
          <div className="t-card">
            <div className="d-flex justify-content-between align-items-start">
              <h5 className="school-title">
                <FontAwesomeIcon icon={faSchool} className="me-2 text-success" />
                Cambridge School — S.Kota
              </h5>
              <span className="t-date">2020</span>
            </div>
            <p className="degree-name">Secondary School Certificate (SSC)</p>
            <p className="t-desc">Academic excellence achieving a perfect score of <strong>10 / 10 GPA</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PageProjectsMern() {
  const mernProjects = [
    {
      title: "PUREDROP Water Platform",
      desc: "Water delivery mediator platform connecting treatment plants with consumers.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/sathwik-45/puredrop",
      live: "https://puredrop-delivery.vercel.app/",
      img: puredropimg
    },
    {
      title: "PUREDROP Owner Portal",
      desc: "Specialized dashboard for plant owners to manage plant inventories & orders.",
      tech: ["React", "Express", "MongoDB", "ChartJS"],
      github: "https://github.com/sathwik-45/AquaOwner",
      live: "https://aqua-owner.vercel.app/",
      img: puredropowner
    },
    {
      title: "TaxBids Admin Dashboard",
      desc: "Centralized platform managing taxpayers, agents, document workflows.",
      tech: ["React", "Express", "ApexCharts"],
      github: "https://github.com/sathwik-45/taxbids",
      live: "https://taxbids-admin-frontend.vercel.app/",
      img: taxbidsImg
    },
    {
      title: "HRMS Digital Workspace",
      desc: "Desk app enabling employee CRUD operations, department filters, and task distribution.",
      tech: ["React", "Node.js", "Material UI"],
      github: "https://github.com/sathwik-45/hrms",
      live: "https://hrms-rust.vercel.app/",
      img: hrmsImg
    }
  ];

  return (
    <div className="book-page-content">
      <div className="page-header-ribbon">
        <span className="page-chapter-num">CHAPTER IV</span>
        <h3 className="page-chapter-title">MERN Stack Developments</h3>
      </div>

      <div className="project-grid-book">
        {mernProjects.map((p, idx) => (
          <div key={idx} className="project-mini-card">
            <div className="proj-thumb-container">
              <img src={p.img} alt={p.title} className="proj-thumb-img" />
              <span className="cat-badge-mini">MERN</span>
            </div>
            <div className="proj-mini-body">
              <h5 className="proj-mini-title">{p.title}</h5>
              <p className="proj-mini-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.tech.map((t, i) => (
                  <span key={i} className="mini-tag">{t}</span>
                ))}
              </div>
              <div className="proj-links-mini">
                <a href={p.github} target="_blank" rel="noreferrer" className="link-btn-mini">
                  <FontAwesomeIcon icon={faGithub} /> Repo
                </a>
                {p.live && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="link-btn-mini primary">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PageProjectsJavaMl() {
  const javaMlProjects = [
    {
      title: "AI Ticket Prioritisation",
      desc: "Wipro Internship: IT Ticket system using Ollama LLM and fine-tuned BERT.",
      tech: ["Ollama", "BERT", "Python NLP"],
      github: "https://github.com/sathwik-45/ticket_priority",
      live: "https://smart-ticket-priority.vercel.app",
      img: ticketimg,
      cat: "AI/ML"
    },
    {
      title: "Predictive Decision System (PDMS)",
      desc: "Final Year ML suite: Sales prediction, anomaly detection & demand forecasting.",
      tech: ["Python", "LSTM", "Scikit-Learn"],
      github: "https://github.com/Sathwik-45/pdms",
      live: "",
      img: pdmsimg,
      cat: "ML"
    },
    {
      title: "FinTrack Wallet Backend",
      desc: "Dockerized financial backend for budget caps and secure profiles.",
      tech: ["Spring Boot", "PostgreSQL", "Docker"],
      github: "https://github.com/sathwik-45/fintrack_backend",
      live: "https://fintrack-6413.onrender.com/login.html",
      img: null,
      cat: "Java"
    },
    {
      title: "Tourist Advisory TourBot",
      desc: "Travel advisory bot using decision tree classifier models.",
      tech: ["Python", "Streamlit", "DecisionTrees"],
      github: "https://github.com/sathwik-45/tourbot",
      live: "",
      img: tourbotImg,
      cat: "ML"
    }
  ];

  return (
    <div className="book-page-content">
      <div className="page-header-ribbon">
        <span className="page-chapter-num">CHAPTER V</span>
        <h3 className="page-chapter-title">Java & Machine Learning</h3>
      </div>

      <div className="project-grid-book">
        {javaMlProjects.map((p, idx) => (
          <div key={idx} className="project-mini-card">
            <div className="proj-thumb-container">
              {p.img ? (
                <img src={p.img} alt={p.title} className="proj-thumb-img" />
              ) : (
                <div className="proj-code-placeholder">
                  <FontAwesomeIcon icon={p.cat === 'Java' ? faDatabase : faBrain} size="2x" className="text-warning" />
                  <span className="small text-white-50 mt-1">{p.cat} Codebase</span>
                </div>
              )}
              <span className={`cat-badge-mini ${p.cat === 'Java' ? 'orange' : 'purple'}`}>{p.cat}</span>
            </div>
            <div className="proj-mini-body">
              <h5 className="proj-mini-title">{p.title}</h5>
              <p className="proj-mini-desc">{p.desc}</p>
              <div className="proj-tags">
                {p.tech.map((t, i) => (
                  <span key={i} className="mini-tag">{t}</span>
                ))}
              </div>
              <div className="proj-links-mini">
                <a href={p.github} target="_blank" rel="noreferrer" className="link-btn-mini">
                  <FontAwesomeIcon icon={faGithub} /> Repo
                </a>
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer" className="link-btn-mini primary">
                    <FontAwesomeIcon icon={faExternalLinkAlt} /> Launch
                  </a>
                ) : (
                  <span className="link-btn-mini disabled">No Demo</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PageSkills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: faLaptopCode,
      skills: [
        { name: "HTML5", image: "/skills/html.jpeg", percent: 90 },
        { name: "CSS3", image: "/skills/css.jpeg", percent: 85 },
        { name: "JavaScript", image: "/skills/javascript.jpeg", percent: 85 },
        { name: "React", image: "/skills/react.jpeg", percent: 80 }
      ]
    },
    {
      title: "Backend & Databases",
      icon: faDatabase,
      skills: [
        { name: "Node.js", fontIcon: faCode, percent: 80 },
        { name: "Express.js", fontIcon: faCode, percent: 80 },
        { name: "Java Spring Boot", fontIcon: faDatabase, percent: 80 },
        { name: "MongoDB", image: "/skills/mongodb.jpeg", percent: 75 }
      ]
    },
    {
      title: "Programming Languages",
      icon: faCode,
      skills: [
        { name: "Java", image: "/skills/java.jpeg", percent: 90 },
        { name: "Python", image: "/skills/python.jpeg", percent: 75 },
        { name: "C", image: "/skills/c.jpeg", percent: 85 },
        { name: "C++", image: "/skills/c++.jpeg", percent: 60 }
      ]
    }
  ];

  return (
    <div className="book-page-content">
      <div className="page-header-ribbon">
        <span className="page-chapter-num">CHAPTER VI</span>
        <h3 className="page-chapter-title">Technical Skill Matrix</h3>
      </div>

      <div className="skills-book-container">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-book-block">
            <h5 className="skill-cat-head">
              <FontAwesomeIcon icon={cat.icon} className="me-2 text-info" />
              {cat.title}
            </h5>
            <div className="skill-row-list">
              {cat.skills.map((s, sIdx) => (
                <div key={sIdx} className="skill-item-mini">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="s-name">
                      {s.image ? (
                        <img src={s.image} alt={s.name} className="s-icon-tiny me-1" />
                      ) : null}
                      {s.name}
                    </span>
                    <span className="s-perc">{s.percent}%</span>
                  </div>
                  <div className="s-progress-bg">
                    <div className="s-progress-fill" style={{ width: `${s.percent}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PageCertifications() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const handleCertClick = (cert) => {
    setSelectedCert(cert);
    setShowModal(true);
  };

  return (
    <div className="book-page-content">
      <div className="page-header-ribbon">
        <span className="page-chapter-num">CHAPTER VII</span>
        <h3 className="page-chapter-title">Certifications & Achievements</h3>
      </div>

      <div className="cert-grid-book">
        {certificateImages.map((cert, idx) => (
          <div key={idx} className="cert-card-mini" onClick={() => handleCertClick(cert)}>
            <div className="cert-thumb-box">
              <img src={cert.src} alt={cert.title} className="cert-thumb-img" />
              <div className="cert-zoom-hover">
                <FontAwesomeIcon icon={faSearchPlus} className="text-white" />
              </div>
            </div>
            <div className="cert-body-mini">
              <span className="cert-issuer-badge">{cert.issuer}</span>
              <h6 className="cert-title-mini">{cert.title}</h6>
            </div>
          </div>
        ))}
      </div>

      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered 
        size="lg"
        contentClassName="modal-content-custom"
      >
        <Modal.Header closeButton className="modal-header-custom">
          <Modal.Title className="text-gradient fw-bold fs-5">{selectedCert?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center p-4">
          <img
            src={selectedCert?.src}
            alt={selectedCert?.title}
            style={{ width: "100%", maxHeight: "70vh", objectFit: "contain", borderRadius: "12px" }}
          />
          <div className="mt-3">
            <span className="badge bg-secondary px-3 py-2 text-dark font-weight-bold">
              Issued by {selectedCert?.issuer}
            </span>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export function PageContact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="book-page-content">
      <div className="page-header-ribbon">
        <span className="page-chapter-num">CHAPTER VIII</span>
        <h3 className="page-chapter-title">Get In Touch</h3>
      </div>

      <div className="contact-desk-book">
        <div className="contact-info-panel mb-3">
          <div className="d-flex align-items-center gap-2 mb-2">
            <img src={myPhoto2} alt="Sathwik" className="rounded-circle border border-secondary" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
            <div>
              <h5 className="mb-0 text-white fw-bold">Sathwik Pentakoti</h5>
              <small className="text-muted">Software Engineer & ML Enthusiast</small>
            </div>
          </div>

          <div className="contact-item-row">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-info me-2" />
            <a href="tel:6281792950" className="text-white text-decoration-none fw-bold">+91 6281792950</a>
          </div>
          <div className="contact-item-row">
            <FontAwesomeIcon icon={faEnvelope} className="text-info me-2" />
            <a href="mailto:sathwikpentakoti45@gmail.com" className="text-white text-decoration-none fw-bold">sathwikpentakoti45@gmail.com</a>
          </div>

          <div className="social-links-row mt-2">
            <a href="https://github.com/sathwik-45" target="_blank" rel="noreferrer" className="s-btn-mini github" title="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/sathwik-pentakoti-56868a292" target="_blank" rel="noreferrer" className="s-btn-mini linkedin" title="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://leetcode.com/Sathwik_Pentakoti/" target="_blank" rel="noreferrer" className="s-btn-mini leetcode" title="LeetCode">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
        </div>

        <div className="contact-form-panel">
          {submitted ? (
            <div className="alert alert-success text-center py-3">
              <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
              Thank you! Your message has been sent successfully.
            </div>
          ) : (
            <Form onSubmit={handleSubmit}>
              <div className="row g-2">
                <div className="col-12 col-md-6">
                  <Form.Control
                    type="text"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="book-form-input"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <Form.Control
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="book-form-input"
                  />
                </div>
              </div>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your message..."
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="book-form-input mt-2"
              />
              <button type="submit" className="mini-cta-btn primary w-100 mt-2">
                Dispatch Message <FontAwesomeIcon icon={faPaperPlane} className="ms-1" />
              </button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}

export function PageBackCover({ onCloseBook }) {
  return (
    <div className="book-backcover-3d">
      <div className="backcover-inner">
        <div className="royal-seal">
          <FontAwesomeIcon icon={faBookOpen} size="2x" className="gold-icon" />
        </div>
        <h3 className="gold-gradient-text mt-3">END OF CHRONICLES</h3>
        <p className="text-muted small max-w-sm mx-auto mt-2">
          Thank you for taking the journey through Sathwik Pentakoti's professional portfolio.
        </p>

        <div className="mt-4">
          <a href="/resume.pdf" download className="book-open-cta-btn d-inline-flex mb-3">
            <FontAwesomeIcon icon={faDownload} className="me-2" />
            DOWNLOAD FULL CV / RESUME
          </a>
        </div>

        <button onClick={onCloseBook} className="mini-cta-btn outline mt-2">
          Close Book Cover
        </button>
      </div>
    </div>
  );
}
