import { Award, Target, Eye, Users, CheckCircle, ArrowRight, Hammer, Palette, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    icon: <Award size={32} />,
    title: 'Premium Quality',
    description: 'We use only high-grade gypsum and materials to ensure durability and elegant finishing.',
  },
  {
    icon: <Palette size={32} />,
    title: 'Skilled Craftsmanship',
    description: 'Our experienced artisans blend traditional artistry with modern techniques.',
  },
  {
    icon: <Hammer size={32} />,
    title: 'Custom Solutions',
    description: 'We create bespoke designs tailored to your specific architectural requirements.',
  },
  {
    icon: <Truck size={32} />,
    title: 'On-Time Delivery',
    description: 'We ensure timely delivery across Jharkhand and Eastern India.',
  },
];

const services = [
  'Decorative Ceiling Medallions & Roses',
  'Designer Cornices & Borders',
  'Ornamental Wall Panels & Relief Designs',
  '3D Textured Wall Panels',
  'Architectural Outdoor Elements',
  'Decorative Planters & Pillar Moulds',
  'Custom Design & Manufacturing',
];

const About = () => {
  return (
    <main className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Crafting Architectural Elegance Since 2026</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-images">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Our Workshop"
                className="story-img-main"
              />
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Craftsmanship"
                className="story-img-secondary"
              />
            </div>
            <div className="story-content">
              <span className="section-label">Our Story</span>
              <h2>Premium Gypsum Decor</h2>
              <p>
                <strong>Jharkhand Art By Ishita Enterprises</strong> is a trusted manufacturer and supplier
                of premium decorative gypsum products, specializing in ceiling medallions, cornices,
                ornamental mouldings, and architectural design elements.
              </p>
              <p>
                With a strong focus on craftsmanship, durability, and elegant detailing, we create
                high-quality POP and gypsum designs that enhance both residential and commercial interiors.
                Our products combine traditional artistry with modern manufacturing techniques, ensuring
                perfect finishing, long-lasting strength, and easy installation.
              </p>
              <p>
                Based in Bokaro, Jharkhand, we are committed to delivering customized decorative solutions
                for homeowners, architects, interior designers, and builders across Eastern India and nationwide.
              </p>
              <ul className="story-highlights">
                <li><CheckCircle size={20} /> High-Grade Gypsum & POP Materials</li>
                <li><CheckCircle size={20} /> Skilled Artisans & Modern Techniques</li>
                <li><CheckCircle size={20} /> Serving Architects, Builders & Homeowners</li>
                <li><CheckCircle size={20} /> Custom Design Solutions Available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="section services-section">
        <div className="container">
          <div className="section-title">
            <h2>What We Offer</h2>
            <p>Comprehensive range of decorative gypsum castings and architectural ornaments</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-item" key={index}>
                <CheckCircle size={20} />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">
                <Target size={40} />
              </div>
              <h3>Our Mission</h3>
              <p>
                To bring elegance, quality, and unique design to every home and commercial space
                through our premium gypsum decorative products, while maintaining the highest
                standards of craftsmanship and customer satisfaction.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <Eye size={40} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become a leading decorative gypsum brand in Eastern India and across the nation,
                recognized for innovation, quality, and our contribution to beautiful architectural
                spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
            <p>What sets Jharkhand Art apart from the rest</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-icon">{value.icon}</div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="section expertise-section">
        <div className="container">
          <div className="expertise-content">
            <div className="section-title">
              <h2>Our Expertise</h2>
              <p>Understanding the difference between Moulds and Decorative Castings</p>
            </div>
            <div className="expertise-grid">
              <div className="expertise-card">
                <h4>Decorative Moulds</h4>
                <p>
                  These are the templates used at construction sites for making unique designs.
                  Cement or gypsum is poured into these moulds to create beautiful decorative elements.
                </p>
              </div>
              <div className="expertise-card">
                <h4>Decorative Castings</h4>
                <p>
                  The finished products made from moulds - ready-to-install ceiling medallions,
                  wall panels, cornices, and architectural ornaments for your interiors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section-page">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Transform Your Space?</h2>
            <p>Contact us for quotations, product details, or custom orders.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get a Quote
                <ArrowRight size={20} />
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
