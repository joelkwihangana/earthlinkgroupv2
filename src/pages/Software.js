import React from "react";
import "./Placement.css";
import "../styles/global.css";
import Hero from "../components/SoftwareDevelopment/Hello";
import Features from "../components/SoftwareDevelopment/Features";
import featuresData from "../components/SoftwareDevelopment/featuresServices";

export default function Software() {
  return (
    <>
      <Hero />
      <Features />
      <featuresServices />
    </>
  );
}
