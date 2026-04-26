import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This opens email client with pre-filled message
    const subject = `Portfolio Message from ${formData.name}`;
    const body = `Name: ${formData.name}%0A%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    window.location.href = `mailto:ekramjemalh@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // WhatsApp link with your number (0912034013 -> 251912034013)
  const whatsappNumber = "251912034013"; // 251 + 912034013
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  // Telegram link
  const telegramLink = "https://t.me/ekramJH";

  // Social Media Links
  const socialLinks = {
    github: "https://github.com/EkramJemalH",
    linkedin: "https://www.linkedin.com/in/ekram-jemalh-446978317",
    twitter: "https://x.com/ekjemal"
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        
        {/* Section Header */}
        <div className="contact-header">
          <span className="section-badge">Get In Touch</span>
          <h2>Let's Work Together</h2>
          <p>Have a project in mind? I'd love to hear about it!</p>
        </div>

        <div className="contact-content">
          
          {/* Left Column - Contact Info */}
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm currently available for freelance work and full-time opportunities. 
              Feel free to reach out through any of these channels.
            </p>

            {/* WhatsApp - Safe way without exposing number */}
            <div className="contact-method">
              <div className="contact-icon">💬</div>
              <div className="contact-details">
                <h4>WhatsApp Chat</h4>
                <p>Click to chat directly - no need to save my number</p>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Start WhatsApp Chat →
                </a>
              </div>
            </div>

            {/* Telegram */}
            <div className="contact-method">
              <div className="contact-icon">📱</div>
              <div className="contact-details">
                <h4>Telegram</h4>
                <p>Message me on Telegram for quick responses</p>
                <a 
                  href={telegramLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  @ekramJH →
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-method">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>Send me a message anytime</p>
                <a 
                  href="mailto:ekramjemalh@gmail.com"
                  className="contact-link"
                >
                  ekramjemalh@gmail.com →
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <span>🐙</span> GitHub
                </a>
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <span>🔗</span> LinkedIn
                </a>
                <a 
                  href={socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                >
                  <span>🐦</span> Twitter/X
                </a>
            
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-container">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Hi Ekram, I'd like to talk about..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message ✨
              </button>

              {isSubmitted && (
                <div className="success-message">
                  ✓ Opening your email client! Thank you for reaching out.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;