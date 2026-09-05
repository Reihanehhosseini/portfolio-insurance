"use client";
import React from "react";
import { services } from "@/data/data";
import { motion } from "motion/react";
import { useState } from "react";

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  return (
    <motion.section
      dir="rtl"
      id="services"
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.9,
        delay: 3.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full bg-white flex flex-col items-center justify-center py-8 gap-7   rounded-t-4xl transform -translate-y-6 mb-10 sm:mb-0 sm:-translate-y-55 md:-translate-y-15 "
    >
      <h1 className="text-[16px] font-bold text-insurance">خدمات بیمه ای ما</h1>
      <p className="text-[14px] text-center text-insurance-text px-3 mb-5">
        ما در زمینه های بیمه ای ذیل آماده ارائه خدمات به صورت شرایطی به شما می
        باشیم، اعم از:
      </p>
      <div className="flex flex-wrap  gap-4 justify-center min-[1300px]:hidden ">
        {services.slice(0, showAll ? services.length : 4).map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="w-40 h-30 bg-white rounded-xl  shadow-[2px_2px_5px_rgba(36,52,71,0.7)] flex flex-col items-center justify-center gap-1 py-3"
          >
            <div className="w-full flex items-center justify-center">
              <span className="bg-box rounded-full p-3 text-insurance">
                {item.icon}
              </span>
            </div>
            <h4 className="text-insurance text-[14px]">{item.title}</h4>
            <p className="text-[11px] hidden min-[1300px]:block">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="hidden min-[1300px]:flex flex-wrap  gap-4 justify-center ">
        {services.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="w-40 h-50 bg-white rounded-xl   shadow-[2px_3px_5px_rgba(36,52,71,0.7)] flex flex-col items-center justify-center gap-4 py-3 transition hover:scale-105"
          >
            <div className="w-full flex items-center justify-center">
              <span className="bg-box rounded-full p-3">{item.icon}</span>
            </div>
            <h4 className="text-insurance">{item.title}</h4>
            <p className="text-[11px] text-insurance-text">{item.desc}</p>
          </motion.div>
        ))}
      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="min-[1300px]:hidden mx-5 mt-6 py-2 px-9 rounded-full bg-insurance text-white text-[12px] sm:text-[14px] transition-all duration-300 hover:scale-105  shadow-[5px_5px_5px_rgba(36,52,71,0.7)]"
      >
        {showAll ? "بستن خدمات" : "مشاهده همه خدمات"}
      </button>
    </motion.section>
  );
}
