"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { BsChatLeftText } from "react-icons/bs";
import Button from "@/components/modules/Button";

const faqs = [
  {
    id: 1,
    question: "برای انتخاب بیمه مناسب از کجا شروع کنم؟",
    answer:
      "با توجه به نیاز، شرایط و میزان پوشش موردنظر شما، گزینه‌های مناسب بررسی و مقایسه می‌شوند تا بتوانید بهترین انتخاب را داشته باشید.",
  },
  {
    id: 2,
    question: "آیا برای دریافت مشاوره باید حضوری مراجعه کنم؟",
    answer:
      "خیر، شما می‌توانید به صورت تلفنی یا آنلاین با من در ارتباط باشید تا با توجه به نیاز و شرایط شما، بهترین گزینه بیمه‌ای پیشنهاد شود.",
  },
  {
    id: 3,
    question: "چه مدارکی برای صدور بیمه‌نامه لازم است؟",
    answer:
      "مدارک موردنیاز بسته به نوع بیمه متفاوت است. پس از مشخص شدن نوع بیمه، مدارک لازم به شما اعلام خواهد شد.",
  },
  {
    id: 4,
    question: "آیا امکان مقایسه چند بیمه‌نامه وجود دارد؟",
    answer:
      "بله، می‌توانیم شرایط، پوشش‌ها و مزایای گزینه‌های مختلف را بررسی کنیم تا انتخاب مناسب‌تری داشته باشید.",
  },
  {
    id: 5,
    question: "روند صدور بیمه‌نامه چقدر زمان می‌برد؟",
    answer:
      "زمان صدور به نوع بیمه و شرایط آن بستگی دارد و پس از بررسی مدارک، زمان تقریبی به شما اعلام می‌شود.",
  },
  {
    id: 6,
    question: "آیا بعد از صدور بیمه‌نامه خدمات پشتیبانی ارائه می‌شود؟",
    answer:
      "بله، خدمات مشاوره و پشتیبانی پس از صدور بیمه‌نامه نیز در دسترس شما خواهد بود.",
  },
  {
    id: 7,
    question: "در صورت بروز خسارت چه کاری باید انجام دهم؟",
    answer:
      "در صورت بروز خسارت، ابتدا با من تماس بگیرید تا مراحل لازم و مدارک موردنیاز برای پیگیری خسارت به شما توضیح داده شود.",
  },
  {
    id: 8,
    question: "چگونه می‌توانم بیمه‌نامه خود را تمدید کنم؟",
    answer:
      "پیش از پایان اعتبار بیمه‌نامه می‌توانید برای بررسی شرایط تمدید و دریافت راهنمایی با من در ارتباط باشید.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(0);
  const [showFaq, setShowFaq] = useState(false);

  const toggleFAQ = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      dir="ltr"
      id="faq"
      className="relative rounded-2xl pt-3 bg-[url(/images/accardeon.PNG)] py-5"
    >
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-full  " />
      <div className="mx-auto w-full max-w-7xl px-3 sm:px-8 lg:px-10" dir="rtl">
        <div className="grid items-center grid-cols-1">
          {/* FAQ Accordion */}
          <div className="order-2 ">
            <div
              className={`space-y-3 ${showFaq ? "h-auto sm:h-210" : "h-13"} overflow-hidden `}
            >
              <div className=" rounded-2xl flex items-center  justify-between">
                <div className="flex lg:gap-8 gap-3 items-center">
                  <div className="bg-box rounded-full p-4">
                    <BsChatLeftText className="text-insurance w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-white text-[12px] lg:text-[15px]">
                      سوالات متداول
                    </span>
                    <span className="text-white text-[10px] hidden lg:block">
                      پاسخ به پرسش های شما
                    </span>
                  </div>
                </div>
                <Button
                  title={showFaq ? "انصراف" : "مشاهده همه"}
                  bgColor="transparent"
                  color="white"
                  onClick={() => {
                    setShowFaq(!showFaq);
                  }}
                />
              </div>
              {faqs.map((faq, index) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    layout
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    className={`overflow-hidden rounded-2xl border backdrop-blur-xl transition-all duration-300 ${isOpen ? "border-white/70 bg-[#f8f4ed]/80" : "border-white/60 bg-white/25 hover:bg-white/45"}`}
                  >
                    {/* Question */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(faq.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 px-5 py-5 text-right sm:px-6 sm:py-5"
                    >
                      {/* Number */}
                      <span className="shrink-0 text-sm font-medium tracking-wider text-insurance sm:text-base">
                        {String(faq.id).padStart(2, "0")}
                      </span>

                      {/* Divider */}
                      <span className="h-7 w-px shrink-0 bg-insurance/20" />

                      {/* Question */}
                      <span className="flex-1 text-sm font-medium leading-7 text-insurance sm:text-base">
                        {faq.question}
                      </span>

                      {/* Icon */}
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-insurance">
                        {isOpen ? (
                          <Minus size={18} strokeWidth={1.7} />
                        ) : (
                          <Plus size={18} strokeWidth={1.7} />
                        )}
                      </span>
                    </button>

                    {/* Answer */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                        >
                          <div className="border-t border-insurance/10 px-5 pb-6 pt-4 sm:px-6">
                            <p className="text-sm leading-8 text-insurance/75 sm:text-[15px]">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
