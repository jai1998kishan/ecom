import React from "react";

import About from "../Components/About";
import Testimonial from "../Components/Testimonial";
import HeroSection from "../Components/HeroSection";
// import Features from "../Components/Features";

function TestimonialPage() {
  return (
    <>
      <HeroSection title="Testimonials" />
      <Testimonial />
      <About />
      {/* <Features /> */}
    </>
  );
}

export default TestimonialPage;
