"use client";
import React, { useEffect, useState } from "react";

export default function Background() {
  return (
    <div className="overflow-hidden ">
      <img
        src="/images/hero-mob (1).PNG"
        alt="background"
        className="block md:hidden  overflow-hidden w-full h-full object-cover object-center select-none pointer-events-none 500:-translate-y-25 sm:-translate-y-60"
      />
      <img
        src="/images/hero-full.PNG"
        alt="background"
        className="hidden md:block  w-full h-full object-cover object-center select-none pointer-events-none! -translate-y-10!"
      />
    </div>
  );
}
