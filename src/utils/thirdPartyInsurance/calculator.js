import { THIRD_PARTY_1405 } from "./rates1405";

// ==========================================
// Helpers
// ==========================================

const clamp = (value, min, max) => {
  const number = Number(value);

  if (Number.isNaN(number)) {
    return min;
  }

  return Math.min(Math.max(number, min), max);
};

const percentOf = (amount, percent) => {
  return amount * (percent / 100);
};

// ==========================================
// تخفیف عدم خسارت
// ==========================================

export function getNoClaimDiscount(years) {
  const safeYears = clamp(years, 0, 14);

  return THIRD_PARTY_1405.noClaimDiscount[safeYears] ?? 0;
}

// ==========================================
// سن خودرو
// ==========================================

export function getVehicleAge(manufactureYear) {
  const year = Number(manufactureYear);

  if (!year) {
    return 0;
  }

  return Math.max(THIRD_PARTY_1405.year - year, 0);
}

// ==========================================
// افزایش خودروهای قدیمی
// ==========================================

export function getOldVehicleIncrease(vehicleAge) {
  const age = Number(vehicleAge) || 0;

  const config = THIRD_PARTY_1405.vehicleIncrease.oldVehicle;

  if (age <= config.startAfterYears) {
    return 0;
  }

  const extraYears = age - config.startAfterYears;

  return Math.min(extraYears * config.percentPerYear, config.maxPercent);
}

// ==========================================
// کاهش تخفیف بابت خسارت
// ==========================================

export function getClaimDiscountReduction({
  financialClaims = 0,
  bodilyClaims = 0,
  mixedClaims = 0,
}) {
  const financial = clamp(financialClaims, 0, 999);

  const bodily = clamp(bodilyClaims, 0, 999);

  const mixed = clamp(mixedClaims, 0, 999);

  // -----------------------------
  // خسارت مالی
  // -----------------------------

  let financialReduction = 0;

  if (financial === 1) {
    financialReduction = THIRD_PARTY_1405.claimDiscountReduction.financial.one;
  } else if (financial === 2) {
    financialReduction = THIRD_PARTY_1405.claimDiscountReduction.financial.two;
  } else if (financial >= 3) {
    financialReduction =
      THIRD_PARTY_1405.claimDiscountReduction.financial.threeOrMore;
  }

  // -----------------------------
  // خسارت بدنی
  // -----------------------------

  let bodilyReduction = 0;

  if (bodily === 1) {
    bodilyReduction = THIRD_PARTY_1405.claimDiscountReduction.bodily.one;
  } else if (bodily === 2) {
    bodilyReduction = THIRD_PARTY_1405.claimDiscountReduction.bodily.two;
  } else if (bodily >= 3) {
    bodilyReduction =
      THIRD_PARTY_1405.claimDiscountReduction.bodily.threeOrMore;
  }

  // -----------------------------
  // خسارت مختلط
  // -----------------------------

  let mixedReduction = 0;

  if (mixed === 1) {
    mixedReduction = THIRD_PARTY_1405.claimDiscountReduction.bodily.one;
  } else if (mixed === 2) {
    mixedReduction = THIRD_PARTY_1405.claimDiscountReduction.bodily.two;
  } else if (mixed >= 3) {
    mixedReduction = THIRD_PARTY_1405.claimDiscountReduction.bodily.threeOrMore;
  }

  return {
    financialReduction,
    bodilyReduction,
    mixedReduction,

    totalReduction: financialReduction + bodilyReduction + mixedReduction,
  };
}

// ==========================================
// مدت بیمه
// ==========================================

export function getShortTermPercent(days) {
  const duration = clamp(days, 1, 365);

  const item = THIRD_PARTY_1405.shortTerm.find(
    (item) => duration <= item.maxDays,
  );

  return item?.percent ?? 100;
}

// ==========================================
// جریمه دیرکرد
// ==========================================

export function getDelayPenalty({ vehicleType, delayDays }) {
  const days = clamp(delayDays, 0, THIRD_PARTY_1405.maxDelayDays);

  const daily = THIRD_PARTY_1405.delayPenaltyPerDay[vehicleType] ?? 0;

  return daily * days;
}

// ==========================================
// محاسبه اصلی
// ==========================================

export function calculateThirdPartyInsurance(values) {
  const {
    // خودرو
    vehicleType,
    manufactureYear,
    usage,

    // تخفیف
    noClaimYears,

    // خسارت
    financialClaimsCount,
    bodilyClaimsCount,
    mixedClaimsCount,

    // پوشش
    financialCoverage,

    // سوابق رانندگی

    // مدت
    insuranceDuration,
    delayDays,
  } = values;

  // ========================================
  // 1. نرخ پایه
  // ========================================

  const baseRate = THIRD_PARTY_1405.baseRates[vehicleType] ?? 0;

  if (!baseRate) {
    return {
      total: 0,
    };
  }

  // ========================================
  // 2. سن خودرو
  // ========================================

  const vehicleAge = getVehicleAge(manufactureYear);

  const oldVehiclePercent = getOldVehicleIncrease(vehicleAge);

  // ========================================
  // 3. افزایش کاربری
  // ========================================

  const usagePercent = THIRD_PARTY_1405.usageIncrease[usage] ?? 0;

  // ========================================
  // 6. مجموع افزایش‌ها
  // ========================================

  const totalIncreasePercent = usagePercent + oldVehiclePercent;

  const totalIncrease = percentOf(baseRate, totalIncreasePercent);

  const rateAfterIncrease = baseRate + totalIncrease;

  // ========================================
  // 7. تخفیف عدم خسارت
  // ========================================

  const originalNoClaimPercent = getNoClaimDiscount(noClaimYears);

  // ========================================
  // 8. کاهش تخفیف بابت خسارت
  // ========================================

  const claimReduction = getClaimDiscountReduction({
    financialClaims: financialClaimsCount,

    bodilyClaims: bodilyClaimsCount,

    mixedClaims: mixedClaimsCount,
  });

  // ========================================
  // 9. تخفیف نهایی
  // ========================================

  const finalNoClaimPercent = Math.max(
    originalNoClaimPercent - claimReduction.totalReduction,
    0,
  );

  const noClaimDiscount = percentOf(rateAfterIncrease, finalNoClaimPercent);

  const rateAfterNoClaim = rateAfterIncrease - noClaimDiscount;

  // ========================================
  // 10. مدت بیمه
  // ========================================

  const durationPercent = getShortTermPercent(insuranceDuration);

  let rateAfterDuration = rateAfterNoClaim;

  if (durationPercent < 100) {
    rateAfterDuration = percentOf(rateAfterNoClaim, durationPercent);
  }

  // ========================================
  // 11. بیمه حوادث راننده
  // ========================================

  const driverCoverage = THIRD_PARTY_1405.driverInsurance.minimumCoverage;

  const driverInsurance =
    (driverCoverage / 1000) * THIRD_PARTY_1405.driverInsurance.ratePerThousand;

  // ========================================
  // 12. تعهد مالی
  // ========================================

  const selectedFinancialCoverage = THIRD_PARTY_1405.coverage.minimumFinancial;

  /*
فعلاً مبلغ تعهد مالی مازاد را
محاسبه نمی‌کنیم چون نرخ آن باید
بر اساس جدول رسمی/شرکت بیمه مشخص شود.
*/

  const financialCoverageExtra = 0;

  // ========================================
  // 13. جریمه دیرکرد
  // ========================================

  const delayPenalty = getDelayPenalty({
    vehicleType,
    delayDays,
  });

  // ========================================
  // 14. جمع قبل از مالیات
  // ========================================

  const subtotal =
    rateAfterDuration + driverInsurance + financialCoverageExtra + delayPenalty;

  // ========================================
  // 15. مالیات ارزش افزوده
  // ========================================

  const vat = percentOf(subtotal, THIRD_PARTY_1405.vatRate * 100);

  // ========================================
  // 16. مبلغ نهایی
  // ========================================

  const total = subtotal + vat;

  // ========================================
  // خروجی
  // ========================================

  return {
    // -----------------------------
    // مبالغ
    // -----------------------------

    baseRate: Math.round(baseRate),

    totalIncrease: Math.round(totalIncrease),

    rateAfterIncrease: Math.round(rateAfterIncrease),

    noClaimDiscount: Math.round(noClaimDiscount),

    driverInsurance: Math.round(driverInsurance),

    financialCoverageExtra: Math.round(financialCoverageExtra),

    delayPenalty: Math.round(delayPenalty),

    subtotal: Math.round(subtotal),

    vat: Math.round(vat),

    total: Math.round(total),

    // -----------------------------
    // جزئیات
    // -----------------------------

    details: {
      vehicleAge,
      usagePercent,
      oldVehiclePercent,
      totalIncreasePercent,
      originalNoClaimPercent,
      claimReduction: claimReduction.totalReduction,
      finalNoClaimPercent,
      durationPercent,
      selectedFinancialCoverage,
    },
  };
}
