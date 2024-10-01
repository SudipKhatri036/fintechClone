import React from "react";

function HomeFeatureCard({ isEven, count }) {
  return (
    <li className="relative px-6">
      <div
        className={`absolute ${isEven ? "right-[-90px]" : "left-[-90px]"} top-[120px] z-[1] h-5 w-52 rotate-[-90deg] text-[10px] text-white opacity-50 lg:w-60 lg:text-base`}
      >
        BANKING. LENDING. PAYMENTS.
      </div>

      <div
        className={`m-auto max-w-[500px] p-5 lg:flex lg:max-w-full lg:items-center ${isEven ? "flex-row-reverse" : "flex-row"}`}
      >
        <div className="m-auto mb-16 w-[96%] lg:max-w-[28rem]">
          <img src="/images/m2p-account-creation.png" alt="" />
        </div>
        <div
          className={`relative ${isEven ? "border-l-2" : "border-r-2"} border-white px-5 lg:w-2/6`}
        >
          <div
            className={`absolute ${isEven ? "left-[-10px]" : "right-[-10px]"} top-[-30px]`}
          >
            {count}
          </div>
          <h3 className="mb-5 text-2xl">Customer Onboarding & KYC</h3>
          <p className="text-base opacity-80">
            We handle opening of user/bank accounts, customer onboarding,
            compliance checks, and regulatory requirements, end-to-end. We
            guarantee industry standard compliance and a frictionless user
            experience.
          </p>
        </div>
      </div>
    </li>
  );
}

export default HomeFeatureCard;
