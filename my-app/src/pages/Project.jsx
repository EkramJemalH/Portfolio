import { useState } from "react";
import { Link } from "react-router-dom";
import Craigslist from "../assets/Craigslist.png";
import EventifyImg from "../assets/eventify.png";
import CartifyImg from "../assets/Cartify.png";
import QuizzyImg from "../assets/Quizzy.png";
import PortfolioImg from "../assets/portfolio.png"; // Add your portfolio image

import "./Project.css";

function Project() {
  const [selectedCategory, setSelectedCategory] = useState("uiux");

  // UI/UX Projects Data
  const uiuxProjects = [
    {
      id: 1,
      title: "Craigslist Redesign",
      category: "UI/UX Case Study",
      description: "Redesigning Craigslist for a clearer and more intuitive marketplace experience.",
      image: Craigslist,
      tags: ["UI Design", "UX Research", "Marketplace", "Redesign"],
      hasCaseStudy: true,
      caseStudyLink: "/case-study/craigslist",
      year: "2024"
    },
    {
      id: 2,
      title: "Eventify - Event Discovery App",
      category: "Mobile App Design",
      description: "A modern mobile app that helps users discover, track, and attend upcoming events in their area with personalized recommendations.",
      image: EventifyImg,
      tags: ["Mobile Design", "Event Discovery", "User Experience", "Prototyping"],
      hasCaseStudy: false,
      projectLink: "/projects/eventify",
      year: "2024"
    }
  ];

  // Frontend Projects Data
  const frontendProjects = [
    {
      id: 3,
      title: "Cartify - E-commerce Website",
      category: "Frontend E-commerce",
      description: "A modern, responsive e-commerce frontend application that integrates with REST APIs for product data, user authentication, and order management. Built with React and Vite.",
      image: CartifyImg,
      tags: ["React", "Vite", "API Integration", "Context API", "Responsive"],
      status: "completed",
      liveLink: "https://cartify-ecommerce-site.vercel.app/",
      githubLink: "https://github.com/EkramJemalH/Cartify_Ecommerce_Site",
      figmaLink: "https://www.figma.com/design/ZmcEdgamVaY1AO43eZPDPq/Cartify",
      year: "2024"
    },
    {
      id: 4,
      title: "Quizzy - Interactive Quiz App",
      category: "Frontend Web App",
      description: "An interactive quiz application that fetches questions from Open Trivia DB API. Users can select categories and difficulty levels, answer questions one at a time, and receive their final score with answer review.",
      image: QuizzyImg,
      tags: ["React", "API Integration", "React Router", "Dynamic Routing", "Responsive"],
      status: "completed",
      liveLink: "https://quiz-app-quizzy.netlify.app/",
      githubLink: "https://github.com/EkramJemalH/ALX-Capstone-project",
      figmaLink: "https://www.figma.com/design/OlPCvSQWf3GbdNaz01dj8J/Capstone-project-desgin",
      year: "2024"
    },
    {
      id: 5,
      title: "My Portfolio Website",
      category: "Frontend Development",
      description: "A modern, responsive portfolio website showcasing my work as a Frontend Developer and UI/UX Designer. Built with React, featuring smooth scrolling, project showcases, and a contact section.",
      image: PortfolioImg,
      tags: ["React", "CSS", "Responsive Design", "Portfolio"],
      status: "completed",
      liveLink: "https://ekramsportfolio.netlify.app/",
      githubLink: "https://github.com/EkramJemalH/Portfolio",
      year: "2025"
    }
  ];

  return (
    <main className="projects" id="projects">
      <div className="projects-container">
        
        {/* Section Header */}
        <div className="projects-header">
          <span className="section-badge">My Work</span>
          <h2>Projects</h2>
          <p>Exploring the intersection of design thinking and technical execution</p>
        </div>

        {/* Category Tabs */}
        <div className="category-tabs">
          <button 
            className={`tab-category-btn ${selectedCategory === "uiux" ? "active" : ""}`}
            onClick={() => setSelectedCategory("uiux")}
          >
            <span className="tab-icon">🎨</span>
            UI/UX Design
          </button>
          <button 
            className={`tab-category-btn ${selectedCategory === "frontend" ? "active" : ""}`}
            onClick={() => setSelectedCategory("frontend")}
          >
            <span className="tab-icon">💻</span>
            Frontend Development
          </button>
        </div>

        {/* UI/UX Projects Section */}
        {selectedCategory === "uiux" && (
          <div className="projects-grid">
            {uiuxProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.hasCaseStudy && (
                    <div className="case-study-badge">
                      <span>📖</span> Case Study/Web app
                    </div>
                  )}
                  {!project.hasCaseStudy && (
                    <div className="project-badge">
                      <span>📱</span> Mobile App
                    </div>
                  )}
                </div>
                
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  {project.hasCaseStudy ? (
                    <Link to={project.caseStudyLink} className="view-case-btn">
                      View Case Study
                      <span className="btn-arrow">→</span>
                    </Link>
                  ) : (
                    <Link to={project.projectLink} className="view-case-btn secondary">
                      View Details
                      <span className="btn-arrow">→</span>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Frontend Projects Section */}
        {selectedCategory === "frontend" && (
          <div className="projects-grid">
            {frontendProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  {project.status === "completed" && (
                    <div className="status-badge completed">
                      ✅ Live Demo
                    </div>
                  )}
                </div>
                
                <div className="project-content">
                  <div className="project-meta">
                    <span className="project-year">{project.year}</span>
                    <span className="project-category">{project.category}</span>
                  </div>
                  
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tags.map((tag, index) => (
                      <span key={index} className="tag">{tag}</span>
                    ))}
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="view-case-btn"
                    >
                      Live Demo
                      <span className="btn-arrow">→</span>
                    </a>
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="view-case-btn secondary"
                    >
                      GitHub
                      <span className="btn-arrow">→</span>
                    </a>
                    {project.figmaLink && (
                      <a 
                        href={project.figmaLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="view-case-btn secondary"
                      >
                        Figma Design
                        <span className="btn-arrow">→</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Project;