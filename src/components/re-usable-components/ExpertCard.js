import React from 'react';
import './card.css';

function ExpertCard({ expert }) {
  return (
    <article className="expert-card">
      <img
        src={expert.image}
        alt={`Photo of ${expert.name}`}
        className="expert-image"
      />

      <div className="expert-info">
        <h3 className="expert-name">{expert.name}</h3>
        <p className="expert-country">{expert.country}</p>
        <p className="expert-description">{expert.description}</p>

        <div className="expert-contact">
          <a
            href={`mailto:${expert.email}`}
            className="expert-email"
            aria-label={`Email ${expert.name}`}
          >
            {expert.email}
          </a>
        </div>
      </div>
    </article>
  );
}

export default ExpertCard;
