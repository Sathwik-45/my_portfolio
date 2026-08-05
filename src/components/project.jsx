import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { 
  faBrain, 
  faLaptopCode, 
  faDatabase, 
  faTasks, 
  faExternalLinkAlt, 
  faCode, 
  faGraduationCap,
  faServer
} from "@fortawesome/free-solid-svg-icons";

// Import project images
import tourbotImg from "../assets/images/tourbot.png";
import movieImg from "../assets/images/mrs.png";
import TaskImg from "../assets/images/Task.png";
import dmaImg from "../assets/images/dma.png";
import hrmsImg from "../assets/images/hrms.png";
import taxbidsImg from "../assets/images/taxbids.png";
import puredropimg from "../assets/images/puredrop.png";
import puredropowner from "../assets/images/puredropowner.png";
import ticketimg from "../assets/images/ticket.png";
import pdmsimg from "../assets/images/pdms.png";
function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "PUREDROP Water Platform",
      description: "A water delivery mediator platform connecting treatment plants and consumers with route and delivery management.",
      category: "mern",
      icon: faLaptopCode,
      image: puredropimg,
      tech: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
      githubLink: "https://github.com/sathwik-45/puredrop",
      projectlink: "https://puredrop-delivery.vercel.app/"
    },
    {
      title: "PUREDROP Owner Portal",
      description: "A specialized dashboard for water plant owners to manage plant inventories, orders, and transactions.",
      category: "mern",
      icon: faDatabase,
      image: puredropowner,
      tech: ["React", "Node.js", "Express", "MongoDB", "ChartJS"],
      githubLink: "https://github.com/sathwik-45/AquaOwner",
      projectlink: "https://aqua-owner.vercel.app/"
    },
    {
      title: "TaxBids Admin Dashboard",
      description: "A centralized platform for managing taxpayers and taxagents, handling document statuses, and workflows.",
      category: "mern",
      icon: faTasks,
      image: taxbidsImg,
      tech: ["React", "Node.js", "Express", "MongoDB", "ApexCharts"],
      githubLink: "https://github.com/sathwik-45/taxbids",
      projectlink: "https://taxbids-admin-frontend.vercel.app/"
    },
    {
      title: "SmartHire HR Tool",
      description: "A full-stack recruitment portal featuring automated candidate screening, interviewer logs, and job status boards.",
      category: "java",
      icon: faServer,
      image: null,
      tech: ["Spring Boot", "React", "PostgreSQL", "REST API", "Tailwind CSS"],
      githubLink: "https://github.com/sathwik-45/Smarthire",
      projectlink: ""
    },
    {
      title: "FinTrack Wallet Backend",
      description: "A dockerized financial backend supporting transaction histories, budget caps, and secure user profiles.",
      category: "java",
      icon: faDatabase,
      image: null,
      tech: ["Spring Boot", "Java", "JPA/Hibernate", "PostgreSQL", "Docker"],
      githubLink: "https://github.com/sathwik-45/fintrack_backend",
      projectlink: "https://fintrack-6413.onrender.com/login.html"
    },
    {
      title: "DevConnect Platform",
      description: "A collaborative social platform microservice enabling developers to network, share projects, and collaborate.",
      category: "java",
      icon: faCode,
      image: null,
      tech: ["Spring Boot", "MySQL", "Maven", "Spring Security"],
      githubLink: "https://github.com/sathwik-45/Devconnect",
      projectlink: ""
    },
    {
      title: "Tourist Advisory TourBot",
      description: "An intelligent travel advisory bot implementing decision tree classifier models to recommend spots based on user profiles.",
      category: "ml",
      icon: faBrain,
      image: tourbotImg,
      tech: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "DecisionTrees"],
      githubLink: "https://github.com/sathwik-45/tourbot",
      projectlink: ""
    },
    {
      title: "Movie Recommendation System",
      description: "A vectorization-based Python app recommending films using cosine similarity scoring from TMDB datasets.",
      category: "ml",
      icon: faBrain,
      image: movieImg,
      tech: ["Python", "Machine Learning", "TfidfVectorizer", "Streamlit"],
      githubLink: "https://github.com/Sathwik-45/movierecomendationapp",
      projectlink: ""
    },
    {
      title: "Calories Predictor",
      description: "An ML model predicting calorie burn using physiological parameters, activity duration, and regression algorithms.",
      category: "ml",
      icon: faBrain,
      image: null,
      tech: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "Numpy"],
      githubLink: "https://github.com/sathwik-45",
      projectlink: ""
    },
    {
      title: "Predictive Decision Making System",
      description: "Final Year Project: An enterprise ML suite providing sales prediction, anomaly detection, inventory demand forecasting, and customer churn prediction using regression, forecasting, and classification models.",
      category: "ml",
      icon: faBrain,
      image: pdmsimg,
      tech: ["Python", "Scikit-Learn", "LSTM/RNN", "Pandas", "Flask"],
      githubLink: "https://github.com/sathwik-45/predictive_decision_making_system",
      projectlink: ""
    },
    {
      title: "AI-Powered Ticket Prioritisation",
      description: "Wipro Internship Project: An automated IT ticket system utilizing local LLMs via Ollama and fine-tuned BERT transformers to analyze, classify, and prioritize incoming support tickets.",
      category: "ml",
      icon: faBrain,
      image: ticketimg,
      tech: ["Ollama", "Prompt engineering", "Python", "Transformers", "NLP"],
      githubLink: "https://github.com/sathwik-45",
      projectlink: ""
    },
    {
      title: "Human Resource System",
      description: "A digital workplace desk application enabling CRUD operations, department filters, and task distributions.",
      category: "mern",
      icon: faTasks,
      image: hrmsImg,
      tech: ["React", "Express", "Node.js", "MongoDB", "Material UI"],
      githubLink: "https://github.com/sathwik-45/hrms",
      projectlink: "https://hrms-rust.vercel.app/"
    },
    {
      title: "Digital Marketing Agency",
      description: "A customer-facing agency site showcasing service options, SEO strategies, and responsive contact flows.",
      category: "mern",
      icon: faLaptopCode,
      image: dmaImg,
      tech: ["React", "Node.js", "Bootstrap", "Vercel Analytics"],
      githubLink: "https://github.com/sathwik-45/dma",
      projectlink: "https://dma-bay.vercel.app/"
    },
    {
      title: "TaskManager App",
      description: "An agile-based workspace visualizer for managing backlogs, sprint tasks, and progress reports.",
      category: "mern",
      icon: faTasks,
      image: TaskImg,
      tech: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS"],
      githubLink: "https://github.com/sathwik-45/taskmanagar",
      projectlink: "https://managemytask.vercel.app/"
    }
  ];

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "MERN Stack", value: "mern" },
    { label: "Java Full Stack", value: "java" },
    { label: "Machine Learning", value: "ml" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Procedural gradient backgrounds for cards without custom images
  const getCardBg = (project) => {
    if (project.image) {
      return { backgroundImage: `url(${project.image})` };
    }
    if (project.category === "mern") {
      return { background: "linear-gradient(135deg, rgba(3, 7, 18, 0.9) 0%, rgba(6, 182, 212, 0.25) 100%)" };
    }
    if (project.category === "java") {
      return { background: "linear-gradient(135deg, rgba(3, 7, 18, 0.9) 0%, rgba(249, 115, 22, 0.25) 100%)" };
    }
    return { background: "linear-gradient(135deg, rgba(3, 7, 18, 0.9) 0%, rgba(139, 92, 246, 0.25) 100%)" };
  };

  return (
    <Container className="py-5">
      <div className="text-center mb-5" data-aos="fade-up">
        <span className="hero-subtitle">My Creative Work</span>
        <h2 className="text-gradient display-5 fw-bold mt-2">Projects Showcase</h2>
        <p className="text-muted max-w-2xl mx-auto mt-3">
          Explore my developments categorized into MERN Stack, Java backend utilities, and Python-based machine learning pipelines.
        </p>
        
        {/* Category Filters */}
        <div className="d-flex justify-content-center flex-wrap gap-2 mt-4">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className={`project-filter-btn ${filter === cat.value ? "active" : ""}`}
              onClick={() => setFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <Row className="g-4">
        {filteredProjects.map((project, index) => (
          <Col md={6} lg={4} key={index} data-aos="zoom-in" data-aos-delay={index * 50}>
            <div className={`project-card glow-${project.category}`}>
              <div className="project-image-wrapper">
                <span className={`project-badge badge-${project.category}`}>
                  {project.category === "mern" ? "MERN Stack" : project.category === "java" ? "Java / Spring Boot" : "Machine Learning"}
                </span>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                ) : (
                  <div 
                    className="w-100 h-100 d-flex flex-column align-items-center justify-content-center text-center p-3"
                    style={getCardBg(project)}
                  >
                    <FontAwesomeIcon 
                      icon={project.icon} 
                      size="3x" 
                      className={`mb-3 text-${project.category === "mern" ? "info" : project.category === "java" ? "warning" : "primary"}`}
                      style={{ opacity: 0.8 }}
                    />
                    <span className="fw-bold tracking-wider text-uppercase small text-white-50">CODEBASE ONLY</span>
                  </div>
                )}
                <div className="project-card-overlay">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn me-2">
                    <FontAwesomeIcon icon={faGithub} className="me-2" /> Repo
                  </a>
                  {project.projectlink && (
                    <a href={project.projectlink} target="_blank" rel="noopener noreferrer" className="project-btn project-btn-primary">
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" /> Live
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-body">
                <h4 className="project-title">
                  <FontAwesomeIcon icon={project.icon} className="me-2 text-white-50" style={{ fontSize: "1.1rem" }} />
                  {project.title}
                </h4>
                <p className="project-desc">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tag, tagIdx) => (
                    <span key={tagIdx} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-buttons mt-auto">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="project-btn"
                  >
                    <FontAwesomeIcon icon={faGithub} className="me-2" /> GitHub
                  </a>
                  {project.projectlink ? (
                    <a 
                      href={project.projectlink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-btn project-btn-primary"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="me-2" /> Launch
                    </a>
                  ) : (
                    <span className="project-btn text-muted disabled" style={{ cursor: "not-allowed", opacity: 0.5 }}>
                      No Demo
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
