import React from "react";
import ThirdPartyInsuranceCalculator from "./ThirdPartyInsuranceCalculator";

export default function InsuranceCalculation() {
  return (
    <div
      className="w-full -translate-y-12 sm:-translate-y-50 md:-translate-y-12 "
      id="inquiry"
    >
      <div className="px-0">
        <ThirdPartyInsuranceCalculator />
      </div>
    </div>
  );
}
