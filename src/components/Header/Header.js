import React, { useState } from 'react';
import './Header.css';
import Logoreal from '../../assets/Hero/Logoreal.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faLinkedin, 
  faTiktok, 
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import LanguageSwitcher from '../LanguageSwitcher';

function Header() {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('English');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === 'English' ? 'French' : 'English');
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isDarkMode ? 'dark' : ''}`}>
      {/* Top Information Bar */}
      <div className="top-info-bar">
        <div className="contact-info">
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <span>{t('header.phone')}</span>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <span>{t('header.email')}</span>
          </div>
        </div>
        <div className="header-actions">
          <div className="language-toggle">
            <button onClick={toggleLanguage}>
              <i className="fas fa-globe"></i>
              {language}
            </button>
          </div>
          <div className="theme-toggle">
            <button onClick={toggleDarkMode}>
              {isDarkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
          <div className="social-media-icons">
            <motion.div 
              className="social-icon facebook"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="https://www.facebook.com/share/19TFcdc8T7/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </motion.div>
            <motion.div 
              className="social-icon instagram"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="https://www.instagram.com/earth_link_group?utm_source=qr&igsh=MXVtbzJ6d3p0bnN1dg==" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </motion.div>
            <motion.div 
              className="social-icon x"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="https://www.linkedin.com/company/earthlink-group/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </motion.div>
            <motion.div 
              className="social-icon linkedin"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <a href="https://youtube.com/@earthlinkgroup?si=h7YQQ3fFS3Ex51oi" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="main-nav">
        <div className="logo">
          <img 
            src={Logoreal}
            alt="EarthLink Business Logo" 
            className="logo-image"
          />
        </div>
        
        <div 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="Placement">Placement Accelerator</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {/*<li className="login-btn"><Link to="/login">Login</Link></li>*/}
        </ul>
      </nav>
    </header>
  );
}

export default Header;