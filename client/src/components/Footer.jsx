import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-mandala">
                <div className="footer-mandala-icon">
                  <div className="footer-ring ring-1"></div>
                  <div className="footer-ring ring-2"></div>
                  <div className="footer-mandala-center">JA</div>
                </div>
                <div className="footer-text-wrapper">
                  <span className="footer-main-text">Jharkhand Art</span>
                  <span className="footer-sub-text">By Ishita Enterprises</span>
                </div>
              </div>
            </Link>
            <p className="footer-description">
              Crafting exquisite gypsum ceiling medallions, cornices, and 3D wall panels
              to elevate your interiors with timeless elegance.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products">Ceiling Medallions</Link></li>
              <li><Link to="/products">Cornices</Link></li>
              <li><Link to="/products">3D Wall Panels</Link></li>
              <li><Link to="/products">Custom Designs</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <Phone size={18} />
                <a href="tel:+917857846272">+91 7857846272</a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:jharkhandart07@gmail.com">jharkhandart07@gmail.com</a>
              </li>
              <li>
                <MapPin size={18} />
                <span>Bakaspura, Jainamore, Bokaro, Jharkhand</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Jharkhand Art By Ishita Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
