import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./CaseStudy.css";

// Comment out the imports until you add the actual images
// import HomepageImg from "../assets/HomePage.png";
// import BrowseImg from "../assets/Browse.png";
// import SignupImg from "../assets/Signup.png";
// import PostAdImg from "../assets/PostAd.png";
// import ProfileImg from "../assets/Profile.png";

function CraigslistCaseStudy() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-study">
      <div className="case-study-container">
        
        {/* Back Button */}
        <div className="back-button">
          <button onClick={() => navigate("/projects")} className="back-btn">
            ← Back to Projects
          </button>
        </div>

        {/* ========== HERO SECTION ========== */}
        <div className="case-study-hero">
          <span className="case-category">UI/UX Case Study</span>
          <h1>Craigslist Redesign</h1>
          <p className="hero-description">
            Redesigning Craigslist for a clearer and more intuitive marketplace experience.
          </p>
          
          <div className="project-meta-grid">
            <div className="meta-item">
              <span className="meta-label">Role</span>
              <span className="meta-value">UX/UI Designer</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Timeline</span>
              <span className="meta-value">3 Weeks</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Tools</span>
              <span className="meta-value">Figma</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Type</span>
              <span className="meta-value">Website Redesign</span>
            </div>
          </div>
        </div>

        {/* ========== WHAT IS CRAIGSLIST? ========== */}
        <section className="case-section overview-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2>What is Craigslist?</h2>
          </div>
          <div className="overview-content">
            <p>
              Craigslist is a local online marketplace where people can buy and sell items, 
              find housing, jobs, and services, and post community listings. It works as a 
              simple classifieds platform that connects people within the same area.
            </p>
            <p>
              Founded in 1995, Craigslist has grown to become one of the most widely used 
              classified advertising platforms in the world. It operates in over 70 countries 
              and serves millions of users daily across hundreds of local communities.
            </p>
            <p>
              Unlike modern e-commerce platforms that focus on visual browsing and social 
              features, Craigslist has always prioritized simplicity and function over form. 
              The platform is designed to be lightweight, fast-loading, and accessible to 
              anyone with an internet connection, regardless of device or bandwidth.
            </p>
            <p>
              However, this simplicity has become a double-edged sword. While loyal users 
              appreciate the straightforward, no-frills approach, new users often struggle 
              to understand where to start, what actions are available, and how to accomplish 
              basic tasks like posting a listing or finding a specific item.
            </p>
          </div>
        </section>

        {/* ========== PREVIOUS UI SECTION ========== */}
        <section className="case-section previous-ui-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2>Previous UI Design</h2>
          </div>
          <p className="section-intro">
            Before diving into the redesign, let's look at the original Craigslist interface 
            that users have been interacting with for decades.
          </p>
          
          <div className="previous-ui-grid">
            <div className="ui-card">
              <div className="ui-image">
                <div className="image-placeholder original">
                  <span className="placeholder-icon">📸</span>
                  <p>Original Homepage Screenshot</p>
                </div>
              </div>
              <h4>Original Homepage</h4>
              <p>Cluttered layout with competing visual elements</p>
            </div>
            <div className="ui-card">
              <div className="ui-image">
                <div className="image-placeholder original">
                  <span className="placeholder-icon">📸</span>
                  <p>Original Listings Page</p>
                </div>
              </div>
              <h4>Original Listings Page</h4>
              <p>Dense text listings with poor visual hierarchy</p>
            </div>
            <div className="ui-card">
              <div className="ui-image">
                <div className="image-placeholder original">
                  <span className="placeholder-icon">📸</span>
                  <p>Original Post Form</p>
                </div>
              </div>
              <h4>Original Post an Ad</h4>
              <p>Complex form with unclear steps</p>
            </div>
          </div>
          
          <div className="ui-summary">
            <p className="highlight-text">
              The original design prioritizes information density over usability, making it 
              difficult for first-time users to understand the platform's purpose and navigate 
              effectively.
            </p>
          </div>
        </section>

        {/* ========== THE PROBLEM SECTION ========== */}
        <section className="case-section problem-section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2>The Problem</h2>
          </div>
          
          <div className="problem-content">
            <p className="problem-highlight">
              The original homepage tries to surface many functions at the same time.
            </p>
            <p>
              Users are immediately presented with categories, filters, language options, a calendar, 
              account actions, post actions, and footer links—all competing for attention.
            </p>
            <p>
              Instead of guiding users, the interface asks them to process too much information at once.
            </p>
          </div>

          <div className="problem-list-container">
            <h3>Key Usability Issues</h3>
            <div className="problem-grid">
              <div className="problem-item">
                <span className="problem-icon">⚠️</span>
                <p>The homepage does not clearly explain what Craigslist is</p>
              </div>
              <div className="problem-item">
                <span className="problem-icon">⚠️</span>
                <p>There is no strong visual hierarchy to guide new users</p>
              </div>
              <div className="problem-item">
                <span className="problem-icon">⚠️</span>
                <p>Too many actions compete for attention in one place</p>
              </div>
              <div className="problem-item">
                <span className="problem-icon">⚠️</span>
                <p>Important actions such as browsing listings, posting, and account access are crowded together</p>
              </div>
              <div className="problem-item">
                <span className="problem-icon">⚠️</span>
                <p>First-time users may feel uncertain about where to start</p>
              </div>
              <div className="problem-item">
                <span className="problem-icon">⚠️</span>
                <p><strong>No clear separation of pages</strong> — all sections (browse, post, account, help) are crammed into one long page without logical grouping</p>
              </div>
              <div className="problem-item">
                <span className="problem-icon">⚠️</span>
                <p><strong>Information overload</strong> — users are overwhelmed because everything is visible at once rather than organized into distinct, focused pages</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========== DESIGN GOAL SECTION ========== */}
        <section className="case-section goals-section">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2>Design Goal</h2>
          </div>
          
          <div className="goal-content">
            <p>
              The goal of this redesign was to create a <strong>clearer and more approachable first impression</strong>.
            </p>
            <p>
              The redesigned experience should help users quickly understand what Craigslist offers 
              and guide them naturally toward their next action.
            </p>
          </div>

          <div className="goals-grid">
            <div className="goal-card">
              <div className="goal-icon">🎯</div>
              <h4>Clarify Purpose</h4>
              <p>Communicate what Craigslist is immediately</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon">🧹</div>
              <h4>Reduce Clutter</h4>
              <p>Remove visual noise and competing elements</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon">📊</div>
              <h4>Create Hierarchy</h4>
              <p>Guide users with stronger content structure</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon">⚡</div>
              <h4>Separate Actions</h4>
              <p>Distinguish browsing, posting, and account tasks</p>
            </div>
            <div className="goal-card">
              <div className="goal-icon">🔍</div>
              <h4>Improve Discoverability</h4>
              <p>Make key features easy to find</p>
            </div>
          </div>
        </section>

        {/* ========== DESIGN APPROACH SECTION ========== */}
        <section className="case-section approach-section">
          <div className="section-header">
            <span className="section-number">05</span>
            <h2>Design Approach</h2>
          </div>

          <div className="approach-item">
            <div className="approach-number">01</div>
            <div className="approach-content">
              <h3>Clearer Homepage Purpose</h3>
              <p>
                The original homepage jumps directly into listings and utilities without introducing 
                the product. In the redesign, I introduced a clearer landing section that communicates 
                what Craigslist is and what users can do there. This helps new users understand the 
                platform within seconds.
              </p>
            </div>
          </div>

          <div className="approach-item">
            <div className="approach-number">02</div>
            <div className="approach-content">
              <h3>Better Visual Hierarchy</h3>
              <p>
                The original interface places nearly everything at the same level of importance. 
                The redesign introduces hierarchy through:
              </p>
              <ul className="approach-list">
                <li>Clearer section grouping</li>
                <li>Improved spacing and breathing room</li>
                <li>Larger, more prominent primary actions</li>
                <li>Simplified visual flow that guides the eye</li>
              </ul>
              <p>This allows users to scan the page more naturally and find what they need faster.</p>
            </div>
          </div>

          <div className="approach-item">
            <div className="approach-number">03</div>
            <div className="approach-content">
              <h3>Separated Key Actions</h3>
              <p>
                One of the biggest usability issues was that browsing, posting, logging in, and 
                creating an account all competed in the same space. The redesign separates these 
                actions so each has a clearer role:
              </p>
              <ul className="approach-list">
                <li>Browsing listings becomes the primary task</li>
                <li>Posting becomes a distinct, prominent call-to-action</li>
                <li>Account-related actions are placed in a secondary but accessible area</li>
              </ul>
            </div>
          </div>

          <div className="approach-item">
            <div className="approach-number">04</div>
            <div className="approach-content">
              <h3>Simplified Navigation</h3>
              <p>
                Instead of overwhelming users with too many simultaneous choices, the redesign makes 
                categories easier to browse and easier to understand. The navigation structure focuses 
                on helping users quickly reach the most common destinations without cognitive overload.
              </p>
            </div>
          </div>
        </section>

        {/* ========== FINAL SOLUTION SECTION ========== */}
        <section className="case-section solution-section">
          <div className="section-header">
            <span className="section-number">06</span>
            <h2>Final Solution</h2>
          </div>
          
          <div className="solution-content">
            <p className="solution-highlight">
              The redesigned homepage introduces a cleaner and more guided experience.
            </p>
          </div>

          <div className="improvements-grid">
            <div className="improvement-item">
              <span className="check-icon">✓</span>
              <p>A clear introductory hero section explains the platform immediately</p>
            </div>
            <div className="improvement-item">
              <span className="check-icon">✓</span>
              <p>Stronger visual hierarchy helps users understand where to focus</p>
            </div>
            <div className="improvement-item">
              <span className="check-icon">✓</span>
              <p>Major actions are separated to reduce confusion</p>
            </div>
            <div className="improvement-item">
              <span className="check-icon">✓</span>
              <p>Categories and listings are easier to browse</p>
            </div>
            <div className="improvement-item">
              <span className="check-icon">✓</span>
              <p>The experience feels more approachable for first-time users</p>
            </div>
          </div>
        </section>

        {/* ========== FINAL UI SCREENS SECTION ========== */}
        <section className="case-section final-ui-section">
          <div className="section-header">
            <span className="section-number">07</span>
            <h2>Final UI Screens</h2>
          </div>
          <p className="section-intro">
            The final redesign focused on the core flows that matter most to users.
          </p>

          <div className="final-screens-grid">
            <div className="screen-card">
              <div className="screen-image">
                <div className="image-placeholder final">
                  <span className="placeholder-icon">🏠</span>
                  <p>Redesigned Homepage</p>
                </div>
              </div>
              <h4>Homepage</h4>
              <p>
                A redesigned landing experience that introduces Craigslist clearly and guides users 
                toward browsing, posting, or exploring categories.
              </p>
            </div>
            
            <div className="screen-card">
              <div className="screen-image">
                <div className="image-placeholder final">
                  <span className="placeholder-icon">🔍</span>
                  <p>Browse & Search Page</p>
                </div>
              </div>
              <h4>Listings / Browse Page</h4>
              <p>
                A cleaner browsing layout with better organization, visual cards, and easier scanning 
                of available listings.
              </p>
            </div>
            
            <div className="screen-card">
              <div className="screen-image">
                <div className="image-placeholder final">
                  <span className="placeholder-icon">📝</span>
                  <p>Post an Ad Form</p>
                </div>
              </div>
              <h4>Post an Ad</h4>
              <p>
                A more focused, step-by-step posting flow that separates content creation from 
                browsing behavior.
              </p>
            </div>
          </div>
        </section>

        {/* ========== UI DESIGN SHOWCASE ========== */}
        <section className="case-section showcase-section">
          <div className="section-header">
            <span className="section-number">08</span>
            <h2>UI Design Showcase</h2>
          </div>
          <p className="section-intro">
            Here are the complete UI designs with all key screens and components I redesigned for Craigslist.
          </p>

          <div className="showcase-grid">
            <div className="showcase-item">
              <div className="showcase-image">
                <div className="image-placeholder showcase-placeholder">
                  <span className="placeholder-icon">🏠</span>
                  <p>Homepage Design</p>
                </div>
              </div>
              <p>🏠 Homepage</p>
              <span className="showcase-tag">Landing Page</span>
            </div>
            
            <div className="showcase-item">
              <div className="showcase-image">
                <div className="image-placeholder showcase-placeholder">
                  <span className="placeholder-icon">🔍</span>
                  <p>Browse & Search</p>
                </div>
              </div>
              <p>🔍 Browse & Search</p>
              <span className="showcase-tag">Listings Page</span>
            </div>
            
            <div className="showcase-item">
              <div className="showcase-image">
                <div className="image-placeholder showcase-placeholder">
                  <span className="placeholder-icon">📝</span>
                  <p>Sign Up / Login</p>
                </div>
              </div>
              <p>📝 Sign Up / Login</p>
              <span className="showcase-tag">Authentication</span>
            </div>
            
            <div className="showcase-item">
              <div className="showcase-image">
                <div className="image-placeholder showcase-placeholder">
                  <span className="placeholder-icon">📌</span>
                  <p>Post an Ad</p>
                </div>
              </div>
              <p>📌 Post an Ad</p>
              <span className="showcase-tag">Listing Creation</span>
            </div>
            
            <div className="showcase-item">
              <div className="showcase-image">
                <div className="image-placeholder showcase-placeholder">
                  <span className="placeholder-icon">👤</span>
                  <p>User Profile</p>
                </div>
              </div>
              <p>👤 User Profile</p>
              <span className="showcase-tag">Account Management</span>
            </div>
          </div>
          
          <div className="view-figma-btn-container">
            <a 
              href="https://www.figma.com/design/jvmMKSiiHMgMIMO5LQvDQB/Craigslist?node-id=2-9&t=wbl5nwvmxDClsH5i-1" 
              className="view-figma-btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              🎨 View Complete UI Design on Figma
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </section>

        {/* ========== OUTCOME SECTION ========== */}
        <section className="case-section outcome-section">
          <div className="section-header">
            <span className="section-number">09</span>
            <h2>Outcome</h2>
          </div>
          
          <div className="outcome-content">
            <p>
              This redesign demonstrates how <strong>small structural changes can make a large difference in usability</strong>.
            </p>
            <p>
              Rather than changing what Craigslist does, the redesign improves how users understand 
              and navigate the platform.
            </p>
            <div className="outcome-quote">
              <p>✨ The result is a more intuitive experience that feels clearer, calmer, and easier to use.</p>
            </div>
          </div>
        </section>

        {/* ========== REFLECTION SECTION ========== */}
        <section className="case-section reflection-section">
          <div className="section-header">
            <span className="section-number">10</span>
            <h2>Reflection</h2>
          </div>
          
          <div className="reflection-content">
            <p>
              Working on this redesign reinforced an important UX principle that every designer 
              should internalize:
            </p>
            
            <blockquote>
              "Useful products can still feel difficult if information hierarchy is weak."
            </blockquote>
            
            <p>
              Craigslist already provides valuable functionality that millions of users rely on 
              every day. The platform has proven its utility over decades of service. However, 
              the interface places too much responsibility on the user to figure things out.
            </p>
            
            <p>
              This project focused on reducing that friction by improving clarity, structure, and 
              first-time usability. The key takeaway is that <strong>usability isn't about adding 
              features—it's about removing barriers</strong> between users and their goals.
            </p>
            
            <div className="reflection-lessons">
              <h4>Key Learnings:</h4>
              <ul>
                <li>Information hierarchy is critical for first-time user success</li>
                <li>Visual clutter directly impacts cognitive load and decision fatigue</li>
                <li>Small spacing and typography changes can dramatically improve scannability</li>
                <li>Separating primary, secondary, and tertiary actions reduces confusion</li>
                <li>Even useful products need thoughtful UX to reach their full potential</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ========== FIGMA PROTOTYPE SECTION ========== */}
        <section className="case-section figma-section">
          <div className="section-header">
            <span className="section-number">11</span>
            <h2>Figma Prototype</h2>
          </div>
          <p className="section-intro">
            View the complete interactive prototype to explore the full design system and user flows.
          </p>

          <div className="figma-container">
            <div className="figma-embed">
              <div className="figma-placeholder">
                <span className="figma-icon">🎨</span>
                <p>Craigslist Redesign - Complete UI Kit</p>
                <p className="figma-subtitle">Interactive prototype with all screens and user flows</p>
              </div>
              <div className="figma-overlay">
                <a 
                  href="https://www.figma.com/design/jvmMKSiiHMgMIMO5LQvDQB/Craigslist?node-id=2-9&t=wbl5nwvmxDClsH5i-1" 
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

        {/* ========== NEXT PROJECT NAVIGATION ========== */}
        <div className="case-study-nav">
          <button onClick={() => navigate("/projects")} className="nav-btn nav-prev">
            ← All Projects
          </button>
          <button onClick={() => navigate("/case-study/project2")} className="nav-btn nav-next">
            Next Project →
          </button>
        </div>
      </div>
    </main>
  );
}

export default CraigslistCaseStudy;