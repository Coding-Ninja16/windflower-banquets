import React, { useEffect, useRef } from 'react';
import './About.css';
import { Users, Grid, Utensils, CalendarCheck } from 'lucide-react';
import weddingImage from '../assets/wedding.png';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      // initially set opacity to 0
      sectionRef.current.style.opacity = '0';
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="about-section section-padding" id="about" ref={sectionRef}>
      <div className="container about-grid">
        <div className="about-content">
          <span className="about-badge">The Venue</span>
          <h2 className="about-title">Elegance Redefined in Navi Mumbai</h2>
          <p className="about-text">
            Situated in Vashi, Windflower Banquets & Conventions offers a spectacular, 
            pillarless indoor space designed to transform your dream events into reality. 
            From breathtaking chandeliers to premium amenities, every detail is crafted for perfection.
          </p>
          
          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon-wrapper"><Users size={24} /></div>
              <span className="feature-text">400 - 1500 Guests</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper"><Grid size={24} /></div>
              <span className="feature-text">Pillarless Hall</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper"><Utensils size={24} /></div>
              <span className="feature-text">Multi-Cuisine</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrapper"><CalendarCheck size={24} /></div>
              <span className="feature-text">Events & Decor</span>
            </div>
          </div>
        </div>

        <div className="about-image-wrapper">
          <img src={weddingImage} alt="Exquisite Wedding Setup at Windflower" className="about-image" />
          <div className="about-experience-badge">
            <span className="exp-number">10k+</span>
            <span className="exp-text">Smiles Delivered</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
