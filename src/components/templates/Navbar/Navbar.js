"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdPhone } from "react-icons/md";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 2.3 }}
      className={`fixed px-3 500:px-8  left-0 right-0 xl:px-0 py-2  sm:px-2  z-50 transition-all duration-500 ${scrolled ? "mt-0!  pt-0! backdrop-blur-3xl bg-white/10 shadow-sm" : "bg-transparent "}`}
    >
      <div className="mx-auto flex h-20 items-center justify-between px-7 md:px-11">
        <div className="flex  gap-2 items-center">
          <GiHamburgerMenu className="size-7 fill-insurance lg:hidden" />
          <button className="items-center gap-2 hidden lg:flex rounded-full bg-[rgba(255,255,255,0.75)] backdrop-blur-[10px] border border-[rgba(36,52,71,0.15)] px-2 text-[12px] sm:px-6 py-1 text-insurance transition hover:scale-105 ">
            شیما مصدق
            <MdPhone />
          </button>
        </div>

        <nav className="hidden items-center py-2 px-20 rounded-full bg-transparent  backdrop-blur-sm   transition-all duration-500  text-[13px] gap-10 min-[1102px]:gap-15 lg:flex justify-evenly  text-insurance">
          <a href="#hero">خانه</a>
          <a href="#services">خدمات</a>
          <a href="#inquiry">استعلام و محاسبه</a>
          <a href="#process">نحوه صدور</a>
          <a href="#faq">سوالات متداول</a>
          <a href="#about">درباره من</a>
        </nav>
        <div className="text-[16px] font-semibold text-primary flex flex-col gap-1 justify-center text-center font-myfont">
          <div className="w-full flex justify-center md:mt-2">
            <img
              src="/images/logoblue.png"
              alt="logo"
              className="w-9 md:w-13 xl:w-15"
            />
          </div>
          <span className="text-insurance text-[12px] font-estedad">
            بیمه آسیا
          </span>
        </div>
      </div>
    </motion.header>
  );
}
