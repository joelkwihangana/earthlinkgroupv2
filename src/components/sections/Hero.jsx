import React, { useState, useEffect } from "react";
import { Contact, Download, Play } from "lucide-react";
import Button from "../common/Button";
import Badge from "../common/Badge";
import "./Hero.css";
import "../../styles/global.css";
import { ctaLinks } from "../../config/ctaLinks";

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
    <header className="hero">
      <div className="container hero-grid">
        {/* Left Column - Content */}
        <div>
          <span className="hero-pre">🎯 Africa's Premier Graduate Program</span>

          <h1>From Graduate to Employed Professional in 6 Months</h1>

          <p className="hero-sub">
            A comprehensive intensive program that transforms fresh graduates
            into industry-ready professionals with guaranteed job interviews.
          </p>

          {/* Feature Badges */}
          <div className="feature-badges">
            <Badge>95% Placement</Badge>
            <Badge>Paid Internships</Badge>
            <Badge>7 Countries</Badge>
          </div>

          {/* CTA Buttons */}
          <div className="hero-actions">
            <Button
              variant="primary"
              href={ctaLinks.application} 
              external={true}
            >
              🚀 Start Application
            </Button>
            <Button variant="outline" href={ctaLinks.brochure} external={true}>
              <Download size={18} />
              Download Brochure
            </Button>
          </div>

          {/* Urgency Box */}
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
          </div>
        </div>

        {/* Right Column - Video */}
        <div className="hero-video">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Students collaborating"
          />
          <div className="play-button">
            <Play fill="white" color="white" size={32} />
          </div>
          <div className="video-caption">
            "How I got hired in 3 months" - Jean-Claude
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
