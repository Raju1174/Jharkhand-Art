import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const productLinks = [
    { path: '/products', label: 'Ceiling Moulds' },
    { path: '/products', label: 'Cornice Moulds' },
    { path: '/products', label: 'Wall Panel Moulds' },
    { path: '/products', label: 'Custom Moulds' },
  ];

  return (
    <footer className="footer">
      {/* Decorative Top Border */}
      <div className="footer-top-border">
        <div className="border-line"></div>
        <div className="border-diamond"></div>
        <div className="border-line"></div>
      </div>

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
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
              Crafting premium decorative moulds for ceiling medallions, cornices,
              wall panels, and architectural designs. Transform any space with our
              quality moulds.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook" className="social-link">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Youtube" className="social-link">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4 className="footer-heading">
              <span className="heading-text">Quick Links</span>
              <span className="heading-line"></span>
            </h4>
            <ul className="footer-nav">
              {navLinks.map((link) => (
                <li key={link.path + link.label}>
                  <Link to={link.path} className="footer-link">
                    <ArrowRight size={14} className="link-arrow" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer-column">
            <h4 className="footer-heading">
              <span className="heading-text">Our Products</span>
              <span className="heading-line"></span>
            </h4>
            <ul className="footer-nav">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="footer-link">
                    <ArrowRight size={14} className="link-arrow" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-column footer-contact">
            <h4 className="footer-heading">
              <span className="heading-text">Get In Touch</span>
              <span className="heading-line"></span>
            </h4>
            <div className="footer-contact-items">
              <a href="tel:+917857846272" className="footer-contact-item">
                <Phone size={18} />
                <span>+91 7857846272</span>
              </a>
              <a href="mailto:jharkhandart07@gmail.com" className="footer-contact-item">
                <Mail size={18} />
                <span>jharkhandart07@gmail.com</span>
              </a>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span>Bakaspura, Jainamore, Bokaro, Jharkhand - 829301</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} <span>Jharkhand Art</span> By Ishita Enterprises. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link to="/contact">Privacy Policy</Link>
              <span className="divider">|</span>
              <Link to="/contact">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
