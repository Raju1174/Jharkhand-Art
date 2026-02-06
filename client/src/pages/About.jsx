import { Award, Target, Eye, Users, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './About.css';

const values = [
  {
    icon: <Award size={32} />,
    title: 'Quality Excellence',
    description: 'We never compromise on the quality of materials and craftsmanship.',
  },
  {
    icon: <Users size={32} />,
    title: 'Customer Focus',
    description: 'Your vision is our priority. We work closely to bring your ideas to life.',
  },
  {
    icon: <Target size={32} />,
    title: 'Precision',
    description: 'Every detail matters. Our artisans ensure perfection in every piece.',
  },
];

const milestones = [
  { year: '2009', event: 'Company founded in Ranchi, Jharkhand' },
  { year: '2012', event: 'Expanded product line to include 3D wall panels' },
  { year: '2015', event: 'Reached 200+ successful project completions' },
  { year: '2018', event: 'Started serving clients across Eastern India' },
  { year: '2022', event: 'Introduced custom design services' },
  { year: '2024', event: '500+ projects and counting' },
];

const About = () => {
  return (
    <main className="about-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>About Us</h1>
          <p>Discover the story behind our passion for architectural elegance</p>
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
              <h2>A Legacy of Craftsmanship</h2>
              <p>
                Founded in 2009, Jharkhand Art By Ishita Enterprises began with a simple vision:
                to bring the timeless beauty of traditional gypsum artistry to modern homes and
                commercial spaces. What started as a small workshop in Ranchi has grown into one
                of Eastern India's most trusted names in architectural decorative elements.
              </p>
              <p>
                Our founder, inspired by the rich architectural heritage of India, combined
                traditional techniques with modern manufacturing processes to create products
                that are both beautiful and durable. Today, we continue this legacy with the
                same dedication to quality and craftsmanship.
              </p>
              <ul className="story-highlights">
                <li><CheckCircle size={20} /> Family-owned business with personal attention</li>
                <li><CheckCircle size={20} /> Master craftsmen with decades of experience</li>
                <li><CheckCircle size={20} /> Serving homeowners, architects, and contractors</li>
              </ul>
            </div>
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
                To bring elegance and unique design to every home and commercial space through
                our premium gypsum decorative products, while maintaining the highest standards
                of quality and customer satisfaction.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">
                <Eye size={40} />
              </div>
              <h3>Our Vision</h3>
              <p>
                To become India's leading manufacturer of architectural gypsum products,
                recognized for innovation, quality, and our contribution to beautiful
                interior spaces across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section values-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
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

      {/* Timeline */}
      <section className="section timeline-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Journey</h2>
            <p>Key milestones in our growth story</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <p>{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section-page">
        <div className="container">
          <div className="cta-box">
            <h2>Ready to Work With Us?</h2>
            <p>Let's create something beautiful together.</p>
            <Link to="/contact" className="btn btn-primary">
              Contact Us Today
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
