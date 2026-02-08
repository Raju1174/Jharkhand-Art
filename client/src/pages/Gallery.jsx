import { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Classic Ceiling Medallion Mould',
    category: 'Ceiling Moulds',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Floral Pattern Mould',
    category: 'Ceiling Moulds',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Victorian Cornice Mould',
    category: 'Cornice Moulds',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Designer Border Mould',
    category: 'Cornice Moulds',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Luxury Rose Mould',
    category: 'Ceiling Moulds',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Geometric Wall Panel Mould',
    category: 'Wall Panel Moulds',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: '3D Textured Mould',
    category: 'Wall Panel Moulds',
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Ornate Rose Mould',
    category: 'Ceiling Moulds',
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Modern Pattern Mould',
    category: 'Wall Panel Moulds',
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: '3D Diamond Panel Mould',
    category: 'Wall Panel Moulds',
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Classic Crown Mould',
    category: 'Cornice Moulds',
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    title: 'Traditional Cornice Mould',
    category: 'Cornice Moulds',
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const observerRef = useRef(null);

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
  }, [filteredImages]);

  return (
    <main className="gallery-page">
      {/* Page Header */}
      <section className="page-hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="container">
          <div className="page-hero-content">
            <span className="hero-tag">Portfolio</span>
            <h1>Our Gallery</h1>
            <p>Explore our collection of decorative moulds</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          {/* Filter */}
          <div className="gallery-filter scroll-animate">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Moulds
            </button>
            <button
              className={`filter-btn ${filter === 'ceiling moulds' ? 'active' : ''}`}
              onClick={() => setFilter('ceiling moulds')}
            >
              Ceiling Moulds
            </button>
            <button
              className={`filter-btn ${filter === 'cornice moulds' ? 'active' : ''}`}
              onClick={() => setFilter('cornice moulds')}
            >
              Cornice Moulds
            </button>
            <button
              className={`filter-btn ${filter === 'wall panel moulds' ? 'active' : ''}`}
              onClick={() => setFilter('wall panel moulds')}
            >
              Wall Panel Moulds
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="gallery-item scroll-animate"
                onClick={() => openLightbox(image)}
                style={{ animationDelay: `${index * 0.1}s` }}
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
