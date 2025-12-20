import React, { useState } from "react";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./Services.css";

// Configure Modal for accessibility
Modal.setAppElement("#root");

const servicesData = [
  {
    title: "Internatilnal Study Tours",
    description:
      "Participants engage with local stakeholders, visit business hubs, and gain actionable insights to evaluate and launch business opportunities with confidence.",
    icon: "🌍",
    benefits: [
      "Explore New Markets",
      "Discover Opportunities",
      //"Global Business Confidence",
      "Gain skills & Build Capacity",
    ],
    fullDescription:
      "Explore New Markets, Discover Opportunities, and Build Global Business Confidence,EarthLink Business organizes immersive sales tours across the seven African countries where we operate. These curated experiences give professionals firsthand exposure to new markets, industry landscapes, and investment possibilities. Participants engage with local stakeholders, visit business hubs, and gain actionable insights to evaluate and launch business opportunities with confidence.",
  },
  {
    title: "Cross-Border Consulting",
    description:
      "Expert guidance on navigating legal, cultural, and economic complexities of global expansion. Our team provides end-to-end support for international business challenges.",
    icon: "📊",
    benefits: [
      "Regulatory Compliance Made Easy",
      "Strategic Market Entry",
      "End-to-End Support",
    ],
    fullDescription:
      "Expert Guidance for Seamless International Expansion, Our Cross-Border Consulting service supports entrepreneurs and companies navigating the legal, cultural, and economic complexities of expanding into new markets. We provide end-to-end advisory covering regulatory compliance, market entry strategy, operations, and localization to ensure a smooth and compliant transition into international business environments.",
  },
  {
    title: "Sales As A Service",
    description:
      "We empower companies to activate new markets, build strong commercial relationships, and start selling effectively from day one.",
    icon: "🤝",
    benefits: [
      "Partner identification and vetting",
      "Negotiation support",
      "Long-term relationship management",
    ],
    fullDescription:
      "Master Sales connects your business with high-value local partners, distributors, and networks across Africa. We empower companies to activate new markets, build strong commercial relationships, and start selling effectively from day one. Our strategic approach helps you establish a strong presence, scale faster, and unlock long-term growth opportunities.",
  },
  {
    title: "International Market Research",
    description:
      "Deep-dive analysis providing actionable insights into global market dynamics, consumer behavior, and emerging opportunities across different industries and regions.",
    icon: "🔍",
    benefits: [
      "Comprehensive market intelligence",
      "Consumer trend analysis",
      "Competitive landscape mapping",
    ],
    fullDescription:
      "Our International Market Research service provides comprehensive insights into global market dynamics. We conduct thorough analyses of consumer behavior, emerging trends, and competitive landscapes across various industries and regions. Our research helps businesses make informed strategic decisions and identify unique market opportunities.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Comprehensive support for meeting international business regulations and standards across various industries and jurisdictions.",
    icon: "📜",
    benefits: [
      "Compliance audits",
      "Regulatory documentation",
      "Ongoing compliance monitoring",
    ],
    fullDescription:
      "Our Regulatory Compliance service offers comprehensive support to ensure your business meets international regulations and standards. We conduct thorough compliance audits, help prepare necessary documentation, and provide ongoing monitoring to keep your business aligned with legal requirements across different jurisdictions.",
  },
  {
    title: "Global Talent Acquisition",
    description:
      "Strategies for recruiting and managing international talent, ensuring you have the right team to support your global expansion efforts.",
    icon: "👥",
    benefits: [
      "International recruitment",
      "Cross-cultural team building",
      "Global HR consulting",
    ],
    fullDescription:
      "Our Global Talent Acquisition service helps businesses build high-performing international teams. We provide end-to-end recruitment solutions, cross-cultural team-building strategies, and comprehensive HR consulting to ensure you attract, retain, and develop top talent across different global markets.",
  },
];

const ServiceCard = ({ service, index, onLearnMore }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const expandVariants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="service-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
    >
      <div className="service-card-header">
        <div className="service-icon-container">
          <span className="service-icon">{service.icon}</span>
        </div>
        <div className="service-title-container">
          <h3>{service.title}</h3>
        </div>
      </div>

      <p className="service-description">{service.description}</p>

      <div className="service-benefits-section">
        <div
          className="benefits-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h4>Key Benefits</h4>
          <span className="toggle-icon">{isExpanded ? "−" : "+"}</span>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="benefits-list"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={expandVariants}
            >
              <ul>
                {service.benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <span className="checkmark">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.button
        className="learn-more-btn"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onLearnMore(service)}
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const firstRowServices = servicesData.slice(0, 3);
  const secondRowServices = servicesData.slice(3);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <div className="services-page">
      <div className="services-hero">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Global Business Expansion Solutions</h1>
          <p>
            Comprehensive, strategic support to help your business navigate the
            complexities of international markets
          </p>
        </motion.div>

        <motion.div
          className="services-subheader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* <div className="stat-card">
            <h3>25+</h3>
            <p>Countries Served</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Successful Expansions</p>
          </div>
          <div className="stat-card">
            <h3>15+</h3>
            <p>Industry Verticals</p>
          </div> */}
        </motion.div>
      </div>

      <div className="services-content">
        <div className="services-grid first-row">
          {firstRowServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              onLearnMore={openModal}
            />
          ))}
        </div>

        <div className="services-grid second-row">
          {secondRowServices.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index + 3}
              onLearnMore={openModal}
            />
          ))}
        </div>
      </div>

      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Ready to Expand Your Business Globally?</h2>
        <p>
          Schedule a consultation with our global expansion experts and
          transform your international business strategy
        </p>
        <button className="cta-button">Book Free Consultation</button>
      </motion.div>

      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onRequestClose={closeModal}
          className="service-modal"
          overlayClassName="service-modal-overlay"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="modal-content"
          >
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-header">
              <span className="modal-emoji">{selectedService.icon}</span>
              <h2>{selectedService.title}</h2>
            </div>
            <p className="modal-description">
              {selectedService.fullDescription}
            </p>
            <div className="modal-actions">
              <button
                onClick={closeModal}
                className="modal-btn modal-btn-secondary"
              >
                Close
              </button>
              <button className="modal-btn modal-btn-primary">
                Contact Us
              </button>
            </div>
          </motion.div>
        </Modal>
      )}
    </div>
  );
};

export default Services;
