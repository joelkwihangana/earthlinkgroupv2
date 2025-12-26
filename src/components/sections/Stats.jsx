import React from "react";
import StatCard from "../common/StatCard";
import { stats } from "../../data/statsData";
import "./Stats.css";

const Stats = () => {
  return (
    <section className="stats-section section-padding">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard
              key={stat.id}
              value={stat.value}
              prefix={stat.prefix}
              suffix={stat.suffix}
              label={stat.label}
              duration={2000} // 2 seconds animation
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
