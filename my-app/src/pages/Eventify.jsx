import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Eventify.css";

// Import images (add your actual images to assets folder)
import EventifyMockup1 from "../assets/HomeEventify.png";
import EventifyMockup2 from "../assets/LoginEventify.png";
import EventifyMockup3 from "../assets/PostPage.png";
import EventifyMockup4 from "../assets/ProfileEventify.png";
import EventifyMockup5 from "../assets/SignupEventify.png";
import EventifyMockup6 from "../assets/welcomePage.png";
//import EventifyLogo from "../assets/eventify-logo.png";

function Eventify() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openModal = (image, title) => {
    setSelectedImage({ src: image, title: title });
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown, isModalOpen]);

  const goToProjects = () => {
    navigate("/projects");
  };

  return (
    <main className="eventify-page">
      <div className="eventify-container">
        
        {/* Back Button */}
        <div className="back-button">
          <button onClick={goToProjects} className="back-btn">
            ← Back to Projects
          </button>
        </div>

        {/* ========== HERO SECTION ========== */}
        <div className="eventify-hero">
          <div className="hero-badge">
            <span className="badge-icon">📱</span>
            Mobile App Design
          </div>
          <h1>Eventify Ethiopia</h1>
          <p className="hero-subtitle">Local Event & Festival Guide</p>
          <p className="hero-description">
            A modern mobile application that connects Ethiopians with exciting events happening 
            across the country — from cultural festivals and concerts to tech conferences and 
            community meetups.
          </p>
          
          <div className="project-meta-grid">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">UI/UX Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">3 Weeks</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Tools</span>
              <span className="meta-value">Figma, canvas</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Platform</span>
              <span className="meta-value">iOS / Android</span>
            </div>
          </div>
        </div>

        {/* ========== PROJECT OVERVIEW ========== */}
        <section className="eventify-section overview-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2>Project Overview</h2>
          </div>
          <div className="overview-content">
            <p>
              <strong>Eventify Ethiopia</strong> is a comprehensive mobile application designed to 
              bridge the gap between event organizers and attendees across Ethiopia. The app serves 
              as a centralized platform where users can discover, track, and attend local events 
              that match their interests.
            </p>
            <p>
              From <strong>cultural festivals</strong> celebrating Ethiopia's rich heritage to
              <strong>live concerts</strong> featuring local artists, <strong>tech conferences</strong> 
              fostering innovation, and <strong>community meetups</strong> building connections — 
              Eventify brings everything together in one intuitive interface.
            </p>
          </div>
        </section>

        {/* ========== THE PROBLEM ========== */}
        <section className="eventify-section problem-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>The Problem</h2>
          </div>
          
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-icon">🔍</div>
              <h3>Event Discovery is Fragmented</h3>
              <p>People struggle to find out about local events due to scattered information across social media, flyers, and word of mouth.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📅</div>
              <h3>No Centralized Calendar</h3>
              <p>Users have no single place to track upcoming events, leading to missed opportunities and scheduling conflicts.</p>
            </div>
            <div className="problem-card">
              <div className="problem-icon">📢</div>
              <h3>Organizers Lack Reach</h3>
              <p>Event organizers struggle to effectively promote their events to target audiences.</p>
            </div>
          </div>
        </section>

        {/* ========== SOLUTION ========== */}
        <section className="eventify-section solution-section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2>The Solution</h2>
          </div>
          
          <div className="solution-content">
            <p>
              Eventify Ethiopia solves these challenges by providing a <strong>dedicated mobile platform</strong> 
              where users can:
            </p>
            
            <div className="solution-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Browse upcoming events across multiple categories</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Mark favorite events and receive reminders</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>View events on an interactive calendar</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Submit new events as an organizer</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Filter by location, date, category, and price</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Share events with friends and family</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========== KEY FEATURES ========== */}
        <section className="eventify-section features-section">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2>Key Features</h2>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🗺️</div>
              <h3>Discover Events</h3>
              <p>Browse cultural festivals, concerts, tech conferences, and community meetups happening across Ethiopia.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">❤️</div>
              <h3>Favorites & Bookmarks</h3>
              <p>Save events you're interested in and build your personal event itinerary.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📆</div>
              <h3>Smart Calendar View</h3>
              <p>Visualize your schedule with an integrated calendar that shows all your saved and attended events.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✍️</div>
              <h3>Event Submission</h3>
              <p>Organizers can easily submit new events for approval, making it a true community-driven platform.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3>Reminders & Alerts</h3>
              <p>Get notified before events start so you never miss what matters to you.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📍</div>
              <h3>Location-Based</h3>
              <p>Discover events happening near you with location-based recommendations.</p>
            </div>
          </div>
        </section>

        {/* ========== USER FLOW ========== */}
        <section className="eventify-section flow-section">
          <div className="section-header">
            <span className="section-number">05</span>
            <h2>User Flow</h2>
          </div>
          
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Onboarding</h3>
                <p>Users select their interests to personalize event recommendations.</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Browse & Discover</h3>
                <p>Explore events by category, location, or trending picks.</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Save & Plan</h3>
                <p>Mark favorites and add events to your personal calendar.</p>
              </div>
            </div>
            <div className="flow-arrow">→</div>
            <div className="flow-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Attend & Share</h3>
                <p>Get reminders, attend events, and share experiences with friends.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== DESIGN SYSTEM ========== */}
        <section className="eventify-section design-section">
          <div className="section-header">
            <span className="section-number">06</span>
            <h2>Design System</h2>
          </div>
          
          <div className="design-grid">
            <div className="design-block colors">
              <h3>🎨 Color Palette</h3>
              <div className="color-swatches">
                <div className="color-swatch">
                  <div className="swatch" style={{ background: "#FF6B35" }}></div>
                  <span>#FF6B35<br/>Primary</span>
                </div>
                <div className="color-swatch">
                  <div className="swatch" style={{ background: "#2EC4B6" }}></div>
                  <span>#2EC4B6<br/>Secondary</span>
                </div>
              </div>
            </div>
            
            <div className="design-block typography">
              <h3>✍️ Typography</h3>
              <div className="font-sample">
                <p className="font-name">SF Pro Display / Inter</p>
                <p className="font-example-large">Headlines: 24-34px</p>
                <p className="font-example-body">Body: 14-16px</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== UI SCREENS ========== */}
        <section className="eventify-section ui-section">
          <div className="section-header">
            <span className="section-number">07</span>
            <h2>UI Screens</h2>
          </div>
          <p className="section-intro">
            Clean, intuitive interface designed for effortless event discovery and management.
          </p>

          <div className="ui-screens-grid">
            <div className="ui-screen-card">
              <div className="screen-mockup">
                <div className="mockup-placeholder">
                  <span className="placeholder-icon">🏠</span>
                  <p>Home Feed</p>
                </div>
              </div>
              <h4>Home Feed</h4>
              <p>Personalized event recommendations based on user interests.</p>
            </div>
            
            <div className="ui-screen-card">
              <div className="screen-mockup">
                <div className="mockup-placeholder">
                  <span className="placeholder-icon">🔍</span>
                  <p>Search & Filter</p>
                </div>
              </div>
              <h4>Discover</h4>
              <p>Advanced filtering by category, date, location, and price.</p>
            </div>
            
            <div className="ui-screen-card">
              <div className="screen-mockup">
                <div className="mockup-placeholder">
                  <span className="placeholder-icon">❤️</span>
                  <p>Favorites</p>
                </div>
              </div>
              <h4>My Events</h4>
              <p>Save and organize events you're interested in.</p>
            </div>
            
            <div className="ui-screen-card">
              <div className="screen-mockup">
                <div className="mockup-placeholder">
                  <span className="placeholder-icon">📅</span>
                  <p>Calendar View</p>
                </div>
              </div>
              <h4>Calendar</h4>
              <p>Visual timeline of upcoming events.</p>
            </div>
            
            <div className="ui-screen-card">
              <div className="screen-mockup">
                <div className="mockup-placeholder">
                  <span className="placeholder-icon">✍️</span>
                  <p>Submit Event</p>
                </div>
              </div>
              <h4>Organizer Portal</h4>
              <p>Easy event submission form for organizers.</p>
            </div>
            
            <div className="ui-screen-card">
              <div className="screen-mockup">
                <div className="mockup-placeholder">
                  <span className="placeholder-icon">👤</span>
                  <p>User Profile</p>
                </div>
              </div>
              <h4>Profile</h4>
              <p>Manage preferences, saved events, and submissions.</p>
            </div>
          </div>
        </section>

        {/* ========== UI IMAGES GALLERY ========== */}
        <section className="eventify-section ui-images-section">
          <div className="section-header">
            <span className="section-number">07.5</span>
            <h2>UI Design Gallery</h2>
          </div>
          <p className="section-intro">
            Visual showcase of the Eventify Ethiopia mobile app interface — from onboarding to event discovery and calendar management. Click on any image to zoom in.
          </p>

          <div className="ui-images-grid">
            <div className="ui-image-card" onClick={() => openModal(EventifyMockup1, "Home Screen")}>
              <img src={EventifyMockup1} alt="Eventify Home Screen" className="ui-image" />
              <div className="image-caption">
                <h4>Home Screen</h4>
                <p>Personalized event feed with curated recommendations</p>
              </div>
            </div>

            <div className="ui-image-card" onClick={() => openModal(EventifyMockup2, "Login Screen")}>
              <img src={EventifyMockup2} alt="Eventify Login Screen" className="ui-image" />
              <div className="image-caption">
                <h4>Login Page</h4>
                <p>Secure authentication for users and organizers</p>
              </div>
            </div>

            <div className="ui-image-card" onClick={() => openModal(EventifyMockup3, "Post Event Page")}>
              <img src={EventifyMockup3} alt="Eventify Post Event Page" className="ui-image" />
              <div className="image-caption">
                <h4>Post Event Page</h4>
                <p>Easy event submission form for organizers</p>
              </div>
            </div>

            <div className="ui-image-card" onClick={() => openModal(EventifyMockup4, "User Profile")}>
              <img src={EventifyMockup4} alt="Eventify User Profile" className="ui-image" />
              <div className="image-caption">
                <h4>User Profile</h4>
                <p>Manage preferences, saved events, and submissions</p>
              </div>
            </div>

            <div className="ui-image-card" onClick={() => openModal(EventifyMockup5, "Sign Up Screen")}>
              <img src={EventifyMockup5} alt="Eventify Sign Up Screen" className="ui-image" />
              <div className="image-caption">
                <h4>Sign Up Page</h4>
                <p>Easy registration for new users</p>
              </div>
            </div>

            <div className="ui-image-card" onClick={() => openModal(EventifyMockup6, "Welcome Page")}>
              <img src={EventifyMockup6} alt="Eventify Welcome Page" className="ui-image" />
              <div className="image-caption">
                <h4>Welcome Page</h4>
                <p>Onboarding experience for new users</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== IMPACT & OUTCOME ========== */}
        <section className="eventify-section impact-section">
          <div className="section-header">
            <span className="section-number">08</span>
            <h2>Impact & Outcome</h2>
          </div>
          
          <div className="impact-stats">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Events Weekly</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Cities Covered</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">200+</div>
              <div className="stat-label">Event Organizers</div>
            </div>
          </div>
          
          <div className="impact-quote">
            <p>✨ Eventify Ethiopia aims to become the go-to platform for discovering local events, fostering community engagement, and supporting event organizers across the nation.</p>
          </div>
        </section>

        {/* ========== NEXT STEPS ========== */}
        <section className="eventify-section next-steps-section">
          <div className="section-header">
            <span className="section-number">09</span>
            <h2>Next Steps</h2>
          </div>
          
          <div className="next-steps-grid">
            <div className="next-step-item">
              <span className="step-icon">🚀</span>
              <h3>Beta Launch</h3>
              <p>Launch MVP version with core features for early adopters.</p>
            </div>
            <div className="next-step-item">
              <span className="step-icon">🎫</span>
              <h3>Ticketing Integration</h3>
              <p>Add in-app ticket purchasing functionality.</p>
            </div>
            <div className="next-step-item">
              <span className="step-icon">🤝</span>
              <h3>Partnership Program</h3>
              <p>Partner with major venues and event organizers.</p>
            </div>
            <div className="next-step-item">
              <span className="step-icon">⭐</span>
              <h3>Ratings & Reviews</h3>
              <p>Enable user feedback for events and organizers.</p>
            </div>
          </div>
        </section>

        {/* ========== FIGMA PROTOTYPE ========== */}
        <section className="eventify-section figma-section">
          <div className="section-header">
            <span className="section-number">10</span>
            <h2>Figma Prototype</h2>
          </div>
          <p className="section-intro">
            View the complete interactive prototype to explore the full design system and user flows.
          </p>

          <div className="figma-container">
            <div className="figma-embed">
              <div className="figma-placeholder">
                <span className="figma-icon">🎨</span>
                <p>Eventify Ethiopia - Complete UI Kit</p>
                <p className="figma-subtitle">Interactive prototype with all screens and user flows</p>
              </div>
              <div className="figma-overlay">
                <a 
                  href="https://www.figma.com/design/BBgcOVn74BVlvdRcufpRIP/Eventfiy?node-id=13-36&t=922DNDpxvEt7I8Iy-1" 
                  className="figma-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  🔗 View Interactive Prototype on Figma
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========== PROJECT NAVIGATION ========== */}
        <div className="project-navigation">
          <button onClick={goToProjects} className="nav-btn nav-prev">
            ← All Projects
          </button>
          
          <div className="project-pagination">
            <span className="page-indicator">Eventify</span>
          </div>
         
          <button onClick={() => navigate("/case-study/craigslist")} className="nav-btn nav-next">
            Next Project: Craigslist Redesign →
          </button>
        </div>
      </div>

      {/* ========== MODAL FOR ZOOMED IMAGE ========== */}
      {isModalOpen && selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage.src} alt={selectedImage.title} className="modal-image" />
            <div className="modal-caption">
              <h3>{selectedImage.title}</h3>
            </div>
            <div className="modal-controls">
              <button className="modal-zoom-btn" onClick={() => {
                const img = document.querySelector('.modal-image');
                if (img.style.transform === 'scale(1.5)') {
                  img.style.transform = 'scale(1)';
                } else {
                  img.style.transform = 'scale(1.5)';
                }
              }}>
                🔍 Zoom In/Out
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Eventify;