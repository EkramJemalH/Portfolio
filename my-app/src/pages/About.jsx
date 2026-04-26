import "./About.css";
import { useState } from "react";
import cvFile from "../documents/cv.pdf";

import hackathonCert from "../documents/hercommerce-hackathon.pdf"; // ← THIS WAS MISSING
import gdgCert from "../documents/gdg-certificate.png";
import programmingCert from "../documents/programming-fundamentals.pdf";
import frontendCert from "../documents/frontend-web-development.png";

function About() {
  const [activeTab, setActiveTab] = useState("skills");

  // Skills data based on your CV
  const skills = {
    frontend: [
      { name: "HTML5", level: 97, icon: "🌐" },
      { name: "CSS3", level: 88, icon: "🎨" },
      { name: "JavaScript (ES6+)", level: 85, icon: "⚡" },
      { name: "React.js", level: 80, icon: "⚛️" },
      { name: "Responsive Design", level: 88, icon: "📱" },
      { name: "Git & GitHub", level: 80, icon: "🐙" }
    ],
    design: [
      { name: "Figma", level: 95, icon: "🎨" },
      { name: "Wireframing & Prototyping", level: 94, icon: "📐" },
      { name: "User Research", level: 85, icon: "🔍" },
      { name: "UI/UX Design", level: 82, icon: "✨" },
      { name: "Canva", level: 90, icon: "📐" },
      { name: "Accessibility Design", level: 89, icon: "♿" }
    ],
    database: [
      { name: "Firebase", level: 70, icon: "🔥" },
      { name: "MySQL (Basic)", level: 65, icon: "🗄️" },
      { name: "PHP (Basic)", level: 60, icon: "🐘" }
    ],
    tools: [
      { name: "VS Code", level: 89, icon: "💻" },
      { name: "Chrome DevTools", level: 82, icon: "🔧" },
      { name: "Postman", level: 70, icon: "📮" }
    ]
  };

  // Certificates based on your CV with file links
  const certificates = [
    {
      id: 1,
      title: "HerCommerce Hackathon Certification",
      issuer: "ALX Ethiopia",
      date: "Oct 2025",
      credentialId: "ALX-HC-2025",
      icon: "🏆",
      file: hackathonCert
    },
    {
      id: 2,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Sep 2025",
      credentialId: "FCC-RWD-2025",
      icon: "📱",
      file:"#" // ← Now this variable exists
    },
    {
      id: 3,
      title: "Google Developer Group Certificate",
      issuer: "AASTU",
      date: "Jun 2025",
      credentialId: "GDG-AASTU-2025",
      icon: "🌐",
      file: gdgCert
    },
    {
      id: 4,
      title: "Programming Fundamentals",
      issuer: "Udacity",
      date: "Aug 2024",
      credentialId: "UDACITY-PF-2024",
      icon: "💻",
      file: programmingCert
    },
    {
      id: 5,
      title: "Frontend Web Development",
      issuer: "ALX Ethiopia",
      date: "Sep 2025",
      credentialId: "ALX-FE-2025",
      icon: "⚛️",
      file: frontendCert
    }
  ];

  // Experience based on your CV
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer & UI/UX Designer",
      company: "Self-employed / Freelance",
      period: "Present",
      description: "Building intuitive, high-performing digital experiences by combining user-centered design with functional engineering. Transforming user needs into responsive and accessible interfaces that enhance usability and drive product success.",
      technologies: ["React", "UI/UX Design", "Figma", "Responsive Design"]
    },
    {
      id: 2,
      title: "Frontend Mentor",
      company: "GDG AASTU (Beginner Track)",
      period: "Jan 2026 - Present",
      description: "Mentoring beginners in HTML, CSS, JavaScript, and responsive design. Guiding practical projects, reviewing code, providing feedback, and teaching best practices to develop maintainable, efficient web applications.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Mentoring"]
    },
    {
      id: 3,
      title: "Web Development Intern",
      company: "Rixi Lab",
      period: "Sep 2025 (1 month)",
      description: "Built responsive web interfaces with HTML, CSS, and JavaScript. Developed backend logic and integrated with databases. Optimized web applications for performance and usability.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "Database Integration"]
    }
  ];

  // Function to open certificate in new tab
  const openCertificate = (certFile, certTitle) => {
    window.open(certFile, '_blank');
  };

  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* Section Header */}
        <div className="about-header">
          <span className="section-badge">About Me</span>
          <h2>Get to know me better</h2>
          <p>Frontend Developer & UI/UX Designer who builds intuitive, high-performing digital experiences</p>
        </div>

        <div className="about-content">
          
          {/* Left Column - Bio & Personal Info */}
          <div className="about-bio">
            <h3>Who am I?</h3>
            <p>
              I'm <strong>Ekram Jemal Hassen</strong>, a passionate <strong>Frontend Developer & UI/UX Designer</strong> 
              based in Addis Ababa, Ethiopia. I build intuitive, high-performing digital experiences by combining 
              user-centered design with functional engineering.
            </p>
            <p>
              Currently pursuing my <strong>Bachelor's degree in Software Engineering</strong> at Addis Ababa Science 
              & Technology University (Expected 2027), I'm focused on transforming user needs into responsive and 
              accessible interfaces that enhance usability and drive product success.
            </p>
            <p>
              I effectively bridge the design-development gap to create seamless user journeys and elevate overall 
              product quality. When I'm not coding, I mentor aspiring developers at GDG AASTU, helping them build 
              confidence in frontend development.
            </p>
            
            {/* Personal Info Grid */}
            <div className="personal-info">
              <div className="info-item">
                <span className="info-label">📧 Email:</span>
                <span>ekramjemalh@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">📍 Location:</span>
                <span>Addis Ababa, Ethiopia</span>
              </div>
              <div className="info-item">
                <span className="info-label">💼 Experience:</span>
                <span>1+ Years</span>
              </div>
              <div className="info-item">
                <span className="info-label">🎯 Availability:</span>
                <span>Open for opportunities</span>
              </div>
              <div className="info-item">
                <span className="info-label">🗣️ Languages:</span>
                <span>English, Amharic</span>
              </div>
              <div className="info-item">
                <span className="info-label">🎓 Education:</span>
                <span>Software Engineering (2027)</span>
              </div>
            </div>
            
            {/* Resume Download Button */}
            <a href={cvFile} download="Ekram_Jemal_CV.pdf" className="download-cv-btn">
              📄 Download CV / Resume
              <span>↓</span>
            </a>
          </div>

          {/* Right Column - Tabs Section */}
          <div className="about-tabs">
            {/* Tab Navigation */}
            <div className="tab-navigation">
              <button 
                className={activeTab === "skills" ? "tab-btn active" : "tab-btn"}
                onClick={() => setActiveTab("skills")}
              >
                💻 Technical Skills
              </button>
              <button 
                className={activeTab === "experience" ? "tab-btn active" : "tab-btn"}
                onClick={() => setActiveTab("experience")}
              >
                💼 Experience
              </button>
              <button 
                className={activeTab === "certificates" ? "tab-btn active" : "tab-btn"}
                onClick={() => setActiveTab("certificates")}
              >
                🏆 Certifications
              </button>
            </div>

            {/* Skills Tab */}
            {activeTab === "skills" && (
              <div className="skills-content">
                {/* Frontend Development Skills */}
                <div className="skill-category">
                  <h4>🚀 Frontend Development</h4>
                  <div className="skills-grid">
                    {skills.frontend.map((skill, index) => (
                      <div key={index} className="skill-card">
                        <div className="skill-header">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percent">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* UI/UX Design Skills */}
                <div className="skill-category">
                  <h4>🎨 UI/UX Design</h4>
                  <div className="skills-grid">
                    {skills.design.map((skill, index) => (
                      <div key={index} className="skill-card">
                        <div className="skill-header">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percent">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Database & Backend Skills */}
                <div className="skill-category">
                  <h4>🗄️ Database & Backend (Basic)</h4>
                  <div className="skills-grid">
                    {skills.database.map((skill, index) => (
                      <div key={index} className="skill-card">
                        <div className="skill-header">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percent">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="skill-category">
                  <h4>🛠️ Tools & Technologies</h4>
                  <div className="skills-grid">
                    {skills.tools.map((skill, index) => (
                      <div key={index} className="skill-card">
                        <div className="skill-header">
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percent">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Experience Tab */}
            {activeTab === "experience" && (
              <div className="experience-content">
                {experiences.map((exp) => (
                  <div key={exp.id} className="experience-card">
                    <div className="exp-header">
                      <div className="exp-icon">💼</div>
                      <div className="exp-info">
                        <h4>{exp.title}</h4>
                        <div className="exp-company">{exp.company}</div>
                        <div className="exp-period">{exp.period}</div>
                      </div>
                    </div>
                    <p className="exp-description">{exp.description}</p>
                    <div className="exp-tech">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Certificates Tab */}
            {activeTab === "certificates" && (
              <div className="certificates-content">
                <div className="certificates-grid">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="certificate-card">
                      <div className="cert-icon">{cert.icon}</div>
                      <div className="cert-info">
                        <h4>{cert.title}</h4>
                        <p className="cert-issuer">{cert.issuer}</p>
                        <div className="cert-meta">
                          <span className="cert-date">{cert.date}</span>
                          <span className="cert-id">{cert.credentialId}</span>
                        </div>
                      </div>
                      <button 
                        className="view-cert-btn" 
                        onClick={() => openCertificate(cert.file, cert.title)}
                      >
                        View →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;