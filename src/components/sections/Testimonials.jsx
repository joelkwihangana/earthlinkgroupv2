// src/components/sections/Testimonials.jsx
import React, { useState } from "react";
import TestimonialCard from "../common/TestimonialCard";
import { testimonials } from "../../data/testimonialsData";
import "./Testimonials.css";

const Testimonials = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate testimonials for seamless infinite scroll
  // [1,2,3,4,5] becomes [1,2,3,4,5,1,2,3,4,5]
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="section-padding testimonials-section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center section-header">
          <span className="section-label">Success Stories</span>
          <h2>Real Stories, Real Success</h2>
          <p
            style={{
              maxWidth: "600px",
              margin: "16px auto 0",
              color: "var(--neutral-700)",
            }}
          >
            Hear from graduates who transformed their careers through our
            program
          </p>
        </div>

        {/* Scrolling Container */}
        <div
          className="testimonials-track-container"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`testimonials-track ${isPaused ? "paused" : ""}`}>
            {duplicatedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                quote={testimonial.quote}
                rating={testimonial.rating}
              />
            ))}
          </div>
        </div>

        {/* Hint for users */}
        <div className="testimonials-hint">
          <span>Hover to pause and read</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
