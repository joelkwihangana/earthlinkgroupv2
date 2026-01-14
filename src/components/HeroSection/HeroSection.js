import React from 'react';
import { motion } from 'framer-motion';
import './HeroSection.css';
import global from '../../assets/Hero/global.png';
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
   const navigate = useNavigate();
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <h1>Expand Your Business Globally with Confidence</h1>
          <p>
            EarthLink Group is your strategic partner in international business expansion and exposure. 
            We provide comprehensive solutions to help companies overcome cross-border challenges, 
            navigate complex markets, and unlock global growth opportunities.
          </p>
          <div className="hero-cta">
         
            <motion.button 
              className="secondary-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/contact") } 
            > 
              Book an Appointment
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-illustration"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="image-wrapper">
            <img 
              src={global} 
              alt="Global Business Expansion" 
              className="hero-image"
            />
            <div className="image-overlay"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
