import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import './Products.css';

const categories = [
  { id: 'all', name: 'All Moulds' },
  { id: 'medallions', name: 'Ceiling Moulds' },
  { id: 'cornices', name: 'Cornice Moulds' },
  { id: 'panels', name: 'Wall Panel Moulds' },
  { id: 'custom', name: 'Custom Moulds' },
];

const products = [
  {
    id: 1,
    title: 'Royal Floral Medallion Mould',
    category: 'medallions',
    categoryLabel: 'Ceiling Moulds',
    description: 'Elegant floral pattern mould for creating chandelier centerpieces.',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Victorian Rose Mould',
    category: 'medallions',
    categoryLabel: 'Ceiling Moulds',
    description: 'Ornate Victorian-inspired mould for grand ceiling fixtures.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Baroque Medallion Mould',
    category: 'medallions',
    categoryLabel: 'Ceiling Moulds',
    description: 'Classic baroque style mould with detailed scroll patterns.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Classic Crown Cornice Mould',
    category: 'cornices',
    categoryLabel: 'Cornice Moulds',
    description: 'Timeless crown molding mould for sophisticated room borders.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Egg and Dart Cornice Mould',
    category: 'cornices',
    categoryLabel: 'Cornice Moulds',
    description: 'Traditional egg and dart pattern mould for classic interiors.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Dentil Crown Mould',
    category: 'cornices',
    categoryLabel: 'Cornice Moulds',
    description: 'Elegant dentil pattern mould for refined architectural details.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Geometric Wave Panel Mould',
    category: 'panels',
    categoryLabel: 'Wall Panel Moulds',
    description: 'Modern wave pattern mould for stunning accent walls.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Diamond 3D Panel Mould',
    category: 'panels',
    categoryLabel: 'Wall Panel Moulds',
    description: 'Bold diamond pattern mould creating dramatic visual effects.',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    title: 'Hexagonal Wall Panel Mould',
    category: 'panels',
    categoryLabel: 'Wall Panel Moulds',
    description: 'Contemporary hexagonal mould design for modern spaces.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    title: 'Custom Ceiling Mould',
    category: 'custom',
    categoryLabel: 'Custom Moulds',
    description: 'Custom-made ceiling moulds tailored to your specifications.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 11,
    title: 'Custom Wall Art Mould',
    category: 'custom',
    categoryLabel: 'Custom Moulds',
    description: 'Personalized wall art moulds for unique spaces.',
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12,
    title: 'Architectural Element Mould',
    category: 'custom',
    categoryLabel: 'Custom Moulds',
    description: 'Custom architectural moulds for special projects.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const observerRef = useRef(null);

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

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
  }, [filteredProducts]);

  return (
    <main className="products-page">
      {/* Page Header */}
      <section className="page-hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <span className="hero-tag">Our Collection</span>
            <h1>Premium Moulds</h1>
            <p>Explore our exquisite collection of decorative moulds for stunning interiors</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-main-section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter scroll-animate">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="products-grid-page">
            {filteredProducts.map((product, index) => (
              <div
                className="scroll-animate"
                key={product.id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProductCard
                  product={{
                    ...product,
                    category: product.categoryLabel,
                  }}
                />
              </div>
            ))}
          </div>

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No moulds found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Design CTA */}
      <section className="custom-design-section">
        <div className="cta-bg-shapes">
          <div className="cta-shape cta-shape-1"></div>
          <div className="cta-shape cta-shape-2"></div>
        </div>
        <div className="container">
          <div className="custom-design-content scroll-animate">
            <span className="section-tag">Custom Orders</span>
            <h2>Need a Custom Mould?</h2>
            <p>
              Can't find exactly what you're looking for? We specialize in creating
              custom moulds tailored to your specific project requirements. Share your
              design with us, and our craftsmen will create the perfect mould.
            </p>
            <Link to="/contact" className="btn-custom">
              Request Custom Mould
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
