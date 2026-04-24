import React from 'react';
import './Footer.css';
import { MapPin, Phone, Mail, Camera, Globe, Briefcase } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="nav-logo">
            <span className="logo-text">WINDFLOWER</span>
            <span className="logo-subtext">BANQUETS & CONVENTIONS</span>
          </div>
          <p className="footer-about">
            Navi Mumbai's premier destination for luxury events, weddings, and corporate gatherings. 
            Where elegance meets excellence in every detail.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Instagram"><Camera size={20} /></a>
            <a href="#" aria-label="Facebook"><Globe size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Briefcase size={20} /></a>
          </div>
        </div>

        <div className="footer-contact">
          <h4 className="footer-title">Contact Us</h4>
          <div className="contact-item">
            <MapPin size={18} className="contact-icon" />
            <span>Vashi, Navi Mumbai, Maharashtra 400703</span>
          </div>
          <div className="contact-item">
            <Phone size={18} className="contact-icon" />
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-item">
            <Mail size={18} className="contact-icon" />
            <span>info@windflowerbanquets.com</span>
          </div>
        </div>

        <div className="footer-links">
          <h4 className="footer-title">Quick Links</h4>
          <ul>
            <li><a href="#about">The Venue</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Windflower Banquets & Conventions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
