import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-gradient"></div>
        <div className="floating-elements">
          <div className="float-shape shape-1"></div>
          <div className="float-shape shape-2"></div>
          <div className="float-shape shape-3"></div>
          <div className="float-shape shape-4"></div>
          <div className="float-shape shape-5"></div>
        </div>
        <div className="grid-pattern"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-tag animate-pop">
            <span className="tag-dot"></span>
            Premium Quality Moulds
          </div>

          <h1 className="hero-title">
            <span className="title-line animate-slide-right">Transform Spaces with</span>
            <span className="title-line title-highlight animate-slide-right delay-1">
              Decorative Moulds
            </span>
          </h1>

          <p className="hero-description animate-fade delay-2">
            Premium moulds for ceiling medallions, cornices, and 3D wall panels.
            Create stunning interiors with our precision-crafted designs.
          </p>

          <div className="hero-cta animate-fade delay-3">
            <Link to="/products" className="btn-hero-primary">
              <span>Explore Collection</span>
              <ArrowRight size={20} />
            </Link>
            <Link to="/contact" className="btn-hero-secondary">
              <div className="play-icon">
                <Play size={16} fill="currentColor" />
              </div>
              <span>Get Free Quote</span>
            </Link>
          </div>

          <div className="hero-trust animate-fade delay-4">
            <div className="trust-item">
              <span className="trust-number">100+</span>
              <span className="trust-label">Designs</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-number">Pan India</span>
              <span className="trust-label">Delivery</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-number">Custom</span>
              <span className="trust-label">Orders</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-wrapper animate-scale">
            <div className="visual-ring ring-outer"></div>
            <div className="visual-ring ring-inner"></div>
            <div className="visual-image">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Decorative Mould Design"
              />
            </div>
            <div className="visual-badge badge-top">
              <span className="badge-icon">✨</span>
              <span>Premium</span>
            </div>
            <div className="visual-badge badge-bottom">
              <span className="badge-icon">🏆</span>
              <span>Quality</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <div className="scroll-line"></div>
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
