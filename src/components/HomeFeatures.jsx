import React from "react";
import HomeFeatureCard from "./HomeFeatureCard";

function HomeFeatures() {
  return (
    <>
      <div className="sm:mb[-5px] h-full w-full lg:mb-[-2px]">
        <img src="/images/Shape-TP-1.svg" alt="svg" className="w-full" />
      </div>
      <section className="features relative z-[4] bg-primered text-white">
        <div className="container m-auto py-20">
          <h2 className="text-center text-2xl sm:text-4xl lg:ml-auto lg:w-2/4">
            Banking. Lending. Payments.
          </h2>

          <ul className="">
            <HomeFeatureCard isEven={false} count="01" />
            <HomeFeatureCard isEven={true} count="02" />
            <HomeFeatureCard isEven={false} count="03" />
            <HomeFeatureCard isEven={true} count="04" />
            <HomeFeatureCard isEven={false} count="05" />
            <HomeFeatureCard isEven={true} count="06" />
          </ul>
        </div>
      </section>
      <div className="relative z-[2] h-full w-full lg:mt-[-10px]">
        <img src="/images/Shape-BT-1.svg" alt="svg" className="w-full" />
      </div>
    </>
  );
}

export default HomeFeatures;
