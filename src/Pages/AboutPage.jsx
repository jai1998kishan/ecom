import React from "react";

import About from "../Components/About";
import Testimonial from "../Components/Testimonial";
import HeroSection from "../Components/HeroSection";

function AboutPage() {
  return (
    <>
      <HeroSection title="About Us" />
      <About />
      <Testimonial />
    </>
  );
}

export default AboutPage;
