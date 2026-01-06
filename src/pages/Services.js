import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import "./Software.js";

// Service data array
export const servicesData = [
  {
    slug: "international-study-tours",
    title: "International Study Tours",
    description:
      "Participants engage with local stakeholders, visit business hubs, and gain actionable insights.",
    icon: "🌍",
    fullDescription: "Add your full description here later.",
  },
  {
    slug: "cross-border-consulting",
    title: "Cross-Border Consulting",
    description:
      "Expert guidance on navigating legal, cultural, and economic complexities.",
    icon: "📊",
    fullDescription: "Add your full description here later.",
  },
  {
    slug: "sales-as-a-service",
    title: "Sales As A Service",
    description:
      "We empower companies to activate new markets and start selling effectively.",
    icon: "🤝",
    fullDescription: "Add your full description here later.",
  },
  {
    slug: "international-market-research",
    title: "International Market Research",
    description:
      "Deep-dive analysis providing actionable global market insights.",
    icon: "🔍",
    fullDescription: "Add your full description here later.",
  },
  {
    slug: "regulatory-compliance",
    title: "Regulatory Compliance",
    description: "Comprehensive support for meeting international regulations.",
    icon: "📜",
    fullDescription: "Add your full description here later.",
  },
  {
    slug: "software",
    title: "Software Development & Website Design",
    description:
      "Smart digital solutions to grow and strengthen online presence.",
    icon: "💻",
    fullDescription: "Add your full description here later.",
    link: "/software",
  },
];

// Single Service Card Component
const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="service-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <div className="service-card-header">
        <span className="service-icon">{service.icon}</span>
        <h3>{service.title}</h3>
      </div>

      <p className="service-description">{service.description}</p>

      <motion.button
        className="learn-more-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(service.link)}

        // Direct link, no 'placement'
      >
        Learn More
      </motion.button>
    </motion.div>
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
        ))}
      </div>
    </div>
  );
};

export default Services;
