import React from 'react';
import './Gallery.css';
import hero from '../assets/hero.png';
import wedding from '../assets/wedding.png';
import gallery1 from '../assets/gallery-1.png';
import corporate from '../assets/corporate.png';
import gallery2 from '../assets/gallery-2.png';

const Gallery = () => {
  const images = [
    { src: hero, alt: 'Grand Ballroom', span: 'large' },
    { src: wedding, alt: 'Wedding Setup', span: 'tall' },
    { src: gallery1, alt: 'Buffet Area', span: 'wide' },
    { src: corporate, alt: 'Corporate Event', span: 'small' },
    { src: gallery2, alt: 'Hall Seating', span: 'small' },
    { src: hero, alt: 'Luxury Theme Stage', span: 'wide' },
  ];

  return (
    <section className="gallery-section section-padding" id="gallery">
      <div className="container">
        <h2 className="section-title">A Glimpse of Grandeur</h2>
        <p className="section-subtitle">
          Immerse yourself in the breathtaking aesthetics of our venues, where every corner tells a story of elegance.
        </p>
        
        <div className="gallery-grid">
          {images.map((img, index) => (
            <div key={index} className={`gallery-item ${img.span}`}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
