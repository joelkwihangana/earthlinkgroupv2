import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Services.css";
import "./Software.js";
import "./Tours.js";
import servicesData from "../data/servicesData.js";
import "./CardServices.css";
import Button from "../components/common/Button.jsx";
import "./ContactUs.css"

<div className="contact-hero">
  <motion.div
    className="contact-hero-content"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <h1>Let's Expand Your Business Together</h1>
    <p>
      Connect with our global expansion experts and transform your international
      business strategy
    </p>
  </motion.div>
</div>;

// Single Service Card Component
const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();

  return (
    <div class="card">
      <div class="content">
        <div className="cardHeader">
          <span class="card-icon">{service.icon}</span>
          <h3>{service.title}</h3>
        </div>

        <p class="para">{service.description}</p>
        <Button onClick={() => navigate(service.link)} className="card-cta">
          Learn More
        </Button>
      </div>
    </div>
  );
};

// Main Services Page Component
const Services = () => {
  return (
    <div className="services-page">
      <motion.div
        className="services-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Global Business Expansion Solutions</h1>
        <p>
          Strategic support to help your business succeed in international
          markets.
        </p>
      </motion.div>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <ServiceCard key={service.slug} service={service} index={index} />
          // <Cardservice />
        ))}
      </div>
    </div>
  );
};

export default Services;
