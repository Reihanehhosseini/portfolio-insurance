"use client";
import React, { useState } from "react";
import FAQ from "./Faq";
import About from "../aboutme/About";

export default function Section() {
  return (
    <div className="w-full flex flex-col justify-center px-5 gap-5 lg:flex-row pb-20">
      <div className="flex-1">
        <FAQ />
      </div>
      <div className="flex-1 flex items-start">
        <About />
      </div>
    </div>
  );
}
