import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import Features from "../Features/Features";
import HowItWorks from "../How-It-Works/HowItWorks";
import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <div>
        <Navbar/>   
        <HeroSection/>
        <Features/>
        <HowItWorks/>
        <Footer/>
    </div>
  );
}
