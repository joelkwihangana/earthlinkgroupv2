import React from "react";
import { Star } from "lucide-react";
import "./TestimonialCard.css";

/**
 * TestimonialCard - Single testimonial display
 *
 * @param {string} name - Person's name
 * @param {string} role - Job title and company
 * @param {string} image - Profile image URL
 * @param {string} quote - Testimonial text
 * @param {number} rating - Star rating (1-5)
 */
const TestimonialCard = ({ name, role, image, quote, rating }) => {
  return (
    <div className="testimonial-card">
      {/* Star Rating */}
      <div className="testimonial-stars">
        {[...Array(rating)].map((_, index) => (
          <Star key={index} size={18} fill="#FFC107" color="#FFC107" />
        ))}
      </div>

      {/* Quote */}
      <p className="testimonial-quote">"{quote}"</p>

      {/* Author Info */}
      <div className="testimonial-author">
        <img src={image} alt={name} className="testimonial-avatar" />
        <div className="testimonial-info">
          <strong className="testimonial-name">{name}</strong>
          <span className="testimonial-role">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
