import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { MdOutlineWhatsapp } from "react-icons/md";
import { LiaTelegram } from "react-icons/lia";

export default function Footer() {
  return (
    <div className="flex px-5 sm:px-10 items-center w-full h-20 bg-insurance justify-between">
      <div className="text-[14px] text-white hidden sm:block">
        آرامش امروز،  سرمایه فردا
      </div>
      <div className="text-[12px] text-white hidden md:block">
        تمامی حقوق محفوظ 1405
      </div>
      <div className="text-[12px] text-white flex flex-col gap-2">
        <span>طراحی و توسعه :</span>
        <span className="text-white/80 text-[11px]">
          ریحانه حسینی 09139593707
        </span>
      </div>
      <div className="flex gap-1 sm:gap-3 ">
        <div className="rounded-full  w-8 h-8 flex items-center justify-center border-box">
          <a href="https://instagram.com/shimaa_msd66" target="_blank">
            <IoLogoInstagram size={20} className="text-white" />
          </a>
        </div>
        <div className="rounded-full  w-8 h-8 flex items-center justify-center border-box">
          <a href="https://wa.me/989136541541" target="_blank">
            <MdOutlineWhatsapp size={22} className="text-white" />
          </a>
        </div>
        <div className="rounded-full  w-8 h-8 flex items-center justify-center border-box">
          <a href="https://t.me/989136541541" target="_blank">
            <LiaTelegram size={20} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
