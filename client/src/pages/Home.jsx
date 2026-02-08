import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Paintbrush, CheckCircle, Star, Quote, Phone, Sparkles, Shield, Truck } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import './Home.css';

const featuredProducts = [
  {
    id: 1,
    title: 'Royal Ceiling Medallion Mould',
    category: 'Ceiling Moulds',
    description: 'Elegant floral pattern mould for creating luxurious ceiling centerpieces.',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Classic Cornice Mould',
    category: 'Cornice Moulds',
    description: 'Timeless crown molding mould for sophisticated room borders.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Modern 3D Wall Panel Mould',
    category: 'Wall Panel Moulds',
    description: 'Contemporary geometric pattern mould for stunning accent walls.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Victorian Rose Mould',
    category: 'Ceiling Moulds',
    description: 'Ornate Victorian-inspired mould for grand chandelier centerpieces.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const features = [
  {
    icon: <Award size={32} />,
    title: 'Premium Quality',
    description: 'Precision-crafted moulds that deliver perfect results every time.',
    color: 'gold',
  },
  {
    icon: <Paintbrush size={32} />,
    title: 'Custom Designs',
    description: 'Bespoke mould designs tailored to your unique project requirements.',
    color: 'green',
  },
  {
    icon: <Users size={32} />,
    title: 'Expert Craftsmen',
    description: 'Our skilled artisans create moulds with exceptional detailing.',
    color: 'gold',
  },
];

const whyChooseUs = [
  { icon: <Sparkles size={24} />, text: '100+ Unique Designs' },
  { icon: <Shield size={24} />, text: 'Quality Guaranteed' },
  { icon: <Truck size={24} />, text: 'Pan-India Delivery' },
  { icon: <Phone size={24} />, text: '24/7 Support' },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Interior Designer, Delhi',
    text: 'The quality of moulds from Jharkhand Art is exceptional. My clients are always impressed with the results.',
    rating: 5,
  },
  {
    name: 'Amit Sharma',
    role: 'Contractor, Mumbai',
    text: 'Reliable delivery and excellent customer service. The moulds are durable and easy to work with.',
    rating: 5,
  },
  {
    name: 'Priya Singh',
    role: 'Architect, Bangalore',
    text: 'Their custom mould designs are perfect for unique architectural projects. Highly recommended!',
    rating: 5,
  },
];

const Home = () => {
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

    document.querySelectorAll('.scroll-animate').forEach((el) => {
      observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <main className="home">
      <Hero />

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="features-wrapper">
            {features.map((feature, index) => (
              <div className={`feature-card scroll-animate feature-${feature.color}`} key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Banner */}
      <section className="why-banner">
        <div className="container">
          <div className="why-grid">
            {whyChooseUs.map((item, index) => (
              <div className="why-item" key={index}>
                <span className="why-icon">{item.icon}</span>
                <span className="why-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="products-section">
        <div className="container">
          <div className="section-header scroll-animate">
            <span className="section-tag">Our Collection</span>
            <h2>Featured Moulds</h2>
            <p>Discover our most popular decorative mould designs</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div className="scroll-animate" key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="section-cta scroll-animate">
            <Link to="/products" className="btn-view-all">
              <span>View All Moulds</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Snippet Section */}
      <section className="about-snippet">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-wrapper scroll-animate">
              <div className="about-image">
                <img
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Mould Manufacturing"
                />
                <div className="image-decoration"></div>
              </div>
              <div className="experience-badge">
                <div className="badge-content">
                  <span className="badge-text">Starting</span>
                  <span className="badge-year">2026</span>
                </div>
              </div>
            </div>
            <div className="about-content scroll-animate">
              <span className="section-tag">About Us</span>
              <h2>Premium Decorative Moulds Since 2026</h2>
              <p>
                At Jharkhand Art By Ishita Enterprises, we specialize in manufacturing and supplying
                premium decorative moulds for ceiling medallions, cornices, 3D wall panels, and
                architectural elements. Our moulds help contractors create stunning interiors.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <CheckCircle size={20} />
                  <span>Precision-crafted decorative moulds</span>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} />
                  <span>Durable and reusable designs</span>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} />
                  <span>Custom mould manufacturing</span>
                </div>
                <div className="about-feature">
                  <CheckCircle size={20} />
                  <span>Pan-India delivery</span>
                </div>
              </div>
              <Link to="/about" className="btn-learn-more">
                Learn More About Us
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header scroll-animate">
            <span className="section-tag">Testimonials</span>
            <h2>What Our Clients Say</h2>
            <p>Trusted by contractors and designers across India</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card scroll-animate" key={index} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="testimonial-quote">
                  <Quote size={32} />
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-bg">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>
        <div className="container">
          <div className="cta-content scroll-animate">
            <h2>Ready to Transform Your Space?</h2>
            <p>Contact us today for a free consultation and quote.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn-cta-primary">
                Get a Free Quote
                <ArrowRight size={20} />
              </Link>
              <a href="tel:+917857846272" className="btn-cta-secondary">
                <Phone size={20} />
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
