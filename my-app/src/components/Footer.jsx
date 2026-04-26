import "./Footer.css";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2026 Ekram's Portfolio. All rights reserved.</p>

      <div className="socials">
        <a
          href="https://www.linkedin.com/in/ekram-jemalh-446978317"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>

        <a
          href="https://x.com/ekjemal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;