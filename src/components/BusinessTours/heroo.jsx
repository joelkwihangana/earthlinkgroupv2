import React, { useState, useEffect } from "react";
import { Contact, Download, Play } from "lucide-react";
import Button from "../common/Button";
import Badge from "../common/Badge";
import "./Hero.css";
//import "../../styles/global.css";
import { ctaLinks } from "../../config/ctaLinks";
import software from "../../assets/Image/so.png";

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

          {/* Feature Badges */}
          {/*<div className="feature-badges">
            <Badge>Software development</Badge>
            <Badge>Mobile application development</Badge>
            <Badge>Web Design & Digital Marketing</Badge>
          </div>*/}

          {/* CTA Buttons */}
          <div className="hero-actions">
            <Button
              variant="primary"
              href={ctaLinks.consultation} 
              external={true}
            >
             Schedule a meeting
            </Button>
            {/*<Button variant="outline" href={ctaLinks.brochure} external={true}>
              <Download size={18} />
              Download Brochure
            </Button>*/}
          </div>

          {/* Urgency Box 
          <div className="urgency-box">
            <div>
              <strong style={{ color: "var(--danger)" }}>
                🔥 Next Cohort Closing Soon
              </strong>
              <div style={{ fontSize: "13px" }}>Only 15 seats remaining</div>
            </div>
            <div className="timer-digits">
              <span>{timeLeft.days}d</span> :<span>{timeLeft.hours}h</span> :
              <span>{timeLeft.minutes}m</span>
            </div>
          </div> */}
        </div>

        {/* Right Column - Video */}
        <div className="">
          <img
            src= {software}
            alt="Students collaborating"
          />
         {/*  <div className="play-button">
            <Play fill="white" color="white" size={32} />
          </div>
         <div className="video-caption">
            "How I got hired in 3 months" - Jean-Claude
          </div>*/}
        </div>
      </div>
    </header>
  );
};

export default Hero;
