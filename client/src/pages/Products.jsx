import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Products.css';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'medallions', name: 'Ceiling Medallions' },
  { id: 'cornices', name: 'Cornices' },
  { id: 'panels', name: '3D Wall Panels' },
  { id: 'custom', name: 'Custom Designs' },
];

const products = [
  {
    id: 1,
    title: 'Royal Floral Medallion',
    category: 'medallions',
    categoryLabel: 'Ceiling Medallions',
    description: 'Elegant floral pattern with intricate detailing, perfect for chandeliers.',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'Victorian Rose Center',
    category: 'medallions',
    categoryLabel: 'Ceiling Medallions',
    description: 'Ornate Victorian-inspired design for grand ceiling fixtures.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'Baroque Medallion',
    category: 'medallions',
    categoryLabel: 'Ceiling Medallions',
    description: 'Classic baroque style with detailed scroll patterns.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'Classic Crown Cornice',
    category: 'cornices',
    categoryLabel: 'Cornices',
    description: 'Timeless crown molding that adds sophistication to any room.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'Egg and Dart Cornice',
    category: 'cornices',
    categoryLabel: 'Cornices',
    description: 'Traditional egg and dart pattern for classic interiors.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 6,
    title: 'Dentil Crown Molding',
    category: 'cornices',
    categoryLabel: 'Cornices',
    description: 'Elegant dentil pattern for refined architectural details.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 7,
    title: 'Geometric Wave Panel',
    category: 'panels',
    categoryLabel: '3D Wall Panels',
    description: 'Modern wave pattern for stunning accent walls.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 8,
    title: 'Diamond 3D Panel',
    category: 'panels',
    categoryLabel: '3D Wall Panels',
    description: 'Bold diamond pattern creating dramatic visual effects.',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 9,
    title: 'Hexagonal Wall Panel',
    category: 'panels',
    categoryLabel: '3D Wall Panels',
    description: 'Contemporary hexagonal design for modern spaces.',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 10,
    title: 'Bespoke Ceiling Design',
    category: 'custom',
    categoryLabel: 'Custom Designs',
    description: 'Custom-made ceiling designs tailored to your specifications.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 11,
    title: 'Custom Wall Art',
    category: 'custom',
    categoryLabel: 'Custom Designs',
    description: 'Personalized wall art pieces for unique spaces.',
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 12,
    title: 'Architectural Elements',
    category: 'custom',
    categoryLabel: 'Custom Designs',
    description: 'Custom architectural details for special projects.',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <main className="products-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Products</h1>
          <p>Explore our exquisite collection of gypsum decorative elements</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
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
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={{
                  ...product,
                  category: product.categoryLabel,
                }}
              />
            ))}
          </div>

          {/* No Products Message */}
          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Custom Design CTA */}
      <section className="custom-design-section">
        <div className="container">
          <div className="custom-design-content">
            <h2>Need a Custom Design?</h2>
            <p>
              Can't find exactly what you're looking for? We specialize in creating
              bespoke designs tailored to your specific requirements. Share your vision
              with us, and our craftsmen will bring it to life.
            </p>
            <a href="/contact" className="btn btn-primary">
              Request Custom Design
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
