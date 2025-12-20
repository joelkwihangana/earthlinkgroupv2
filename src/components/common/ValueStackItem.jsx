import React from "react";
import * as Icons from "lucide-react";
import "./ValueStackItem.css";

/**
 * ValueStackItem - Shows one item in the value breakdown
 *
 * @param {string} icon - Lucide icon name
 * @param {string} item - Description of what's included
 * @param {number|string} retailValue - Monetary value or "Priceless"
 */
const ValueStackItem = ({ icon, item, retailValue }) => {
  const IconComponent = Icons[icon];

  return (
    <div className="value-stack-item">
      <div className="value-icon">
        {IconComponent && <IconComponent size={20} />}
      </div>
      <div className="value-content">
        <span className="value-name">{item}</span>
        <span className="value-price">
          {typeof retailValue === "number"
            ? `$${retailValue.toLocaleString()} value`
            : retailValue}
        </span>
      </div>
    </div>
  );
};

export default ValueStackItem;
