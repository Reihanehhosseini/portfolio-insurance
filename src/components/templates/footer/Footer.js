import React from "react";
import { PiInstagramLogoDuotone } from "react-icons/pi";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { PiTelegramLogoDuotone } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="flex px-10 items-center w-full h-20 bg-insurance justify-between">
      <div className="text-[14px] text-white hidden sm:block">
        آرامش امروز سرمایه فردا
      </div>
      <div className="text-[12px] text-white hidden md:block">
        تمامی حقوق محفوظ 1405
      </div>
      <div className="text-[12px] text-white flex flex-col gap-2">
        <span>طراحی و توسعه :</span>
        <span className="text-white/80 text-[11px]">ریحانه حسینی 09139593707</span>
      </div>
      <div className="flex gap-3 ">
        <div className="rounded-full border w-7 h-7 flex items-center justify-center border-box">
          <a href="https://instagram.com/shimaa_msd66" target="_blank">
            <PiInstagramLogoDuotone size={20} className="text-white" />
          </a>
        </div>
        <div className="rounded-full border w-7 h-7 flex items-center justify-center border-box">
          <a href="https://wa.me/989136541541" target="_blank">
            <PiWhatsappLogoDuotone size={22} className="text-white" />
          </a>
        </div>
        <div className="rounded-full border w-7 h-7 flex items-center justify-center border-box">
          <a href="https://t.me/989136541541" target="_blank">
            <PiTelegramLogoDuotone size={20} className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
}
