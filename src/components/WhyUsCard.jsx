import React from "react";

function WhyUsCard({ whyus }) {
  return (
    <div className="m-auto max-w-md md:mb-5">
      <div className="m-auto mb-5 max-w-52">
        <img src={whyus.imgSrc} alt="Counter icon" />
      </div>
      <div className="border-primered border-r-2 px-5">
        <h3 className="text-primered mb-2 text-xl font-semibold tracking-wide">
          {whyus.title}
        </h3>

        <p className="text-sm leading-normal opacity-80">{whyus.content}</p>
      </div>
    </div>
  );
}

export default WhyUsCard;
