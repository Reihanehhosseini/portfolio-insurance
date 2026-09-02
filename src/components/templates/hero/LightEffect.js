"use client";

import React from "react";
import { motion } from "motion/react";

export default function LightEffect() {
  return (
    <motion.div
      initial={{ x: "-120%", opacity: 0 }}
      animate={{ x: "180%", opacity: [0, 0.7, 0] }}
      transition={{ duration: 2, delay: 1.3, ease: "easeInOut", repeat: true }}
      className="absolute top-[80%] right-[8%] w-150 h-45 rotate-[-18deg] bg-white/50 blur-3xl pointer-events-none z-20"
    />
  );
}
