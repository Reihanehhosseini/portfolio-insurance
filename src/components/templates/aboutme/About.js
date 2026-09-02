"use client";
import React from "react";
import { motion } from "motion/react";
import { CiFaceMeh } from "react-icons/ci";
import Button from "@/components/modules/Button";
import { useState } from "react";

const aboutInfo = [
  {
    id: 1,
    title: "24/7",
    desc: "پشتیبانی",
  },
  {
    id: 2,
    title: "+14",
    desc: "سال تجربه",
  },
  {
    id: 3,
    title: "اصغهان",
    desc: "محل فعالیت",
  },
];
export default function About() {
  const [showFaq, setShowFaq] = useState(false);
  return (
    <div
      className="w-full rounded-2xl bg-[url(/images/blue.PNG)]"
      id="about"
    >
      <div className=" w-full lg:px-5">
        <div
          className={` ${showFaq ? "h-218" : "h-21"} overflow-hidden bg-transparent  rounded-2xl flex flex-col justify-between px-1  text-justify `}
        >
          <div className=" rounded-2xl flex items-center mt-3  justify-between  px-6">
            <div className="flex lg:gap-8 gap-3 items-center">
              <div className="bg-box rounded-full p-4">
                <CiFaceMeh className="text-insurance w-5 h-5" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-white text-[12px] lg:text-[15px]">
                  درباره من
                </span>
              </div>
            </div>
            <Button
              title={showFaq ? "بستن" : "مشاهده "}
              bgColor="transparent"
              color="white"
              onClick={() => {
                setShowFaq(!showFaq);
              }}
            />
          </div>
          <h1 className="text-[18px] text-white/80 mt-10 font-bold px-6">
            درباره من
          </h1>
          <p className="text-white/60  text-[14px] lg:text-[16px] px-6">
            من شیما مصدق کارشناس مدیریت بیمه با 14 سال تجربه در شرکت بیمه آسیا ،
            آماده ارائه مشاوره و صدور بیمه نامه به شما در هر ساعت از شبانه روز
            می باشم.
          </p>
          <p className="text-white/60 text-[14px] lg:text-[16px] px-6">
            صدور بیمه نامه به صورت نقد و اقساط متناسب با توانایی و درخواست شما
            صورت می پذیرد و باز پرداخت اقساط بدون چک و در بازه زمانی 2 تا 8 ماه
            صورت می گیرد
          </p>
          <p className="text-white/60 text-[14px] lg:text-[16px] px-6">
            هدف ما ارائه بهترین راهکارهای بیمه ای بر اساس نیاز واقعی شماست، با
            شفافیت صداقت و خدمات حرفه ای
          </p>
          <p className="text-white/60 text-[14px] lg:text-[16px] px-6">
            ارتباط ما با شما بعد از صدور بیمه نامه به پایان نمی رسد . از پیگیری امور بیمه نامه و پاسخگویی به سوالات تا راهنمایی و همراهی در زمان خسارت در کنار شما هستم تا با آرامش و اطمینان بیشتری از پوشش بیمه خود استفاده کنید
          </p>
          <div className="w-full grid grid-cols-3 gap-1 sm:gap-4 items-center justify-between  mt-5">
            {aboutInfo.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className=" border backdrop-blur-xl border-white/60 bg-white/25 hover:bg-white/45 mb-10 h-30 rounded-2xl flex flex-col justify-center items-center gap-2"
              >
                <span className="text-insurance text-[13px]">{item.title}</span>
                <span className="text-insuranc text-[13px]">{item.desc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
