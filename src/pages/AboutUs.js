import React from "react";
import { motion } from "framer-motion";
import "./AboutUs.css";
import ceo from "../assets/ceo.jpg";
import seo from "../assets/seo.jpg";
import secretary from "../assets/secretary.jpg";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import ExpertCard from "../components/re-usable-components/ExpertCard";

// Team member data

const experts = [
  {
    id: 1,
    name: "KABANDA Vianney",
    country: "Rwanda",
    description:
      "Expert in Business Expension and consultant in international business.",
    email: "director@earthinkgroup.com",
    image: ceo,
  },
];

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <div className="about-us-page">
      <motion.div
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Empowering Global Business Growth</h1>
        <p>
          We are a business set-up and management consultancy firm. Our focus is
          not only on helping clients start new businesses or expand existing
          ones in African countries but also on developing management strategies
          for growth in those new territories.
        </p>
      </motion.div>

      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Mission Section - Full Width */}
        <motion.section
          className="about-section mission-section"
          variants={itemVariants}
        >
          <div className="section-content">
            <h2>Our Mission</h2>
            <p>
              By opening up local offices in Africa, circumventing traditional
              channels and engaging with customers directly, we are able to
              provide higher-quality, secure and reliable business set-up,
              research and management services at a fraction of
              the market price.
            </p>
          </div>
        </motion.section>

        {/* Mission Section - Full Width */}
        <motion.section
          className="about-section mission-section"
          variants={itemVariants}
        >
          <div className="section-content">
            <h2>Our Vision</h2>
            <p>
              We believe that Expanding your business internationally should be
              Easy and Secure. It should leave you Happiness and Growth, with
              money in your bank. We also believe that every business should
              access global opportunities.
            </p>
          </div>
        </motion.section>

        {/* Core Values Section - Full Width */}
        <motion.section
          className="about-section values-section"
          variants={itemVariants}
        >
          <div className="section-content">
            <h2>Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <span className="value-icon-padding">🌍</span>
                <h3>Global Perspective</h3>
                <p>Embracing diverse cultural and economic landscapes</p>
              </div>
              <div className="value-card">
                <span className="value-icon-padding">🚀</span>
                <h3>Innovation</h3>
                <p>Continuously evolving strategies for global success</p>
              </div>
              <div className="value-card">
                <span className="value-icon-padding">🤝</span>
                <h3>Partnership</h3>
                <p>Building long-term, mutually beneficial relationships</p>
              </div>
              <div className="value-card">
                <span className="value-icon-padding">🛡️</span>
                <h3>Integrity</h3>
                <p>Maintaining highest standards of professionalism</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Team Section - Full Width */}
        <motion.section variants={itemVariants}>
          <div className="section-content">
            <h2>Meet Our Global Experts</h2>
            <div className="team-grid">
              {experts.map((expert) => (
                <ExpertCard key={expert.id} expert={expert} />
              ))}
            </div>
          </div>
        </motion.section>
      </motion.div>

      <motion.div
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Ready to Transform Your Global Business Strategy?</h2>
        <p>
          Connect with our experts and unlock your business's international
          potential
        </p>
        <button  className="cta-button">
        <a
        href="https://calendly.com/earthlinkgroup"
        target="_blank"
        rel="noopener noreferrer"
>
        Schedule Consultation
        </a>
        </button>  
      </motion.div>
    </div>
  );
};

export default AboutUs;
