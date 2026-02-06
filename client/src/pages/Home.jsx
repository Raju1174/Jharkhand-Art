import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Paintbrush, CheckCircle } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import './Home.css';

const featuredProducts = [
  {
    id: 1,
    title: 'Royal Ceiling Medallion',
    category: 'Ceiling Roses',
    description: 'Elegant floral pattern with intricate detailing for luxurious interiors.',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Classic Cornice Design',
    category: 'Cornices',
    description: 'Timeless crown molding that adds sophistication to any room.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Modern 3D Wall Panel',
    category: 'Wall Panels',
    description: 'Contemporary geometric patterns for stunning accent walls.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Victorian Rose Center',
    category: 'Ceiling Roses',
    description: 'Ornate Victorian-inspired design for grand chandeliers.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const features = [
  {
    icon: <Award size={40} />,
    title: 'Premium Quality',
    description: 'We use only the finest gypsum materials to ensure durability and elegance.',
  },
  {
    icon: <Paintbrush size={40} />,
    title: 'Custom Designs',
    description: 'Bespoke solutions tailored to match your unique architectural vision.',
  },
  {
    icon: <Users size={40} />,
    title: 'Expert Craftsmen',
    description: 'Our skilled artisans bring years of experience to every project.',
  },
];

const Home = () => {
  return (
    <main className="home">
      <Hero />

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section products-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Featured Products</h2>
            <p>Discover our exquisite collection of gypsum decorative elements designed to transform your spaces.</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/products" className="btn btn-secondary">
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="section about-snippet">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Interior Design"
              />
              <div className="experience-badge">
                <span className="years">15+</span>
                <span className="text">Years of Excellence</span>
              </div>
            </div>
            <div className="about-content">
              <span className="about-label">About Us</span>
              <h2>Crafting Architectural Elegance Since 2009</h2>
              <p>
                At Jharkhand Art By Ishita Enterprises, we specialize in manufacturing and supplying
                high-quality gypsum (POP) ceiling medallions, cornices, 3D wall panels, and other
                architectural decorative elements. Our commitment to quality and craftsmanship has
                made us a trusted name across Eastern India.
              </p>
              <ul className="about-list">
                <li><CheckCircle size={20} /> Premium quality gypsum materials</li>
                <li><CheckCircle size={20} /> Traditional craftsmanship with modern techniques</li>
                <li><CheckCircle size={20} /> Custom designs for unique spaces</li>
                <li><CheckCircle size={20} /> Timely delivery and professional service</li>
              </ul>
              <Link to="/about" className="btn btn-primary">
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Space?</h2>
            <p>Contact us today for a free consultation and quote.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get a Free Quote
              </Link>
              <a href="tel:+917857846272" className="btn btn-outline">
                Call: +91 7857846272
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
