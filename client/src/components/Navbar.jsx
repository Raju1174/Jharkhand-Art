import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <div className="logo-mandala">
            <div className="mandala-icon">
              <div className="mandala-ring ring-1"></div>
              <div className="mandala-ring ring-2"></div>
              <div className="mandala-center">JA</div>
            </div>
            <div className="logo-text-wrapper">
              <span className="logo-main-text">Jharkhand Art</span>
              <span className="logo-sub-text">By Ishita Enterprises</span>
            </div>
          </div>
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navbar-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="tel:+917857846272" className="navbar-phone">
              <Phone size={18} />
              <span>+91 7857846272</span>
            </a>
          </div>
        </div>

        <button className="navbar-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
