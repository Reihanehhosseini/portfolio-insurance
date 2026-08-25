export const THIRD_PARTY_1405 = {
  year: 1405,

  // ==============================
  // نرخ پایه خودروهای سواری
  // مبالغ: تومان
  // ==============================

  baseRates: {
    lessThan4: 7_552_200,

    pridePaykanSepand: 8_944_000,

    fourCylinder: 10_513_200,

    moreThan4: 11_766_500,
  },

  // ==============================
  // تعهدات
  // ==============================

  coverage: {
    minimumFinancial: 70_000_000,

    maximumFinancial: 1_400_000_000,

    bodily: 2_800_000_000,

    driver: 2_100_000_000,
  },

  // ==============================
  // تخفیف عدم خسارت
  // ==============================

  noClaimDiscount: {
    0: 0,
    1: 5,
    2: 10,
    3: 15,
    4: 20,
    5: 25,
    6: 30,
    7: 35,
    8: 40,
    9: 45,
    10: 50,
    11: 55,
    12: 60,
    13: 65,
    14: 70,
  },

  // ==============================
  // کاهش تخفیف بابت خسارت
  // ==============================

  claimDiscountReduction: {
    financial: {
      one: 20,
      two: 30,
      threeOrMore: 40,
    },

    bodily: {
      one: 30,
      two: 70,
      threeOrMore: 100,
    },
  },

  // ==============================
  // افزایش بابت نوع کاربری
  // ==============================

  usageIncrease: {
    personal: 0,

    urbanPassenger: 10,

    intercityPassenger: 20,

    fuelTransport: 25,

    dangerousTransport: 50,

    drivingSchool: 15,

    racing: 50,
  },

  // ==============================
  // افزایش‌های مربوط به خودرو
  // ==============================

  vehicleIncrease: {
    oldVehicle: {
      startAfterYears: 15,

      percentPerYear: 2,

      maxPercent: 20,
    },

    negativePoint: {
      percentPerPoint: 1,

      maxPercent: 30,
    },

    dangerousViolation: {
      percentPerViolation: 0.5,

      maxPercent: 3,
    },
  },

  // ==============================
  // تخفیف‌های قانونی
  // ==============================

  legalDiscount: {
    firstRegistration: 5,

    safeDrivingCourse: 10,
  },

  // ==============================
  // بیمه حوادث راننده
  // ==============================

  driverInsurance: {
    ratePerThousand: 0.7,

    minimumCoverage: 2_100_000_000,
  },

  // ==============================
  // مدت بیمه کمتر از یک سال
  // ==============================

  shortTerm: [
    {
      maxDays: 5,
      percent: 5,
    },

    {
      maxDays: 15,
      percent: 10,
    },

    {
      maxDays: 30,
      percent: 15,
    },

    {
      maxDays: 60,
      percent: 25,
    },

    {
      maxDays: 90,
      percent: 30,
    },

    {
      maxDays: 120,
      percent: 40,
    },

    {
      maxDays: 150,
      percent: 50,
    },

    {
      maxDays: 180,
      percent: 60,
    },

    {
      maxDays: 270,
      percent: 80,
    },

    {
      maxDays: 365,
      percent: 100,
    },
  ],

  // ==============================
  // جریمه دیرکرد روزانه
  // ==============================

  delayPenaltyPerDay: {
    lessThan4: 20_690,

    pridePaykanSepand: 24_540,

    fourCylinder: 28_802,

    moreThan4: 32_226,
  },

  maxDelayDays: 365,

  // ==============================
  // مالیات ارزش افزوده
  // ==============================

  vatRate: 0.1,
};
