"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdPhone } from "react-icons/md";
import Modal from "@/components/ui/Modal";
import { IoClose } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { PiCalculatorBold } from "react-icons/pi";
import { CiStickyNote } from "react-icons/ci";
import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlineEmojiPeople } from "react-icons/md";

 const navbarList = [
   {
     id: 1,
     title: "خانه",
     href: "#hero",
     icon: <AiOutlineHome size={25} className="text-[#ebd2a5]" />,
   },
   {
     id: 2,
     title: "خدمات",
     href: "#services",
     icon: <CiStickyNote size={25} className="text-[#ebd2a5]" />,
   },
   {
     id: 3,
     title: "استعلام و محاسبه",
     href: "#inquiry",
     icon: <PiCalculatorBold size={25} className="text-[#ebd2a5]" />,
   },
   {
     id: 4,
     title: "نحوه صدور",
     href: "#process",
     icon: <MdOutlineDone size={25} className="text-[#ebd2a5]" />,
   },
   {
     id: 5,
     title: "سوالات متداول",
     href: "#faq",
     icon: <BsQuestionCircle size={25} className="text-[#ebd2a5]" />,
   },
   {
     id: 6,
     title: "درباره من",
     href: "#about",
     icon: <MdOutlineEmojiPeople size={25} className="text-[#ebd2a5]" />,
   },
 ];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [activeIndex , setActiveIndex] = useState(0)

  const openModal = () => {
    setOpenMenu(true);
  };

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
      className={`absolute px-3 500:px-8  left-0 right-0 xl:px-0 py-2  sm:px-2  z-250 transition-all duration-500 `}
    >
      <div className="mx-auto flex h-20 items-center justify-between px-7 md:px-11">
        <div className="flex  gap-2 items-center">
          <GiHamburgerMenu
            className="size-7 fill-insurance lg:hidden "
            onClick={openModal}
          />
          <button
            onClick={() => {
              setShowPhone(!showPhone);
            }}
            className="items-center overflow-hidden  shadow-[5px_5px_5px_rgba(36,52,71,0.7)] gap-2 w-40.5 justify-center hidden lg:flex rounded-full bg-[rgba(255,255,255,0.75)] backdrop-blur-[10px] border border-[rgba(36,52,71,0.15)]  text-[12px] sm:px-6 py-1 text-insurance transition hover:scale-105 "
          >
            {showPhone ? "0913-654-1541" : "شیما مصدق"}
            <MdPhone />
          </button>
        </div>

        <nav className="hidden items-center py-2 px-20 rounded-full bg-transparent    transition-all duration-500  text-[13px] gap-10 min-[1102px]:gap-15 lg:flex justify-evenly  text-insurance">
          {navbarList.map((item) => (
            <Link key={item.id} href={item.href}>
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="text-[16px] font-semibold text-primary flex flex-col gap-1 justify-center text-center font-myfont">
          <div className="w-full flex justify-center md:mt-2 ">
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
      {openMenu && (
        <Modal>
          <div className="relative py-10 px-5 flex flex-col gap-8">
            <div className="w-full flex items-center justify-start">
              <IoClose
                size={25}
                className="text-insurance-text"
                onClick={() => {
                  setOpenMenu(false);
                }}
              />
            </div>
            <div className="flex flex-col items-center ">
              <h1 className="text-[#ebd2a5] font-bold text-[20px]">
                شیما مصدق
              </h1>
              <span className="text-[#C8A86B] text-[14px] mt-4">
                مشاوره و کارشناس بیمه
              </span>
              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                <span className="h-px w-15  bg-linear-to-r from-transparent via-[#C8A86B]/50 to-transparent" />
                <span className="h-1 w-1 rotate-45 bg-[#C8A86B]/50" />
                <span className="h-px w-15 bg-linear-to-r from-transparent via-[#C8A86B]/50 to-transparent" />
              </div>
            </div>
            <nav className="flex flex-col  ">
              {navbarList.map((item, index) => (
                <div key={item.id} className="relative ">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-6 py-5 px-5 rounded-2xl  text-[14px] transition-all duration-300 ${activeIndex === index ? "bg-[#0F2132] shadow-[2px_2px_5px_rgba(9,9,9,0.7)]" : ""} `}
                    onClick={() => {
                      setOpenMenu(false);
                      setActiveIndex(index);
                    }}
                  >
                    {item.icon}
                    <span className="text-[#ebd2a5] text-[12px] flex items-end mt-1">
                      {item.title}
                    </span>
                  </Link>
                  {index !== navbarList.length - 1 && (
                    <div className="absolute bottom-0 left-5 right-5 h-px  bg-linear-to-r from-transparent via-[#C8A86B]/20 to-transparent" />
                  )}
                </div>
              ))}
            </nav>
            <div className="absolute -bottom-58 -left-20 -z-10">
              <img src="/images/IMG_9307.JPG" className="w-100" alt="" />
            </div>
          </div>
        </Modal>
      )}
    </motion.header>
  );
}
