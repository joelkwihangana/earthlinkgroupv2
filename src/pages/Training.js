import React from "react";
import "./Placement.css";
import "../styles/global.css";
import { TrainingHero } from "../components/Traininng/TrainingHero";
import TrainingFeatures from "../components/Traininng/TrainingFeatures";

export default function Training() {
  return (
    <>
      <TrainingHero />
      <TrainingFeatures />
    </>
  );
}
