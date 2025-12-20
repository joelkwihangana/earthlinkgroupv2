import React from "react";
import "./Placement.css";
import "../styles/global.css";
import Hero from "../components/sections/Hero";
import Timeline from "../components/sections/Timeline";
import Features from "../components/sections/Features";
import Stats from "../components/sections/Stats";
import Testimonials from "../components/sections/Testimonials";
import Pricing from "../components/sections/Pricing";
import FinalCTA from "../components/sections/FinalCTA";

export default function PlacementAccelerator() {
  return (
    <>
      <Hero />
      <Timeline />
      <Features />
      <Stats />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </>
  );
}
