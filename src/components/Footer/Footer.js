import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>EarthLink Business</h2>
          <p>Your trusted partner in global business expansion, helping companies navigate international markets with strategic insights and comprehensive support.</p>
          <div className="contact">
            <span><i className="fas fa-phone"></i> +250 788 447 599</span>
            <span><i className="fas fa-envelope"></i> diretor@earthlinkgroup.com</span>
          </div>
          <div className="socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/earthlink-group/"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            

            <li><Link to="/">Home</Link></li>
            <li><Link to="/Services">Global Services</Link></li>
            <li><Link to="/About">Our Approach</Link></li>
            <li><Link to="/Contact">Connect Globally</Link></li>

            
          </ul>
        </div>

        <div className="footer-section services">
          <h3>Global Solutions</h3>
          <ul>
            <li>Market Entry</li>
            <li>International Consulting</li>
            <li>Partnership Development</li>
            <li>Cross-Border Strategy</li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>Global Insights Newsletter</h3>
          <form>
            <input type="email" placeholder="Get international business updates" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 EarthLink Business. Connecting Businesses Globally.</p>
      </div>
    </footer>
  );
}

export default Footer;