import React, { useState, useEffect } from "react";
import { Contact, Download, Play } from "lucide-react";
import Button from "../common/Button";
import Badge from "../common/Badge";
import "./Hero.css";
//import "../../styles/global.css";
import { ctaLinks } from "../../config/ctaLinks";
import Tour from "../../assets/Image/rena3.jpg";

const Hero = () => {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 4,
    minutes: 23,
  });

  // Update countdown every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59 };
        } else if (prev.days > 0) {
          return { days: prev.days - 1, hours: 23, minutes: 59 };
        }
        return prev;
      });
    }, 60000); // Every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="hero hero-text">
      <div className="container hero-grid">
        {/* Left Column - Content */}
        <div>
          {/*<span className="hero-pre">🎯 Software Development Services</span>*/}

          <h1>International Business Tours</h1>

          <p className="hero-text hero-sub">
          We organize and manage end-to-end international business tours designed to help participants explore new markets and build strategic connections. Our service includes travel planning, logistics, and coordination of meetings with local stakeholders. Participants visit key business hubs, companies, and innovation centers, gaining first-hand exposure 
          and actionable insights to support informed decision-making and sustainable business growth.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <Button
              variant="primary"
              href={ctaLinks.consultation} 
              external={true}
            >
             Schedule a meeting
            </Button>
          
          </div>

          
        </div>

        {/* Right Column - Video */}
        <div className="hero-image">
          <img
            src= {Tour}
            alt="Students collaborating"
          />
         
        </div>
      </div>
    </header>
  );
};

export default Hero;
