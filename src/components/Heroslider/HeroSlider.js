import React, { useState, useEffect } from 'react';
import './HeroSlider.css';
import convention1 from '../../assets/Hero/convention1.jpeg';
import mozambique from '../../assets/Hero/mozambique.jpg';
import tanzania from '../../assets/Hero/tanzania.jpg';
import { useNavigate } from "react-router-dom";




function HeroSlider() {
  const navigate = useNavigate();
  const slides = [
    {
      text: "Your Gateway to Seamless Global Expansion",
      sub: "We simplify cross-border business, ensuring smooth market entry, operational readiness, and long-term international success.",
      image: convention1
    
    },
    {
      text: "Where Global Vision Meets Strategic Execution",
      sub: "Partner with experts who deliver end-to-end expansion solutions from market research to talent acquisition and operational excellence.",
      image: mozambique
    },
    {
      text: "Build, Scale, and Thrive Across Borders",
      sub: "Empowering businesses to grow in Africa’s fastest-rising markets through proven strategies, deep insights, and world-class support.",
      image: tanzania
    }
   
  ];

  const [current, setCurrent] = useState(0);
  const AUTOPLAY_MS = 5000;

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={index === current ? "false" : "true"}
        >
          <div className="slide-overlay" />
          <div className="slide-content">
            <h1 className="slide-title" dangerouslySetInnerHTML={{__html: slide.text.replace(/\n/g,'<br/>')}} />
            <p className="slide-sub">{slide.sub}</p>
            <button className="discover-btn" onClick={() => navigate("/about")}>Discover More</button>
          
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroSlider;
