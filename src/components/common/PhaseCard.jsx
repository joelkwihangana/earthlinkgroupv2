import React from "react";
import * as Icons from "lucide-react";
import "./PhaseCard.css";

/**
 * PhaseCard - Displays a single timeline phase
 *
 * @param {string} icon - Lucide icon name
 * @param {string} title - Phase title
 * @param {array} items - List of phase activities
 */
const PhaseCard = ({ icon, title, items }) => {
  // Dynamically get the icon component from lucide-react
  // Example: icon="target" → Target component
  const IconComponent =
    Icons[
      icon.charAt(0).toUpperCase() +
        icon.slice(1).replace(/-./g, (x) => x[1].toUpperCase())
    ];

  return (
    <div className="phase-card">
      {/* Icon Circle */}
      <div className="phase-icon">
        {IconComponent && <IconComponent size={32} />}
      </div>

      {/* Title */}
      <h3>{title}</h3>

      {/* List of items */}
      <ul className="phase-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PhaseCard;
