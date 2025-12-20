import React from "react";
import * as Icons from "lucide-react";
import "./GuaranteeCard.css";

const GuaranteeCard = ({ icon, title, description }) => {
  const IconComponent = Icons[icon];

  return (
    <div className="guarantee-card">
      <div className="guarantee-icon">
        {IconComponent && <IconComponent size={24} />}
      </div>
      <h4 className="guarantee-title">{title}</h4>
      <p className="guarantee-description">{description}</p>
    </div>
  );
};

export default GuaranteeCard;
