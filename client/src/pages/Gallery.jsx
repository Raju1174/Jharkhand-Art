import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Classic Ceiling Medallion',
    category: 'Mould Design',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Floral Pattern Mold',
    category: 'Mould Design',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Victorian Cornice Mold',
    category: 'Mould Design',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Custom Living Room Design',
    category: 'Gypsum Design',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Luxury Ceiling Installation',
    category: 'Gypsum Design',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Geometric Wall Panel Mold',
    category: 'Mould Design',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Bespoke Bedroom Ceiling',
    category: 'Gypsum Design',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Ornate Rose Mold',
    category: 'Mould Design',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Modern Hall Design',
    category: 'Gypsum Design',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: '3D Panel Mold',
    category: 'Mould Design',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Executive Office Ceiling',
    category: 'Gypsum Design',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Traditional Cornice Mold',
    category: 'Mould Design',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category.toLowerCase() === filter);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <main className="gallery-page">
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Gallery</h1>
          <p>Explore our Mould and Gypsum Design</p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section">
        <div className="container">
          {/* Filter */}
          <div className="gallery-filter">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Design
            </button>
            <button
              className={`filter-btn ${filter === 'mould product' ? 'active' : ''}`}
              onClick={() => setFilter('mould product')}
            >
              Mould Design
            </button>
            <button
              className={`filter-btn ${filter === 'gypsum product' ? 'active' : ''}`}
              onClick={() => setFilter('gypsum product')}
            >
              Gypsum Design
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map(image => (
              <div
                key={image.id}
                className="gallery-item"
                onClick={() => openLightbox(image)}
              >
                <img src={image.src} alt={image.title} />
                <div className="gallery-item-overlay">
                  <h4>{image.title}</h4>
                  <span>{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
          >
            <ChevronLeft size={40} />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="lightbox-caption">
              <h3>{selectedImage.title}</h3>
              <span>{selectedImage.category}</span>
            </div>
          </div>
          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </main>
  );
};

export default Gallery;
