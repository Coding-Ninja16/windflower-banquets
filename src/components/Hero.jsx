import React from 'react';
import './Hero.css';
import heroImage from '../assets/hero.png';

const Hero = () => {


  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src={heroImage} 
          alt="Windflower Banquets Luxury Hall" 
          className="hero-bg-image fade-in"
        />
        <div className="hero-gradient-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-badge">Welcome to Luxury</div>
        <h1 className="hero-title">Windflower Banquets & Conventions</h1>
        <p className="hero-description">
          Experience grandeur at Vashi, Navi Mumbai's most prestigious venue. 
          Perfect for majestic weddings, corporate galas, and unforgettable social events.
        </p>
        <div className="hero-cta-wrapper">
          <button className="btn-primary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Request a Quote
          </button>
        </div>
      </div>


    </section>
  );
};

export default Hero;
