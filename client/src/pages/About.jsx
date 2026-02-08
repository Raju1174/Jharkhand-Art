import { useEffect, useRef } from 'react';
import { Award, Target, Eye, Hammer, Palette, Truck, CheckCircle, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    icon: <Award size={36} />,
    title: 'Premium Quality',
    description: 'Our moulds are crafted with precision to ensure perfect detailing and long-lasting durability.',
  },
  {
    icon: <Palette size={36} />,
    title: 'Unique Designs',
    description: 'Wide variety of traditional and modern patterns for ceilings, walls, and architectural elements.',
  },
  {
    icon: <Hammer size={36} />,
    title: 'Custom Moulds',
    description: 'We create custom mould designs tailored to your specific project requirements.',
  },
  {
    icon: <Truck size={36} />,
    title: 'Pan-India Delivery',
    description: 'We deliver our moulds across Jharkhand, Eastern India, and nationwide.',
  },
];

const services = [
  'Ceiling Medallion & Rose Moulds',
  'Cornice & Border Moulds',
  'Wall Panel & Relief Design Moulds',
  '3D Textured Panel Moulds',
  'Pillar & Column Moulds',
  'Outdoor Planter Moulds',
  'Custom Mould Design & Manufacturing',
];

const stats = [
  { number: '100+', label: 'Mould Designs' },
  { number: '50+', label: 'Happy Clients' },
  { number: '10+', label: 'States Covered' },
  { number: '24/7', label: 'Support' },
];

const process = [
  {
    step: '01',
    title: 'Choose Design',
    description: 'Browse our catalog or share your custom design requirements.',
    icon: <Sparkles size={28} />,
  },
  {
    step: '02',
    title: 'Get Quote',
    description: 'Receive competitive pricing and delivery timeline.',
    icon: <Shield size={28} />,
  },
  {
    step: '03',
    title: 'We Manufacture',
    description: 'Our craftsmen create your moulds with precision.',
    icon: <Hammer size={28} />,
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Fast and secure delivery to your location.',
    icon: <Zap size={28} />,
  },
];

const About = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="about-page">
      {/* Animated Hero Section */}
      <section className="about-hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge animate-fade-in">Since 2026</span>
            <h1 className="animate-slide-up">Premium Decorative<br /><span className="highlight">Mould Manufacturer</span></h1>
            <p className="animate-slide-up delay-1">
              Crafting precision moulds that help contractors and builders create stunning interior designs across India.
            </p>
            <div className="hero-cta animate-slide-up delay-2">
              <Link to="/products" className="btn btn-primary">
                Explore Moulds <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div className="stat-card animate-on-scroll" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-wrapper">
            <div className="story-image-container animate-on-scroll">
              <div className="image-frame">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Mould Manufacturing"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="floating-card">
                <Sparkles size={24} />
                <span>Quality Guaranteed</span>
              </div>
            </div>
            <div className="story-content animate-on-scroll">
              <span className="section-tag">Our Story</span>
              <h2>Premium Decorative Moulds for Every Project</h2>
              <p>
                <strong>Jharkhand Art By Ishita Enterprises</strong> is a trusted manufacturer and supplier
                of premium decorative moulds for creating stunning ceiling designs, wall panels, cornices,
                and architectural ornaments.
              </p>
              <p>
                Our moulds are precision-crafted tools used by contractors, builders, and artisans to create
                beautiful gypsum and POP designs at construction sites. Simply pour cement or gypsum into our
                moulds to create elegant decorative elements for any interior or exterior space.
              </p>
              <div className="story-features">
                <div className="feature">
                  <CheckCircle size={20} />
                  <span>Precision-Crafted Designs</span>
                </div>
                <div className="feature">
                  <CheckCircle size={20} />
                  <span>Durable & Reusable</span>
                </div>
                <div className="feature">
                  <CheckCircle size={20} />
                  <span>Custom Manufacturing</span>
                </div>
                <div className="feature">
                  <CheckCircle size={20} />
                  <span>Pan-India Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">What We Offer</span>
            <h2>Our Mould Collection</h2>
            <p>Wide range of decorative moulds for all your interior design needs</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card animate-on-scroll" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-icon">
                  <CheckCircle size={24} />
                </div>
                <span>{service}</span>
                <div className="service-hover-bg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">How It Works</span>
            <h2>Simple Process</h2>
            <p>Get your custom moulds in 4 easy steps</p>
          </div>
          <div className="process-grid">
            {process.map((item, index) => (
              <div className="process-card animate-on-scroll" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="process-step">{item.step}</div>
                <div className="process-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                {index < process.length - 1 && <div className="process-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card animate-on-scroll">
              <div className="mission-icon-wrapper">
                <Target size={40} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide contractors and builders with premium quality decorative moulds that
                enable them to create stunning interior designs efficiently and affordably.
              </p>
            </div>
            <div className="mission-card animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="mission-icon-wrapper">
                <Eye size={40} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the leading decorative mould manufacturer in Eastern India, recognized
                for our innovative designs, superior quality, and reliable service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Why Choose Us</span>
            <h2>What Sets Us Apart</h2>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card animate-on-scroll" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
                <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section-page">
        <div className="cta-bg-animation">
          <div className="cta-circle cta-circle-1"></div>
          <div className="cta-circle cta-circle-2"></div>
        </div>
        <div className="container">
          <div className="cta-content animate-on-scroll">
            <h2>Ready to Transform Your Space?</h2>
            <p>Contact us for quotations, product details, or custom orders.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-glow">
                Get a Quote <ArrowRight size={20} />
              </Link>
              <a href="tel:+917857846272" className="btn btn-outline-light">
                Call: +91 7857846272
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
