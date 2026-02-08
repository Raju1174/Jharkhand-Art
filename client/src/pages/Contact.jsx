import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const observerRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      inquiryType: '',
      message: '',
    });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
    <main className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <span className="hero-tag">Get In Touch</span>
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Reach out for inquiries, quotes, or custom mould designs.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info scroll-animate">
              <div className="info-header">
                <span className="section-tag">Reach Out</span>
                <h2>Let's Start a Conversation</h2>
                <p>
                  Whether you're interested in our premium moulds, need a custom design,
                  or have any questions about our products, our team is ready to help.
                </p>
              </div>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <a href="tel:+917857846272">+91 7857846272</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="mailto:jharkhandart07@gmail.com">jharkhandart07@gmail.com</a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>Address</h4>
                    <span>Bakaspura, Jainamore, Bokaro, Jharkhand - 829301</span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <Clock size={24} />
                  </div>
                  <div className="contact-text">
                    <h4>Business Hours</h4>
                    <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="map-container scroll-animate">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.8!2d86.0547!3d23.7571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f69b0c0e0e0e0e%3A0x0!2sBakaspura%2C%20Jainamore%2C%20Bokaro%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper scroll-animate">
              <div className="form-header">
                <div className="form-icon">
                  <MessageSquare size={32} />
                </div>
                <h2>Send Us a Message</h2>
                <p>Fill out the form and we'll get back to you within 24 hours.</p>
              </div>

              {isSubmitted && (
                <div className="success-message">
                  <CheckCircle size={24} />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="inquiryType">Inquiry Type *</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select inquiry type</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="custom-design">Custom Mould Design</option>
                    <option value="price-quote">Price Quote</option>
                    <option value="bulk-order">Bulk Order</option>
                    <option value="partnership">Partnership/Dealership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="btn-loading">
                      <span className="spinner"></span>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="quick-contact-section">
        <div className="cta-bg-shapes">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>
        <div className="container">
          <div className="quick-contact-content scroll-animate">
            <h2>Need Immediate Assistance?</h2>
            <p>Call us directly for quick inquiries about our moulds or custom design requirements.</p>
            <a href="tel:+917857846272" className="btn-call">
              <Phone size={24} />
              <span>+91 7857846272</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
