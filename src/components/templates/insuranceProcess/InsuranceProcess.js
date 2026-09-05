"use client";
import { motion } from "motion/react";
import React from "react";
import {
  Headphones,
  ShieldCheck,
  FilePenLine,
  UserRoundCheck,
  Phone,
  ArrowLeft,
  BookOpen,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "1.مشاوره",
    description: "پس از تماس با ما ، نیازها و شرایط شما بررسی و تحلیل میشود",
    icon: Headphones,
  },
  {
    number: "02",
    title: "2.اطلاعات اولیه ",
    description: " اطلاعات و مدارک مورد نیاز بیمه نامه به صورت آنلاین دریافت میشود",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "3.استعلام قیمت ",
    description: "حق بیمه محاسبه و به بیمه گذار اعلام می گردد ",
    icon: FilePenLine,
  },
  {
    number: "04",
    title: "4.پرداخت حق بیمه به صورت آنلاین",
    description: "پرداخت کارت به کارت حق بیمه و ارسال فیش واریز",
    icon: UserRoundCheck,
  },
  {
    number: "05",
    title: "5.صدور و دریافت بیمه نامه",
    description: "بیمه نامه به صورت آنلاین صادر و به آدرس شما ارسال می گردد",
    icon: ShieldCheck,
  },
];

export default function InsuranceProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden  px-5 sm:px-8 lg:px-12 mb-10 lg:mb-20  rounded-t-4xl  z-150 transform bg-white pt-8  sm:translate-y-0"
    >
      <div className="absolute bott0m-20 left-8 hidden opacity-40 sm:block"></div>
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-[16px] lg:text-xl font-bold leading-tight text-insurance  ">
            نحوه صدور بیمه نامه
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            از مشاوره تا دریافت بیمه نامه ، در چند قدم ساده همراه شما هستم
          </p>
          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-px w-10 bg-insurance/50" />
            <span className="h-2 w-2 rotate-45 bg-insurance/50" />
            <span className="h-px w-10 bg-insurance/50" />
          </div>
        </div>
        {/* desktop */}
        <div className="relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute left-[10%] right-[10%] top-11 h-px bg-box"
          />
          <div className="grid grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="mb-7 flex h-22 w-22 items-center justify-center rounded-full border border-gray-200 bg-white  shadow-[6px_6px_5px_rgba(36,52,71,0.7)] transition hover:scale-105">
                    <Icon
                      size={30}
                      strokeWidth={1.4}
                      className="text-[#263125]"
                    />
                  </div>
                  <div className="mt-7 msx-w-[230px]">
                    <h3 className="text-[15px] font-bold text-insurance">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-gray-500">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* mobile */}
        <div className="relative lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute right-2 top-8 bottom-8 w-px bg-insurance-text"
          />
          <div className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="relative flex items-center gap-8 "
                >
                  <div className="flex gap-5">
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-insurance text-[12px] text-insurance shadow-md"></div>
                  </div>
                  <div className="text-right">
                    <h3 className="text-[14px] font-bold text-insurance sm:text-[16px]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-6 text-gray-500 sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-end gap-4">
                    <div className="bg-box rounded-full p-4  shadow-[5px_4px_5px_rgba(36,52,71,0.7)]">
                      <Icon
                        size={30}
                        strokeWidth={1.4}
                        className="text-insurance"
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
