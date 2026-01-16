import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  FaGlobeAmericas,
  FaChartLine,
  FaIndustry,
  FaHandshake,
  FaUsers,
  FaTrophy,
  FaPlane
} from "react-icons/fa";
import "./GlobalReach.css";
import businessImage from "../../assets/Image/Mapp.jpeg";

const GlobalReach = () => {
  const { t } = useTranslation();

  // Design system colors
  const COLORS = {
    PRIMARY_BLUE: "#1A5F7A",
    SECONDARY_GOLD: "#29b041",
  };

  const globalReachStats = [
    {
      icon: FaGlobeAmericas,
      value: "7+",
      label: "Countries We are Operated In",
      description:
        "Comprehensive global coverage across diverse economic landscapes, enabling businesses to expand with confidence and strategic insight.",
    },
    {
      icon: FaChartLine,
      value: "50+",
      label: "Successful Expansions",
      description:
        "Proven track record of guiding businesses through complex international market entry strategies with measurable success.",
    },
    {
      icon: FaIndustry,
      value: "20+",
      label: "Business Sectors",
      description:
        "Expertise spanning multiple sectors, from technology and finance to healthcare and manufacturing, ensuring adaptable global solutions.",
    },
  ];

  const keyCapabilities = [
    {
      icon: FaHandshake,
      title: "Strategic Partnerships",
      description:
        "Forge powerful global connections, identifying and nurturing strategic partnerships that drive sustainable international growth and market penetration.",
    },
    {
      icon: FaUsers,
      title: "Global Talent Acquisition",
      description:
        "Recruit, develop, and integrate top-tier international talent, building high-performance teams that transcend cultural and geographical boundaries.",
    },
    {
      icon: FaTrophy,
      title: "Operational Excellence",
      description:
        "Implement world-class methodologies and best practices, ensuring seamless operations, compliance, and competitive advantage in global markets.",
    },
     {
      icon: FaPlane,
      title: "Organize Business Trips",
      description:
        "We organize seamless business trips across different countries, handling planning, logistics, and coordination so you can focus on building partnerships, exploring new markets, and driving business growth.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="global-reach-section">
      <motion.div
        className="global-reach-content"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2
          variants={itemVariants}
          style={{ color: COLORS.PRIMARY_BLUE }}
        >
          Global Business Expansion Ecosystem
        </motion.h2>

        <motion.div className="global-stats" variants={containerVariants}>
          {globalReachStats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon" style={{ color: COLORS.PRIMARY_BLUE }}>
                <stat.icon size={48} />
              </div>
              <h3 style={{ color: COLORS.PRIMARY_BLUE }}>{stat.value}</h3>
              <p style={{ color: COLORS.SECONDARY_GOLD }}>{stat.label}</p>
              <div className="stat-description">
                <p>{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="global-description" variants={itemVariants}>
          <p>
            EarthLink Group is a premier global expansion consultancy dedicated
            to transforming ambitious businesses into international success
            stories. Our holistic approach combines deep market insights,
            strategic planning, and innovative solutions to navigate the
            complexities of global business landscapes.
          </p>
        </motion.div>

        <motion.div className="key-capabilities" variants={containerVariants}>
          <motion.h3
            variants={itemVariants}
            style={{ color: COLORS.PRIMARY_BLUE }}
          >
            Our Core Capabilities
          </motion.h3>

          <div className="capabilities-grid">
            <div className="capabilities-grid-img">
              <img src={businessImage} alt="" className="" />
            </div>
            <div className="capabilities-grid-contents">
              {" "}
              {keyCapabilities.map((capability, index) => (
                <div className="capabilities-grid-contents-right">
                  <motion.div
                    key={index}
                    className="capability-card"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div
                      className="capability-icon"
                      style={{ color: COLORS.PRIMARY_BLUE }}
                    >
                      <capability.icon size={48} />
                    </div>
                    <h4 style={{ color: COLORS.PRIMARY_BLUE }}>
                      {capability.title}
                    </h4>
                    <p>{capability.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GlobalReach;
