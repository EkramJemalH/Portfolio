import "./Home.css";
import profileImage from "../assets/profile.jpg"; 
function Home() {
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
          <span>Tailwind</span>
        </div>
        
        <div className="home-buttons">
          <button className="btn-primary">
            View Projects
            <span>→</span>
          </button>
          <button className="btn-secondary">
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