import React from 'react';
import { Check } from 'lucide-react';
import './Badge.css';

/**
 * Badge Component
 * Used in Hero section for feature highlights
 * 
 * @param {node} children - Badge text
 * @param {boolean} showIcon - Whether to show checkmark
 */
const Badge = ({ children, showIcon = true }) => {
  return (
    <span className="f-badge">
      {showIcon && <Check size={14} color="#2BAF71" />}
      {children}
    </span>
  );
};

export default Badge;