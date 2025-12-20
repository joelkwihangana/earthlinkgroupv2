//import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import './Testimonials.css';

// Import high-quality, professional headshots
import first from '../../assets/sarah.jpg';
import second from '../../assets/miguel.jpeg';
import third from '../../assets/emily.jpg';
// import fourth from '../../assets/alex.jpg';
// import fifth from '../../assets/maria.jpg';

//const testimonialData = [
 //{
  //  name: "Sarah Thompson",
   // title: "CEO, Tech Innovations Inc.",
   /* quote: "EarthLink Business transformed our international expansion strategy. Their comprehensive market research and strategic insights enabled us to successfully enter three new markets with minimal risk and maximum efficiency.",
    avatar: first,
    industry: "Technology",
    location: "San Francisco, USA",
    impact: {
      markets: 3,
      growthPercentage: 45
    }
  },
  {
    name: "Miguel Rodriguez",
    title: "Global Operations Director, Manufacturing Solutions",
    quote: "The cross-border consulting from EarthLink was a game-changer. They provided nuanced guidance that addressed our complex regulatory challenges and helped us optimize our international supply chain strategy.",
    avatar: second,
    industry: "Manufacturing",
    location: "Barcelona, Spain",
    impact: {
      costReduction: "25%",
      newMarkets: 2
    }
  },
  {
    name: "Emily Chen",
    title: "Founder, E-commerce Enterprises",
    quote: "EarthLink's strategic partnership network was instrumental in our global expansion. Their deep understanding of international markets and connections opened doors we never thought possible, accelerating our growth exponentially.",
    avatar: third,
    industry: "E-commerce",
    location: "Singapore",
    impact: {
      revenueGrowth: "60%",
      partnershipsEstablished: 5
    }
  },
  // {
  //   name: "Alex Müller",
  //   title: "Innovation Lead, Global Tech Solutions",
  //   quote: "EarthLink's talent acquisition strategies helped us build a truly global, diverse team. Their expertise in cross-cultural recruitment has been crucial to our international success.",
  //   avatar: fourth,
  //   industry: "Technology Consulting",
  //   location: "Berlin, Germany",
  //   impact: {
  //     talentHired: 12,
  //     culturalDiversity: "5+ nationalities"
  //   }
  // },
  // {
  //   name: "Maria Gonzalez",
  //   title: "Strategic Partnerships Director, International Trade Network",
  //   quote: "The regulatory compliance support from EarthLink was exceptional. They navigated complex international legal landscapes with precision, ensuring our smooth expansion across multiple jurisdictions.",
  //   avatar: fifth,
  //   industry: "International Trade",
  //   location: "Mexico City, Mexico",
  //   impact: {
  //     jurisdictionsExpanded: 4,
  //     complianceEfficiency: "95%"
  //   }
  // }
];

const Testimonials = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="testimonials-header"
        >
          <h2>{t('testimonials.title')}</h2>
          <p>{t('testimonials.subtitle')}</p>
        </motion.div>

        <motion.div 
          className="testimonials-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonialData.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="testimonial-quote">
                <blockquote>
                  <span className="quote-mark">"</span>
                  {testimonial.quote}
                  <span className="quote-mark">"</span>
                </blockquote>
              </div>
              
              <div className="testimonial-author">
                <div className="avatar-container">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="testimonial-avatar" 
                  />
                </div>
                
                <div className="author-details">
                  <h4>{testimonial.name}</h4>
                  <p className="author-title">{testimonial.title}</p>
                  <div className="author-meta">
                    <span>{testimonial.industry}</span>
                    <span>{testimonial.location}</span>
                  </div>
                </div>
              </div>

              <div className="testimonial-impact">
                {Object.entries(testimonial.impact).map(([key, value]) => (
                  <div key={key} className="impact-item">
                    <span className="impact-label">{key}</span>
                    <span className="impact-value">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;*/