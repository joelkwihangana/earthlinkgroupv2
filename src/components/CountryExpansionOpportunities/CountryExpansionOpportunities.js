import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import RwandaFlag from '../../assets/Flag/Rwandaflag.png';
import senegalflag from '../../assets/Flag/senegalflag.png';
import gabonflag from '../../assets/Flag/Gabonflag.png';
import zambiaflag from '../../assets/Flag/zambiaflag.png';
import mozambiqueflag from '../../assets/Flag/Mozambiqueflag.png';
import tanzaniaflag from '../../assets/Flag/tanzaniaflag.png';
import DRCflag from '../../assets/Flag/DRC.png';

const countries = [
  {
    name: "Rwanda",
    image: RwandaFlag,
    flag: "🇷🇼",
    capital: "Kigali",
    population: "14.26 million",
    gdp: "$14.25 billion",
    keyIndustries: ["Services: finance, retail, transport, government services and a growing ICT / digital-services sector. Services were the main contributor to 2024 growth.","Agriculture: still a major employer (smallholder farming), key export crops include coffee and tea; agriculture rebounded in 2024 and remains important for livelihoods.", "Industry / Manufacturing: light manufacturing, construction and agro-processing are expanding as the country promotes industrialization.", "Tourism: nature / gorilla tourism is a high-value export-earner and a focus of investment and branding.", "ICT & tech: strategic priority for diversification; Kigali is positioning as a regional tech hub."],
    opportunities: [
      "Smart City Technologies",
      "Digital Government Solutions",
      "Tech Education Platforms",
      "Healthcare Innovations",
    ],
    description:
      "Rwanda, a landlocked East African country with Kigali as its capital, has a population of about 14.26 million (2024). It is small but densely populated, with Kinyarwanda, English, French, and Swahili as official languages. Rwanda is known for its young population, strong governance, and efforts to grow as a regional hub for services, innovation, and sustainable development.",
    economicOverview:
      "Rwanda has a growing economy with a strong focus on agriculture, manufacturing, and emerging service sectors. The government is actively promoting digital transformation and technological innovation.",
    technologicalLandscape:
      "Increasing mobile and internet penetration, growing digital literacy, and government support for tech initiatives create a promising environment for technological investments.",
    challengesAndOpportunities: [
      "Developing digital infrastructure",
      "Improving digital government services",
      "Enhancing tech education platforms",
      "Promoting healthcare innovations",
    ],
  },
  {
    name: "Senegal",
     image: senegalflag,
    flag: "🇸🇳",
    capital: "Dakar",
    population: "18.38 million",
    gdp: "$34.7 billion",
    keyIndustries: ["Telecommunications", "Agriculture", "Fishing", "Tourism"],
    opportunities: [
      "Telecommunications Infrastructure",
      "Digital Banking Solutions",
      "Agricultural Technology",
      "Renewable Energy Projects",
    ],
    description:
      "A strategic West African market with a growing digital economy and stable political environment. Senegal is emerging as a tech hub with significant potential for digital transformation.",
    economicOverview:
      "Senegal has a diverse and growing economy, with a strong focus on services, agriculture, and emerging digital sectors. The country has been implementing economic reforms to attract foreign investment and promote innovation.",
    technologicalLandscape:
      "Rapidly developing digital infrastructure, increasing internet penetration, and a young, tech-savvy population make Senegal an attractive market for technological innovations.",
    challengesAndOpportunities: [
      "Expanding digital infrastructure",
      "Developing fintech solutions",
      "Enhancing agricultural productivity",
      "Promoting renewable energy projects",
    ],
  },
  {
    name: "Gabon",
     image: gabonflag,
    flag: "🇬🇦",
    capital: "Libreville",
    population: "2.54  million",
    gdp: "$8,420 billion",
    keyIndustries: ["Agriculture", "Oil and Gas", "Timber", "Manufacturing"],
    opportunities: [
      "Mobile Payment Systems",
      "E-Commerce Platforms",
      "Educational Technology",
      "Healthcare Digitization",
    ],
    description:
      "An emerging tech hub with significant potential in digital transformation and innovation. Cameroon offers diverse opportunities across multiple sectors.",
    economicOverview:
      "Cameroon has a mixed economy with a focus on agriculture, oil, and emerging service sectors. The government is actively promoting digital transformation and technological innovation.",
    technologicalLandscape:
      "Growing mobile and internet penetration, increasing digital literacy, and government support for tech initiatives create a promising environment for technological investments.",
    challengesAndOpportunities: [
      "Developing digital payment infrastructure",
      "Expanding e-learning platforms",
      "Improving healthcare technology",
      "Supporting digital entrepreneurship",
    ],
  },
  {
    name: "Zambia",
     image: zambiaflag,
    flag: "🇿🇲",
    capital: "Lusaka",
    population: "20.1 million",
    gdp: "$29.9 billion",
    keyIndustries: ["Mining", "Agriculture", "Manufacturing", "Tourism"],
    opportunities: [
      "Financial Technology",
      "Mining Sector Digitalization",
      "Agricultural Management Systems",
      "Remote Work Solutions",
    ],
    description:
      "Growing economy with increasing digital infrastructure and investment opportunities.",
    economicOverview:
      "Zambia has a growing economy with a strong focus on mining, agriculture, and emerging service sectors. The government is actively promoting digital transformation and technological innovation.",
    technologicalLandscape:
      "Increasing mobile and internet penetration, growing digital literacy, and government support for tech initiatives create a promising environment for technological investments.",
    challengesAndOpportunities: [
      "Developing digital payment infrastructure",
      "Expanding e-learning platforms",
      "Improving healthcare technology",
      "Supporting digital entrepreneurship",
    ],
  },
  {
    name: "Mozambique",
     image: mozambiqueflag,
    flag: "🇲🇿",
    capital: "Maputo",
    population: "34.6 million",
    gdp: "$23.0 billion",
    keyIndustries: ["Agriculture", "Mining", "Timber", "Manufacturing"],
    opportunities: [
      "Humanitarian Tech Solutions",
      "Satellite Communication",
      "Emergency Response Systems",
      "Microfinance Platforms",
    ],
    description:
      "Challenging market with unique opportunities for innovative technological interventions.",
    economicOverview:
      "The Central African Republic has a fragile economy with a focus on agriculture, mining, and emerging service sectors. The government is actively promoting digital transformation and technological innovation.",
    technologicalLandscape:
      "Limited digital infrastructure, low internet penetration, and a need for humanitarian tech solutions create a challenging environment for technological investments.",
    challengesAndOpportunities: [
      "Developing digital infrastructure",
      "Improving humanitarian response systems",
      "Enhancing agricultural productivity",
      "Promoting microfinance solutions",
    ],
  },
  {
    name: "Tanzania",
     image: tanzaniaflag,
    flag: "🇹🇿",
    capital: "Dar es Salaam",
    population: "68.6  million",
    gdp: "$79.6 billion",
    keyIndustries: ["Agriculture", "Manufacturing", "Tourism", "Mining"],
    opportunities: [
      "Agricultural Technology",
      "Healthcare Innovations",
      "Educational Platforms",
      "Rural Connectivity Solutions",
    ],
    description:
      "Developing nation with strong potential for technological leapfrogging.",
    economicOverview:
      "Malawi has a growing economy with a strong focus on agriculture, manufacturing, and emerging service sectors. The government is actively promoting digital transformation and technological innovation.",
    technologicalLandscape:
      "Increasing mobile and internet penetration, growing digital literacy, and government support for tech initiatives create a promising environment for technological investments.",
    challengesAndOpportunities: [
      "Developing digital infrastructure",
      "Improving healthcare technology",
      "Enhancing agricultural productivity",
      "Promoting rural connectivity solutions",
    ],
  },
  {
    name: "DRC",
     image: DRCflag,
    flag: "🇦🇴",
    capital: "Kinshasa",
    population: "109 million",
    gdp: "$74-79 billion",
    keyIndustries: ["Mining", "Manufacturing", "Agriculture", "Forestry" , "Energy"],
    opportunities: [
      "Energy Sector Digitalization",
      "Urban Infrastructure Tech",
      "Logistics Management Systems",
      "Renewable Energy Solutions",
    ],
    description:
      "Emerging market with growing technological infrastructure and investment potential.",
    economicOverview:
      "The Republic of the Congo has a growing economy with a strong focus on oil and gas, mining, and emerging service sectors. The government is actively promoting digital transformation and technological innovation.",
    technologicalLandscape:
      "Increasing mobile and internet penetration, growing digital literacy, and government support for tech initiatives create a promising environment for technological investments.",
    challengesAndOpportunities: [
      "Developing digital infrastructure",
      "Improving energy sector efficiency",
      "Enhancing urban infrastructure",
      "Promoting renewable energy solutions",
    ],
  },
  /* {
    name: 'Zimbabwe',
    flag: '🇿🇼',
    capital: 'Harare',
    population: '14.8 million',
    gdp: '$14.4 billion',
    keyIndustries: ['Agriculture', 'Mining', 'Manufacturing', 'Tourism'],
    opportunities: [
      'Fintech Solutions',
      'Cryptocurrency Platforms',
      'Remote Work Technologies',
      'Digital Banking'
    ],
    description: 'Resilient market with innovative approaches to financial and technological challenges.',
    economicOverview: 'Zimbabwe has a growing economy with a strong focus on agriculture, mining, and emerging service sectors. The government is actively promoting digital transformation and technological innovation.',
    technologicalLandscape: 'Increasing mobile and internet penetration, growing digital literacy, and government support for tech initiatives create a promising environment for technological investments.',
    challengesAndOpportunities: [
      'Developing digital payment infrastructure',
      'Improving financial inclusion',
      'Enhancing remote work technologies',
      'Promoting digital banking solutions'
    ]
  },
  {
    name: 'Rwanda',
    flag: '🇷🇼',
    capital: 'Kigali',
    population: '12.9 million',
    gdp: '$10.1 billion',
    keyIndustries: ['Agriculture', 'Manufacturing', 'Tourism', 'ICT'],
    opportunities: [
      'Smart City Technologies',
      'Digital Government Solutions',
      'Tech Education Platforms',
      'Healthcare Innovations'
    ],
    description: 'Leading African tech innovation hub with strong digital transformation initiatives.',
    economicOverview: 'Rwanda has a growing economy with a strong focus on agriculture, manufacturing, and emerging service sectors. The government is actively promoting digital transformation and technological innovation.',
    technologicalLandscape: 'Increasing mobile and internet penetration, growing digital literacy, and government support for tech initiatives create a promising environment for technological investments.',
    challengesAndOpportunities: [
      'Developing digital infrastructure',
      'Improving digital government services',
      'Enhancing tech education platforms',
      'Promoting healthcare innovations'
    ]
  },
  {
    name: 'South Sudan',
    flag: '🇸🇸',
    capital: 'Juba',
    population: '13.4 million',
    gdp: '$13.2 billion',
    keyIndustries: ['Agriculture', 'Oil and Gas', 'Manufacturing', 'Mining'],
    opportunities: [
      'Humanitarian Tech',
      'Communication Infrastructure',
      'Emergency Response Systems',
      'Educational Technology'
    ],
    description: 'Challenging market with critical needs for technological interventions.',
    economicOverview: 'South Sudan has a fragile economy with a focus on agriculture, oil and gas, and emerging service sectors. The government is actively promoting digital transformation and technological innovation.',
    technologicalLandscape: 'Limited digital infrastructure, low internet penetration, and a need for humanitarian tech solutions create a challenging environment for technological investments.',
    challengesAndOpportunities: [
      'Developing digital infrastructure',
      'Improving humanitarian response systems',
      'Enhancing agricultural productivity',
      'Promoting educational technology'
    ]
  }*/
];

const CountryExpansionOpportunities = () => {
  const { t } = useTranslation();
  const [selectedCountry, setSelectedCountry] = useState(null);

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
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300 },
    },
    exit: { opacity: 0, scale: 0.9 },
  };

  return (
    <div className="country-expansion-container">
      <h2 className="section-title">{t("countryExpansion.title")}</h2>
      <motion.div
        className="countries-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {countries.map((country) => (
          <motion.div
            key={country.name}
            className="country-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedCountry(country)}
          >
          
           <div> <img className="country-flag" src={country.image} alt={`${country.name} flag`} /></div>

            <h3>{country.name}</h3>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {selectedCountry && (
          <motion.div
            className="country-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCountry(null)}
          >
            <motion.div
              className="country-modal"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedCountry(null)}
              >
                ✕
              </button>
              <div className="modal-content">
                <div className="country-header">
                  <div className="country-title">
                    <h2>
                      <img className="modal-flag" src={selectedCountry.image} alt="flag" />
{selectedCountry.name}
                      
                    </h2>
                    <div className="country-meta">
                      <span>🏛️ {selectedCountry.capital}</span>
                      <span>👥 {selectedCountry.population}</span>
                      <span>💰 GDP: {selectedCountry.gdp}</span>
                    </div>
                  </div>
                </div>

                <section className="country-description">
                  <h3>{t("countryExpansion.overview")}</h3>
                  <p>{selectedCountry.description}</p>
                </section>

                <section className="country-economic-overview">
                  <h3>{t("countryExpansion.economicOverview")}</h3>
                  <p>{selectedCountry.economicOverview}</p>
                  <div className="key-industries">
                    <h4>{t("countryExpansion.keyIndustries")}</h4>
                    <ul>
                      {selectedCountry.keyIndustries.map((industry, index) => (
                        <li key={index}>{industry}</li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section className="country-tech-landscape">
                  <h3>{t("countryExpansion.technologicalLandscape")}</h3>
                  <p>{selectedCountry.technologicalLandscape}</p>
                </section>



                <section className="country-opportunities">
                  <h3>{t("countryExpansion.businessOpportunities")}</h3>
                  <ul>
                    {selectedCountry.opportunities.map((opportunity, index) => (
                      <li key={index}>{opportunity}</li>
                    ))}
                  </ul>
                </section>

                <section className="country-challenges">
                  <h3>{t("countryExpansion.challengesAndOpportunities")}</h3>
                  <ul>
                    {selectedCountry.challengesAndOpportunities.map(
                      (challenge, index) => (
                        <li key={index}>{challenge}</li>
                      )
                    )}
                  </ul>
                </section>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CountryExpansionOpportunities;
