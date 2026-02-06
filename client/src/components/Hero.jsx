import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-badge">Premium Gypsum Art</div>
        <h1>Elevate Your Interiors with Exquisite Gypsum Art</h1>
        <p>
          Specializing in premium ceiling medallions, cornices, and bespoke 3D wall panels.
          Transform your spaces with architectural elegance crafted by master artisans.
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="btn btn-primary">
            View Our Catalogue
            <ArrowRight size={20} />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Get a Quote
          </Link>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">100+</span>
            <span className="stat-label">Unique Designs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
