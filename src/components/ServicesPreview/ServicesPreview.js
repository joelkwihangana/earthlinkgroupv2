import React from "react";
import "./ServicesPreview.css";

const ServicesPreview = () => {
  return (
    <section className="services-preview">
      <h2>Our Global Expansion Services</h2>
      <div className="services-grid">
        <div className="service-card">
          <span>🌍</span>
          <h3>International Study Tours</h3>
          <p>
            We organize immersive sales tours across the world. These aren’t
            just trips,they’re hands-on experiences that put you in the heart of
            emerging markets..
          </p>
        </div>
        <div className="service-card">
          <span>📊</span>
          <h3>Cross-Border Consulting</h3>
          <p>
            Supports entrepreneurs and companies navigating the legal, cultural,
            and economic complexities of expanding into new markets..
          </p>
        </div>
        <div className="service-card">
          <span>🤝</span>
          <h3>Sales As A Service</h3>
          <p>
            We empower companies to activate new markets, build strong
            commercial relationships, and start selling effectively from day
            one..
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
