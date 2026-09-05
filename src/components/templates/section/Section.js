"use client";
import React, { useState } from "react";
import FAQ from "./Faq";
import About from "../aboutme/About";


export default function Section() {
  return (
    <div className="w-full flex flex-col justify-center px-5 gap-5 lg:flex-row pb-20 mt-20">
      <div className="flex-1 shadow-[6px_6px_5px_rgba(36,52,71,0.7)] sm:shadow-none rounded-2xl">
        <FAQ />
      </div>
      <div className="flex-1 flex items-start shadow-[6px_6px_5px_rgba(36,52,71,0.7)] sm:shadow-none rounded-2xl">
        <About />
      </div>
    </div>
  );
}
