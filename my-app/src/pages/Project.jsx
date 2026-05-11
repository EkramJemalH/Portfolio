import { useState } from "react";
import { Link } from "react-router-dom";
import Craigslist from "../assets/craigslist.png";
// REMOVE: import CraigslistCaseStudy from "./CraigslistCaseStudy";
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
      caseStudyLink: "/case-study/craigslist", // ← FIXED: Just the path string
      year: "2024"
    },
    {
      id: 2,
      title: "Project 2 Name",
      category: "UI/UX Design",
      description: "Your second project description here",
      image: "/images/project2-mockup.png",
      tags: ["UI Design", "Prototyping", "User Flow"],
      hasCaseStudy: false,
      caseStudyLink: "/case-study/project2",
      year: "2024"
    }
  ];

  // Frontend Projects Data (Coming Soon)
  const frontendProjects = [
    {
      id: 3,
      title: "Cartify React App",
      category: "Frontend Development",
      description: "Full e-commerce platform built with React",
      image: "/images/cartify-frontend.png",
      tags: ["React", "LocalStorage", "Responsive"],
      status: "in-progress",
      completion: 75,
      year: "2024"
    }
  ];

  return (
    <main className="projects">
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
                      <span>📖</span> Case Study
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
                  
                  <Link to={project.caseStudyLink} className="view-case-btn">
                    View Case Study
                    <span className="btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Frontend Projects Section */}
        {selectedCategory === "frontend" && (
          <div className="projects-grid">
            {frontendProjects.map((project) => (
              <div key={project.id} className="project-card coming-soon-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="status-badge in-progress">
                    🚧 In Progress
                  </div>
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
                  
                  {/* Progress Bar */}
                  <div className="progress-section">
                    <div className="progress-label">
                      <span>Completion Progress</span>
                      <span>{project.completion}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <button className="reserved-btn" disabled>
                    🔄 Coming Soon - Under Construction
                  </button>
                </div>
              </div>
            ))}
            
            {/* Reserved Spot for Future Projects */}
            <div className="project-card reserved-spot-card">
              <div className="reserved-content">
                <div className="plus-icon">+</div>
                <h3>More Projects Coming</h3>
                <p>I'm currently working on exciting new projects. Stay tuned!</p>
                <div className="reserved-placeholder"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Project;