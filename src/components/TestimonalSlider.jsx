import React from "react";

// after:bottom-0 after:left-[90px]
function TestimonalSlider() {
  return (
    <div className="slide-item relative m-auto mr-2 w-11/12 md:w-10/12">
      <div className="mb-2 h-16 w-16 rounded-full bg-[#4b5660] p-2">
        <img
          className="rounded-full"
          src="/images/testimonal-user.png"
          alt="Testimonal User"
        />
      </div>
      <div className="relative text-white">
        <h4 className="before:bg-left-quote relative text-xl before:absolute before:left-[-20px] before:h-4 before:w-5 before:bg-cover before:bg-no-repeat md:before:left-[-30px] md:before:top-[-10px] md:before:h-6 md:before:w-7">
          PEi-Fi HSieh
        </h4>
        <p className="mb-3 text-sm font-semibold">
          CEO & Co-Founde, KARBON Card
        </p>
        <span className="after:bg-right-quote relative text-sm leading-[0.8] tracking-tight after:absolute after:bottom-0 after:right-[-50px] after:h-4 after:w-5 after:translate-x-[-100%] after:bg-cover after:bg-no-repeat md:after:right-[-60px] md:after:h-6 md:after:w-7">
          The M2P platform provides the rails on which fintechs and incumbents
          can build new cases for the underserved segment, while delivering
          financial services in a cost- effective way.
        </span>
      </div>
    </div>
  );
}

export default TestimonalSlider;
