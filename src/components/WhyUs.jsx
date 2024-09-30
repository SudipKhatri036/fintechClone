import React from "react";
import WhyUsCard from "./WhyUsCard";
import { whyusdata } from "../api/dummydata";

function WhyUs() {
  return (
    <section className="pb-11 pt-11">
      <div className="container m-auto">
        <h2 className="mb-9 text-center text-3xl tracking-wide">Why M2P?</h2>

        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-2 md:space-y-0">
          <div>
            {whyusdata.slice(0, 2).map((whyus) => {
              return <WhyUsCard key={whyus.id} whyus={whyus} />;
            })}
          </div>

          <div className="md:pt-24">
            {whyusdata.slice(2, whyusdata.length).map((whyus) => {
              return <WhyUsCard key={whyus.id} whyus={whyus} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
