import React, { useEffect, useRef } from 'react';
import './Services.css';
import { Heart, Briefcase, PartyPopper } from 'lucide-react';

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
             const cards = entry.target.querySelectorAll('.service-card');
             cards.forEach((card, idx) => {
               setTimeout(() => {
                 card.classList.add('slide-up');
                 card.style.opacity = '1';
               }, idx * 150);
             });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const services = [
    {
      title: 'Majestic Weddings',
      desc: 'Celebrate your union in an opulent setting. Our spacious hall and grand decor provide the perfect canvas for your fairy-tale wedding and lavish receptions.',
      icon: <Heart size={32} />
    },
    {
      title: 'Corporate Events',
      desc: 'Host impactful conferences, product launches, and galas. With premium acoustics and elegant seating, ensure your professional events make a lasting impression.',
      icon: <Briefcase size={32} />
    },
    {
      title: 'Social Gatherings',
      desc: 'From milestone birthdays to lavish anniversaries, create unforgettable memories. Our customizable setups adapt to any intimate or grand celebration.',
      icon: <PartyPopper size={32} />
    }
  ];

  return (
    <section className="services-section section-padding" id="services" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Curated Experiences</h2>
        <p className="section-subtitle">
          Versatile spaces designed to accommodate any event, bringing your unique vision to life with impeccable service.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index} style={{ opacity: 0 }}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
