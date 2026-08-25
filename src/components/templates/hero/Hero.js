import React from "react";
import Background from "./Background";
import LightEffect from "./LightEffect";
import HeroContent from "./HeroContent";


export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden ">
      <Background />
      <LightEffect/>
      <HeroContent/>
    </section>
  );
}
