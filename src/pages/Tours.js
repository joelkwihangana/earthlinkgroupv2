import React from "react";
import "./Placement.css";
import "../styles/global.css";
import Hero from "../components/BusinessTours/heroo";
import Features from "../components/BusinessTours/Features";
import featuresTours from "../components/BusinessTours/featuresTours";

export default function Tours() {
  return (
    <>
      <Hero />
      <Features />
      <featuresTours />
    </>
  );
}
