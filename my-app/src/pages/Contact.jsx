import "./Contact.css";


function Contact() {
  // WhatsApp link with your number
  const whatsappNumber = "251912034013";
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

            {/* WhatsApp */}
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
        </div>
      </div>
    </section>
  );
}

export default Contact;