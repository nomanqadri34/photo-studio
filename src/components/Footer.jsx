import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">Photo Studio</h2>
          <p className="footer-description">Capturing moments, creating memories.</p>
        </div>
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>Email: contact@photostudio.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section social-icons">
          <h3>Follow Us</h3>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTwitter size={30} /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram size={30} /></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Photo Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
