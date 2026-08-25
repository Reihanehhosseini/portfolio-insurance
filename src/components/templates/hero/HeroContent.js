"use client";

import React from "react";
import { motion } from "motion/react";

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.2,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="h-full w-5/5 flex items-star justify-center absolute top-20 iphon11:top-29 480:top-27 md:top-25 lg:top-38 xl:top-40 left-1/2 -translate-x-1/2  md:-left-10 lg:-left-25 rounded-2xl z-30 "
    >
      <div className="mx-auto w-full  px-3">
        <div className="flex flex-col gap-4 480:gap-5 text-center md:text-right">
          <motion.h3 variants={item}>
            <span className="hidden md:block text-[13px] lg:text-[16px] text-[#23395B] font-bold">
              برای امروز، برای فردا
            </span>
          </motion.h3>
          <motion.h1
            variants={item}
            className="text-[18px] xl:text-[24px] md:flex font-vazirmatn! text-insurance hidden"
          >
            <span className="font-vazirmatn!">با اطمینان زندگی کنید </span>
            <br />
            <span>، </span>
            <span className="font-vazirmatn! ">ما کنار شما هستیم</span>
          </motion.h1>
          <motion.h1
            variants={item}
            className="text-[20px] iphon11:text-[24px] md:hidden flex flex-col font-vazirmatn! text-insurance "
          >
            <span className="font-vazirmatn!">آینده ای مطمئن</span>
            <span className="font-vazirmatn! ">با انتخابی هوشمند</span>
          </motion.h1>
          <motion.div className="flex flex-col gap-2  " variants={item}>
            <button className="flex font-bold justify-center md:justify-start rounded-full text-[13px] lg:text-[14px] xl:text-[16px] text-[#23395B] transition hover:scale-105 ">
              شیما مصدق
            </button>
            <div className=" text-[12px] lg:text-[14px] leading-7 text-[#6B7280] font-estedad ">
              <span className="">
                ارائه انواع بیمه های معتبر ، مشاوره تخصصی و خدمات بیمه ای
              </span>
            </div>
          </motion.div>

          <motion.p
            variants={item}
            className="text-[12px] lg:text-[14px] text-insurance-text font-estedad"
          >
            14 سال تجربه در صنعت بیمه
          </motion.p>
          <motion.div
            variants={item}
            className=" flex mt-4 md:mt-0 gap-4 480:gap-2 md:gap-4 flex-col md:flex-row w-full items-center  "
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              className=" text-[12px] xl:text-[14px]  cursor-pointer rounded-full w-38 iphon11:w-40 md:w-35 xl:w-45 bg-insurance px-6 py-2 text-white transition hover:scale-105"
            >
              مشاوره رایگان
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="text-[12px] xl:text-[14px]  cursor-pointer rounded-full w-38 iphon11:w-40 md:w-35 xl:w-45 bg-[rgba(255,255,255,0.75)] backdrop-blur-[10px] border border-[rgba(36,52,71,0.15)] px-6 py-2 text-insurance transition  hover:scale-105"
            >
              <a href="#inquiry">استعلام حق بیمه</a>
            </motion.button>
          </motion.div>
          <motion.div
            variants={item}
            className="hidden xl:flex gap-17 items-center mt-10"
          >
            <div className="flex relative">
              <span className="bg-insurance-text border border-white rounded-full p-5"></span>
              <span className="absolute right-6 bg-insurance-text border border-white rounded-full p-5"></span>
              <span className="absolute right-12 bg-insurance-text border border-white rounded-full p-5"></span>
            </div>
            <div className="text-insurance-text flex flex-col gap-3">
              <span className="text-insurance text-[14px]">
                +1,200 مشتری راضی
              </span>
              <span className="text-[12px]">همراه شما در تمام مراحل بیمه</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
