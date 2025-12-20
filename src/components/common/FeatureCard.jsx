import React from "react";
import * as Icons from "lucide-react";
import "./FeatureCard.css";

/**
 * FeatureCard - Displays a feature with icon, title, and description
 *
 * @param {string} icon - Lucide icon name (e.g., 'UserCheck')
 * @param {string} title - Feature title
 * @param {string} description - Feature description
 */
const FeatureCard = ({ icon, title, description }) => {
  // Dynamically get the icon component
  // lucide-react exports icons as PascalCase (UserCheck, Code2, etc.)
  const IconComponent = Icons[icon];

  return (
    <div className="feature-card">
      {/* Icon Box */}
      <div className="f-icon-box">
        {IconComponent && <IconComponent size={24} />}
      </div>

      {/* Content */}
      <div className="feature-content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
