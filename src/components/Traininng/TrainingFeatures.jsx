import React from "react";
import FeatureCard from "../common/FeatureCard";
import "./Features.css";
import { featuresTraining } from "./featuresTraining";

const TrainingFeatures = () => {
  return (
    <section className="section-padding bg-light">
      <div className="container">
        {/* Section Header */}
        <div className="text-center section-header">
          <h2>What We Offer</h2>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {featuresTraining.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingFeatures;
