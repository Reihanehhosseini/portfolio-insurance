"use client";
import { motion } from "motion/react";
import Image from "next/image";
import {
  ShieldCheck,
  MessageCircle,
  FileCheck2,
  Handshake,
} from "lucide-react";

const whyUs = [
  {
    id: 1,
    title: "یادآوری تمدید بیمه",
    description:
      "10 روز قبل از سررسید ، برای تمدید بیمه با شما تماس گرفته خواهد شد",
    icon: ShieldCheck,
    position: "top-right",
  },
  {
    id: 2,
    title: "صدور بیمه به صورت اقساطی",
    description: "پرداخت حق بیمه در تعداد اقساط متناسب با درخواست شما",
    icon: MessageCircle,
    position: "top-left",
  },
  {
    id: 3,
    title: "پیگیری در زمان خسارت",
    description:
      "همراهی ما فقط به صدور بیمه نامه محدود نمیشود و در زمان خسارت نیز در کنار شما هستیم",
    icon: FileCheck2,
    position: "bottom-right",
  },
  {
    id: 4,
    title: "بدون نیاز به مراجعه حضوری",
    description: "مشاوره و صدور غیر حضوری بیمه نامه در کوتاه ترین زمان ممکن",
    icon: Handshake,
    position: "bottom-left",
  },
];

export default function WhyChooseMe() {
  return (
    <section dir="rtl" className="relative overflow-hidden mb-15 sm:my-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-5 text-center flex flex-col gap-5">
          <h2 className="text-[16px] lg:text-xl  font-bold text-insurance">
            چرا از ما بیمه بگیرید؟
          </h2>
          <p className=" text-sm leading-7 text-gray-500 sm:text-base">
            با تجربه و دانش چندین ساله در حوزه بیمه، تلاش می کنیم فرآیند انتخاب
            ، صدور و پیگیری بیمه را برای شما ساده، سریع و مطمئن کنیم.
          </p>
        </div>
        {/* desktop */}
        <div className="hidden relative mx-auto lg:flex min-h-125 max-w-5xl items-center justify-center">
          <div className="relative z-10 h-50 w-57.5 overflow-hidden rounded-xl  bg-[#EEF2F3] shadow-[15px_15px_0px_rgba(36,52,71,0.15)] md:h-107.5 md:w-82.5">
            <Image
              src="/images/IMG_9427.PNG"
              alt=""
              aria-hidden="true"
              fill
              className="object-cover"
              sizes="330px"
            />
          </div>
          {whyUs.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                key={item.id}
                className={`absolute z-20 flex max-w-55 flex-col items-center text-center gap-4 ${item.position === "top-right" ? "top-16 right-0" : ""} ${item.position === "top-left" ? "top-16 left-0" : ""} ${item.position === "bottom-right" ? "bottom-16 right-0" : ""} ${item.position === "bottom-left" ? "bottom-16 left-0" : ""}`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue bg-white text-insurance shadow-[5px_5px_5px_rgba(36,52,71,0.15)]">
                  <Icon
                    size={21}
                    strokeWidth={1.6}
                    className="text-insurance"
                  />
                </div>
                <div>
                  <h3 className="text-base font-bold text-insurance">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-6 text-gray-500 ">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        {/* mobile */}
        <div className="lg:hidden">
          <div className="relative mx-auto h-85 w-full sm:w-90 overflow-hidden rounded-xl bg-[#EEF2F3] shadow-[15px_15px_0px_rgba(36,52,71,0.15)]">
            <Image
              src="/images/IMG_9427.PNG"
              alt=""
              aria-hidden="true"
              fill
              className="object-cover"
              sizes="245px"
            />
          </div>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10">
            {whyUs.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  key={item.id}
                  className="flex flex-col items-center text-center gap-2"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-blue bg-white text-insurance shadow-[5px_5px_5px_rgba(36,52,71,0.15)]">
                    <Icon
                      size={19}
                      strokeWidth={1.6}
                      className="text-insurance"
                    />
                  </div>

                  <h3 className="text-sm font-bold text-insurance">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[11px] leading-5 text-gray-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
