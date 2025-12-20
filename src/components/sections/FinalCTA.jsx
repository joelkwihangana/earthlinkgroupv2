import React, { useState, useEffect } from "react";
import { ArrowRight, Clock, Users, Shield } from "lucide-react";
import Button from "../common/Button";
import { ctaLinks } from "../../config/ctaLinks";
import { finalCtaData } from "../../data/finalCtaData";
import "./FinalCTA.css";

const FinalCTA = () => {
  const { seatsRemaining, totalSeats, nextCohortDate, quickBenefits } =
    finalCtaData;

  // Calculate percentage filled
  const percentageFilled = Math.round(
    ((totalSeats - seatsRemaining) / totalSeats) * 100
  );

  return (
    <section className="final-cta-section">
      <div className="container">
        {/* Scarcity Indicator */}
        <div className="scarcity-banner">
          <div className="scarcity-icon">
            <Clock size={24} />
          </div>
          <div className="scarcity-content">
            <strong className="scarcity-title">⚠️ Limited Availability</strong>
            <p className="scarcity-text">Next cohort starts {nextCohortDate}</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="seats-progress">
          <div className="progress-header">
            <span className="progress-label">
              <Users size={16} />
              {percentageFilled}% of seats filled
            </span>
            <span className="progress-count">
              Only <strong>{seatsRemaining} seats left</strong>
            </span>
          </div>
          <div className="progress-bar-bg">
            <div
              className="progress-bar-fill"
              style={{ width: `${percentageFilled}%` }}
            >
              <div className="progress-shine"></div>
            </div>
          </div>
        </div>

        {/* Main CTA Content */}
        <div className="final-cta-content">
          <h2 className="final-cta-title">Ready to Transform Your Career?</h2>
          <p className="final-cta-subtitle">
            Don't let this opportunity pass. Join {totalSeats - seatsRemaining}{" "}
            graduates already enrolled for the next cohort.
          </p>

          {/* Quick Benefits */}
          <div className="quick-benefits">
            {quickBenefits.map((benefit, index) => (
              <div key={index} className="quick-benefit-item">
                <Shield size={16} className="benefit-icon" />
                {benefit}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="final-cta-buttons">
            <Button
              variant="primary"
              className="final-cta-primary"
              href={ctaLinks.application}
              external={true}
            >
              Secure Your Spot Now
              <ArrowRight size={20} />
            </Button>

            <Button
              variant="outline"
              className="final-cta-secondary"
              href="#contact"
              external={true}
            >
              Have Questions? Chat with Us
            </Button>
          </div>

          {/* Trust Signal */}
          <div className="final-trust-signal">
            <Shield size={20} />
            <span>
              <strong>No payment required</strong> to start your application.
              Speak with our team first.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
