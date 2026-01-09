import React, { useState, useEffect } from "react";
import { Contact, Download, Play } from "lucide-react";
import Button from "../common/Button";
import Badge from "../common/Badge";
import "./Hero.css";
//import "../../styles/global.css";
import { ctaLinks } from "../../config/ctaLinks";
import Border from "../../assets/Image/rena2.jpg";

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

          <h1>Cross-Border Consulting</h1>

          <p className="hero-text hero-sub">
         Our Cross-Border Consulting service supports businesses looking to expand into new countries with confidence and clarity. We guide companies through the complexities of entering foreign markets by providing strategic, regulatory, and operational support. From market entry planning to local partnerships, we help you reduce risks, 
         understand local business environments, and successfully establish your presence across borders.
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
            src= {Border}
            alt="Students collaborating"
          />
         
        </div>
      </div>
    </header>
  );
};

export default Hero;
