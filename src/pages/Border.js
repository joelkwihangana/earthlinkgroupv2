import React from "react";
import "./Placement.css";
import "../styles/global.css";
import Hero from "../components/Borders/heroo";
import Features from "../components/Borders/Features";
import featuresBorder from "../components/Borders/featuresBorder";

export default function Border() {
  return (
    <>
      <Hero />
      <Features />
      <featuresBorder />
    </>
  );
}
