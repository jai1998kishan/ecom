import React from "react";
import About from "../Components/About";
import Features from "../Components/Features";
import Testimonial from "../Components/Testimonial";
import HeroSection from "../Components/HeroSection";

export default function FeaturePage() {
  return (
    <>
      <HeroSection title="Features" />
      <Features />
      <About />
      <Testimonial />
    </>
  );
}
