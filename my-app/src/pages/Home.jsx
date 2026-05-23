import "./Home.css";
import profileImage from "../assets/profile.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <section className="home">
      <div className="home-content">
        
        <h1>
          Hi, I'm <span className="gradient-text">Ekram</span>
        </h1>
        
        <h2>Frontend Developer & UI/UX Designer</h2>
        
        <p>
          I craft elegant, performant web experiences with modern technologies.
          Specialized in React, and creating delightful user interfaces.
        </p>
        
        <div className="tech-stack">
          <span>React</span>
          <span>UI/UX</span>
          <span>JavaScript</span>
          <span>CSS</span>
          <span>HTML</span>
          <span>Figma</span>
          <span>Git</span>
          <span>DataBase</span>
          <span>Fire Base</span>
        </div>
        
        <div className="home-buttons">
          <button 
            className="btn-primary"
            onClick={() => handleNavigation("/projects")}
          >
            View Projects
            <span>→</span>
          </button>
          <button 
            className="btn-secondary"
            onClick={() => handleNavigation("/contact")}
          >
            Contact Me
          </button>
        </div>
      </div>
      
      <div className="home-avatar">
        <div className="avatar-container">
          <img 
            src={profileImage}
            alt="Ekram - Frontend Developer"
            className="avatar-image"
          />
          <div className="avatar-glow"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;