import React, { useState, useEffect, useRef } from "react";
import "./StatCard.css";

/**
 * StatCard - Animated stat display
 *
 * @param {number} value - Target number to count to
 * @param {string} prefix - Character before number (e.g., '$')
 * @param {string} suffix - Character after number (e.g., '%', '+')
 * @param {string} label - Description text
 * @param {number} duration - Animation duration in ms (default: 2000)
 */
const StatCard = ({
  value,
  prefix = "",
  suffix = "",
  label,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const statRef = useRef(null);

  useEffect(() => {
    // Create Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        // entries[0] is our stat card element
        const entry = entries[0];

        // If visible AND hasn't animated yet
        if (entry.isIntersecting && !hasAnimated) {
          animateCounter();
          setHasAnimated(true); // Only animate once
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
      }
    );

    // Start observing the stat card
    if (statRef.current) {
      observer.observe(statRef.current);
    }

    // Cleanup: Stop observing when component unmounts
    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, [hasAnimated]);

  /**
   * Animates the counter from 0 to target value
   */
  const animateCounter = () => {
    const startTime = Date.now();
    const startValue = 0;
    const endValue = value;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function: starts fast, slows down at end
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentCount = Math.floor(
        easeOutQuart * (endValue - startValue) + startValue
      );
      setCount(currentCount);

      // Continue animation until we reach 100% progress
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(endValue); // Ensure we end at exact value
      }
    };

    requestAnimationFrame(updateCounter);
  };

  return (
    <div className="stat-card" ref={statRef}>
      <span className="stat-num">
        {prefix}
        {count}
        {suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export default StatCard;
