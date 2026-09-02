"use client";

import { useFormik } from "formik";
import { calculateThirdPartyInsurance } from "@/utils/thirdPartyInsurance/calculator";
import { THIRD_PARTY_1405 } from "@/utils/thirdPartyInsurance/rates1405";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Button from "@/components/modules/Button";

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-insurance";
const inputClassWindow =
  "text-[12px] text-insurance-text rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition focus:border-insurance";

export default function ThirdPartyInsuranceCalculator() {
  const [showResult, setShowResult] = useState(false);
  const [showCalc, setShowCalc] = useState(false);

  const formik = useFormik({
    initialValues: {
      vehicleType: "fourCylinder",
      manufactureYear: 1400,
      usage: "personal",
      noClaimYears: 0,
      financialClaimsCount: 0,
      bodilyClaimsCount: 0,
      mixedClaimsCount: 0,
      financialCoverage: THIRD_PARTY_1405.coverage.minimumFinancial,
      insuranceDuration: 365,
      delayDays: 0,
    },

    onSubmit: () => {
      setShowResult(true);
    },
  });

  const result = calculateThirdPartyInsurance(formik.values);

  const formatPrice = (value) =>
    new Intl.NumberFormat("fa-IR").format(Math.round(value || 0));

  return (
    <>
      <section dir="rtl" className="mx-auto w-full lg:hidden ">
        {!showCalc && (
          <div className="h-80 bg-[url(/images/IMG_9084.PNG)] bg-no-repeat bg-cover bg-center justify-start flex flex-col gap-4 items-center p-8">
            <div className=" rounded-2xl flex flex-col gap-5 px-5  items-center justify-start">
              <h1 className="text-insurance font-bold text-[18px]">
                محاسبه آنلاین بیمه خودرو
              </h1>
              <p className="text-insurance-text text-[14px] mt-10">
                جهت محاسبه حق بیمه خود دکمه شروع را فشار دهید
              </p>
            </div>
            <button
              className=" rounded-2xl px-7 py-2 bg-insurance text-white text-[13px]"
              onClick={() => {
                setShowCalc(true);
              }}
            >
              شروع محاسبه
            </button>
          </div>
        )}
        {/* FORM */}
        {showCalc && (
          <>
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-7 rounded-3xl bg-box p-6 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            >
              {/* HEADER */}
              <div className=" rounded-2xl flex flex-col gap-5 px-5  items-center">
                <h1 className="text-insurance font-bold text-[16px]">
                  محاسبه سریع بیمه خودرو
                </h1>
                <p className="text-insurance-text text-[14px]">
                  اطلاعات خودرو خود را وارد کنید
                </p>
              </div>

              {/* VEHICLE */}

              <div className="border-b border-gray-100">
                <Field label="نوع خودرو">
                  <select
                    name="vehicleType"
                    value={formik.values.vehicleType}
                    onChange={formik.handleChange}
                    className={`${inputClass} text-[12px] text-insurance-text`}
                  >
                    <option value="lessThan4">کمتر از ۴ سیلندر</option>

                    <option value="pridePaykanSepand">
                      پیکان، پراید و سپند
                    </option>

                    <option value="fourCylinder">سایر خودروهای ۴ سیلندر</option>

                    <option value="moreThan4">بیشتر از ۴ سیلندر</option>
                  </select>
                </Field>

                {/* سال ساخت */}

                <Field label="سال ساخت خودرو">
                  <input
                    type="number"
                    min="1300"
                    max="1405"
                    name="manufactureYear"
                    value={formik.values.manufactureYear}
                    onChange={formik.handleChange}
                    className={`${inputClass} text-[12px] text-insurance-text`}
                  />
                </Field>

                {/* سن خودرو */}
                <div className=" text-sm text-gray-500 mb-8">
                  سن خودرو: {result.details.vehicleAge}
                  سال
                </div>

                {/* کاربری */}

                <Field label="کاربری خودرو">
                  <select
                    name="usage"
                    value={formik.values.usage}
                    onChange={formik.handleChange}
                    className={`${inputClass} text-[12px] text-insurance-text`}
                  >
                    <option value="personal">شخصی</option>

                    <option value="urbanPassenger">
                      آژانس / مسافرکش درون‌شهری
                    </option>

                    <option value="intercityPassenger">
                      تاکسی / مسافرکش برون‌شهری
                    </option>

                    <option value="drivingSchool">تعلیم و آزمون رانندگی</option>

                    <option value="fuelTransport">حمل مواد سوختی</option>

                    <option value="dangerousTransport">
                      حمل مواد منفجره و خطرناک
                    </option>

                    <option value="racing">مسابقات رانندگی</option>
                  </select>
                </Field>
              </div>

              {/* NO CLAIM */}

              <div className="border-b border-gray-100">
                <Field label="چند سال سابقه عدم خسارت دارید؟">
                  <select
                    name="noClaimYears"
                    value={formik.values.noClaimYears}
                    onChange={formik.handleChange}
                    className={`${inputClass} text-[12px] text-insurance-text`}
                  >
                    {Object.entries(THIRD_PARTY_1405.noClaimDiscount).map(
                      ([year, percent]) => (
                        <option key={year} value={year}>
                          {year === "0"
                            ? "بدون تخفیف"
                            : `${year} سال - ${percent}٪ تخفیف`}
                        </option>
                      ),
                    )}
                  </select>
                </Field>
              </div>

              {/* CLAIM HISTORY */}

              <div className="border-b border-gray-100 ">
                <Field label="تعداد خسارت‌های مالی">
                  <input
                    type="number"
                    min="0"
                    name="financialClaimsCount"
                    value={formik.values.financialClaimsCount}
                    onChange={formik.handleChange}
                    className={`${inputClass} text-[12px] text-insurance-text`}
                  />
                </Field>

                <Field label="تعداد خسارت‌های بدنی">
                  <input
                    type="number"
                    min="0"
                    name="bodilyClaimsCount"
                    value={formik.values.bodilyClaimsCount}
                    onChange={formik.handleChange}
                    className={`${inputClass} text-[12px] text-insurance-text`}
                  />
                </Field>

                <Field label="تعداد حوادثی که هم خسارت مالی و هم بدنی داشته‌اند">
                  <input
                    type="number"
                    min="0"
                    name="mixedClaimsCount"
                    value={formik.values.mixedClaimsCount}
                    onChange={formik.handleChange}
                    className={`${inputClass} text-[12px] text-insurance-text`}
                  />
                </Field>
              </div>

              {/* COVERAGE */}

              <div className="border-b border-gray-100 ">
                <Field label="سقف تعهد مالی">
                  <select
                    name="financialCoverage"
                    value={formik.values.financialCoverage}
                    onChange={formik.handleChange}
                    className={`${inputClass} text-[12px] text-insurance-text`}
                  >
                    <option value="70000000">۷۰ میلیون تومان</option>

                    <option value="100000000">۱۰۰ میلیون تومان</option>

                    <option value="200000000">۲۰۰ میلیون تومان</option>

                    <option value="300000000">۳۰۰ میلیون تومان</option>

                    <option value="500000000">۵۰۰ میلیون تومان</option>

                    <option value="700000000">۷۰۰ میلیون تومان</option>

                    <option value="1000000000">۱ میلیارد تومان</option>

                    <option value="1400000000">۱.۴ میلیارد تومان</option>
                  </select>
                </Field>

                {Number(formik.values.financialCoverage) >
                  THIRD_PARTY_1405.coverage.minimumFinancial && (
                  <div className="rounded-xl bg-blue-50 p-3 text-xs leading-6 text-blue-700">
                    محاسبه دقیق حق بیمه پوشش مالی مازاد به نرخ و ضوابط شرکت بیمه
                    وابسته است و در این نسخه به مبلغ پایه اضافه نشده است.
                  </div>
                )}
              </div>

              {/* DURATION */}

              <div>
                <Field label="مدت بیمه‌نامه">
                  <select
                    name="insuranceDuration"
                    value={formik.values.insuranceDuration}
                    onChange={formik.handleChange}
                    className={`${inputClass} text-[12px] text-insurance-text`}
                  >
                    <option value="365">یک ساله</option>

                    <option value="270">۹ ماهه</option>

                    <option value="180">۶ ماهه</option>

                    <option value="150">۵ ماهه</option>

                    <option value="120">۴ ماهه</option>

                    <option value="90">۳ ماهه</option>

                    <option value="60">۲ ماهه</option>

                    <option value="30">یک ماهه</option>
                  </select>
                </Field>

                <Field label="تعداد روزهای دیرکرد">
                  <input
                    type="number"
                    min="0"
                    max="365"
                    name="delayDays"
                    value={formik.values.delayDays}
                    onChange={formik.handleChange}
                    className={inputClass}
                  />
                </Field>
              </div>

              {/* BUTTON */}

              <button
                type="submit"
                className="w-full rounded-xl bg-insurance py-3 font-bold text-[12px] text-white transition hover:opacity-90"
              >
                محاسبه حق بیمه
              </button>
              <button
                onClick={() => {
                  setShowCalc(false);
                }}
                className="w-full rounded-xl bg-insurance py-3 font-bold text-[12px] text-white transition hover:opacity-90"
              >
                انصراف
              </button>
            </form>

            {/* RESULT */}
            {showResult && (
              <div className="mt-6 overflow-hidden rounded-3xl bg-insurance text-white shadow-[0_10px_35px_rgba(36,52,71,0.2)]">
                <div className="p-7 text-center">
                  <p className="text-sm text-white/60">حق بیمه تقریبی</p>

                  <div className="mt-3">
                    <span className="text-4xl font-black">
                      {formatPrice(result.total)}
                    </span>

                    <span className="mr-2 text-sm text-white/60">تومان</span>
                  </div>
                </div>

                {/* DETAILS */}

                <div className="border-t border-white/10 px-6 py-5">
                  <ResultRow label="حق بیمه پایه" value={result.baseRate} />

                  {result.totalIncrease > 0 && (
                    <ResultRow
                      label="افزایش‌های مربوط به ریسک"
                      value={result.totalIncrease}
                      plus
                    />
                  )}

                  {result.legalDiscount > 0 && (
                    <ResultRow
                      label="تخفیف‌های قانونی"
                      value={result.legalDiscount}
                      minus
                    />
                  )}

                  {result.noClaimDiscount > 0 && (
                    <ResultRow
                      label={`تخفیف عدم خسارت (${result.details.finalNoClaimPercent}٪)`}
                      value={result.noClaimDiscount}
                      minus
                    />
                  )}

                  <ResultRow
                    label="بیمه حوادث راننده"
                    value={result.driverInsurance}
                    plus
                  />

                  {result.delayPenalty > 0 && (
                    <ResultRow
                      label="جریمه دیرکرد"
                      value={result.delayPenalty}
                      plus
                    />
                  )}

                  <div className="mt-4 border-t border-white/10 pt-4">
                    <ResultRow
                      label="مالیات ارزش افزوده"
                      value={result.vat}
                      plus
                    />
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <p className="text-center text-xs leading-6 text-white/40">
                    مبلغ نمایش‌داده‌شده برآوردی است و مبلغ نهایی صدور می‌تواند
                    با توجه به استعلام سوابق، شرکت بیمه و شرایط بیمه‌نامه متفاوت
                    باشد.
                  </p>
                </div>
              </div>
            )}
          </>
        )}
      </section>
      {/* ------ windows -------------------------------------------------- */}
      <section className="hidden w-full py-10 h-auto lg:flex bg-[url(/images/IMG_9084.PNG)] bg-no-repeat bg-cover bg-center">
        <form onSubmit={formik.handleSubmit} className="px-10 flex-2 ">
          <div className=" rounded-2xl flex flex-col gap-2  mb-10">
            <h1 className="text-insurance font-bold text-[16px]">
              محاسبه سریع بیمه خودرو
            </h1>
            <p className="text-insurance-text text-[14px]">
              اطلاعات خودرو خود را وارد کنید
            </p>
          </div>
          <div className=" flex gap-7">
            <Field label="نوع خودرو">
              <select
                name="vehicleType"
                value={formik.values.vehicleType}
                onChange={formik.handleChange}
                className={inputClassWindow}
              >
                <option value="lessThan4">کمتر از ۴ سیلندر</option>

                <option value="pridePaykanSepand">پیکان، پراید و سپند</option>

                <option value="fourCylinder">سایر خودروهای ۴ سیلندر</option>

                <option value="moreThan4">بیشتر از ۴ سیلندر</option>
              </select>
            </Field>

            {/* سال ساخت */}

            <Field label="سال ساخت ">
              <input
                type="number"
                min="1300"
                max="1405"
                name="manufactureYear"
                value={formik.values.manufactureYear}
                onChange={formik.handleChange}
                className={inputClassWindow}
              />
            </Field>

            {/* کاربری */}

            <Field label="کاربری خودرو">
              <select
                name="usage"
                value={formik.values.usage}
                onChange={formik.handleChange}
                className={inputClassWindow}
              >
                <option value="personal">شخصی</option>

                <option value="urbanPassenger">
                  آژانس / مسافرکش درون‌شهری
                </option>

                <option value="intercityPassenger">
                  تاکسی / مسافرکش برون‌شهری
                </option>

                <option value="drivingSchool">تعلیم و آزمون رانندگی</option>

                <option value="fuelTransport">حمل مواد سوختی</option>

                <option value="dangerousTransport">
                  حمل مواد منفجره و خطرناک
                </option>

                <option value="racing">مسابقات رانندگی</option>
              </select>
            </Field>
          </div>
          <div className="flex flex-wrap gap-5 mt-2">
            <Field label="  سابقه عدم خسارت ">
              <select
                name="noClaimYears"
                value={formik.values.noClaimYears}
                onChange={formik.handleChange}
                className={inputClassWindow}
              >
                {Object.entries(THIRD_PARTY_1405.noClaimDiscount).map(
                  ([year, percent]) => (
                    <option key={year} value={year}>
                      {year === "0"
                        ? "بدون تخفیف"
                        : `${year} سال - ${percent}٪ تخفیف`}
                    </option>
                  ),
                )}
              </select>
            </Field>
            <Field label="تعداد خسارت‌های مالی">
              <input
                type="number"
                min="0"
                name="financialClaimsCount"
                value={formik.values.financialClaimsCount}
                onChange={formik.handleChange}
                className={inputClassWindow}
              />
            </Field>

            <Field label="تعداد خسارت‌های بدنی">
              <input
                type="number"
                min="0"
                name="bodilyClaimsCount"
                value={formik.values.bodilyClaimsCount}
                onChange={formik.handleChange}
                className={inputClassWindow}
              />
            </Field>

            <Field label=" هم خسارت مالی و هم بدنی ">
              <input
                type="number"
                min="0"
                name="mixedClaimsCount"
                value={formik.values.mixedClaimsCount}
                onChange={formik.handleChange}
                className={inputClassWindow}
              />
            </Field>
          </div>
          <div className="flex gap-7">
            <Field label="سقف تعهد مالی">
              <select
                name="financialCoverage"
                value={formik.values.financialCoverage}
                onChange={formik.handleChange}
                className={inputClassWindow}
              >
                <option value="70000000">۷۰ میلیون تومان</option>

                <option value="100000000">۱۰۰ میلیون تومان</option>

                <option value="200000000">۲۰۰ میلیون تومان</option>

                <option value="300000000">۳۰۰ میلیون تومان</option>

                <option value="500000000">۵۰۰ میلیون تومان</option>

                <option value="700000000">۷۰۰ میلیون تومان</option>

                <option value="1000000000">۱ میلیارد تومان</option>

                <option value="1400000000">۱.۴ میلیارد تومان</option>
              </select>
            </Field>
            <Field label="مدت بیمه‌نامه">
              <select
                name="insuranceDuration"
                value={formik.values.insuranceDuration}
                onChange={formik.handleChange}
                className={inputClassWindow}
              >
                <option value="365">یک ساله</option>

                <option value="270">۹ ماهه</option>

                <option value="180">۶ ماهه</option>

                <option value="150">۵ ماهه</option>

                <option value="120">۴ ماهه</option>

                <option value="90">۳ ماهه</option>

                <option value="60">۲ ماهه</option>

                <option value="30">یک ماهه</option>
              </select>
            </Field>

            <Field label="تعداد روز دیرکرد">
              <input
                type="number"
                min="0"
                max="365"
                name="delayDays"
                value={formik.values.delayDays}
                onChange={formik.handleChange}
                className={inputClassWindow}
              />
            </Field>
            <Button title="محاسبه حق بیمه" bgColor="insurance" color="white"/>
          </div>
        </form>
        <div className="flex-1 px-10 flex items-center">
          {showResult && (
            <div className="mt-6 overflow-hidden rounded-3xl bg-transparent backdrop-blur-3xl text-insurance shadow-[0_10px_35px_rgba(36,52,71,0.2)]">
              <div className="p-7 text-center">
                <p className="text-sm text-white/60">حق بیمه تقریبی</p>

                <div className="mt-3">
                  <span className="text-4xl font-black">
                    {formatPrice(result.total)}
                  </span>

                  <span className="mr-2 text-sm text-white/60">تومان</span>
                </div>
              </div>

              {/* DETAILS */}

              <div className="border-t border-white/10 px-6 py-5">
                <ResultRow label="حق بیمه پایه" value={result.baseRate} />

                {result.totalIncrease > 0 && (
                  <ResultRow
                    label="افزایش‌های مربوط به ریسک"
                    value={result.totalIncrease}
                    plus
                  />
                )}

                {result.legalDiscount > 0 && (
                  <ResultRow
                    label="تخفیف‌های قانونی"
                    value={result.legalDiscount}
                    minus
                  />
                )}

                {result.noClaimDiscount > 0 && (
                  <ResultRow
                    label={`تخفیف عدم خسارت (${result.details.finalNoClaimPercent}٪)`}
                    value={result.noClaimDiscount}
                    minus
                  />
                )}

                <ResultRow
                  label="بیمه حوادث راننده"
                  value={result.driverInsurance}
                  plus
                />

                {result.delayPenalty > 0 && (
                  <ResultRow
                    label="جریمه دیرکرد"
                    value={result.delayPenalty}
                    plus
                  />
                )}

                <div className="mt-4 border-t border-white/10 pt-4">
                  <ResultRow
                    label="مالیات ارزش افزوده"
                    value={result.vat}
                    plus
                  />
                </div>
              </div>

              <div className="px-6 pb-6">
                <p className="text-center text-xs leading-6 text-white/40">
                  مبلغ نمایش‌داده‌شده برآوردی است و مبلغ نهایی صدور می‌تواند با
                  توجه به استعلام سوابق، شرکت بیمه و شرایط بیمه‌نامه متفاوت
                  باشد.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

// ==========================================
// Components
// ==========================================

function SectionTitle({ children }) {
  return <h3 className="mb-5 text-lg font-bold text-insurance">{children}</h3>;
}

function Field({ label, children }) {
  return (
    <div className="mb-5">
      <label className="mb-2 block text-sm font-medium text-gray-700">
        {label}
      </label>

      {children}
    </div>
  );
}

function ResultRow({ label, value, plus = false, minus = false }) {
  return (
    <div className="flex items-center justify-between py-2 text-sm">
      <span className="text-white/60">{label}</span>

      <span
        className={
          minus ? "text-emerald-300" : plus ? "text-amber-300" : "text-white"
        }
      >
        {minus ? "-" : plus ? "+" : ""}
        {new Intl.NumberFormat("fa-IR").format(Math.round(value || 0))} تومان
      </span>
    </div>
  );
}
