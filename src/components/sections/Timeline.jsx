import React from "react";
import PhaseCard from "../common/PhaseCard";
import { timelinePhases } from "../../data/timelineData";
import "./Timeline.css";

const Timeline = () => {
  return (
    <section className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div className="text-center section-header">
          <span className="section-label">How It Works</span>
          <h2>Your 6-Month Journey to Employment</h2>
        </div>

        {/* Timeline Grid */}
        <div className="timeline-grid">
          {timelinePhases.map((phase) => (
            <PhaseCard
              key={phase.id}
              icon={phase.icon}
              title={phase.title}
              items={phase.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
