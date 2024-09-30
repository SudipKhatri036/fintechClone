import React from "react";

function Testimonal() {
  return (
    <section className="testimonal relative min-h-[400px] bg-[#4b5660]">
      <div className="absolute top-0 h-full w-full">
        <video
          width="100%"
          height="240"
          className="max-h-full object-cover"
          loop
          autoPlay
          muted
        >
          <source src="/video/Cubes_Update.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="slider absolute left-1/2 top-3 w-full translate-x-[-50%] px-4 sm:top-1/2 sm:translate-y-[-50%]">
        <div className="slide-item m-auto sm:w-1/2">
          <div className="mb-2 h-16 w-16 rounded-full bg-[#4b5660] p-2">
            <img
              className="rounded-full"
              src="/images/testimonal-user.png"
              alt="Testimonal User"
            />
          </div>
          <div className="relative text-white">
            <h4 className="text-xl">PEi-Fi HSieh</h4>
            <p className="mb-3 text-sm font-semibold">
              CEO & Co-Founde, KARBON Card
            </p>
            <span className="text-sm leading-[0.8] tracking-tight">
              The M2P platform provides the rails on which fintechs and
              incumbents can build new cases for the underserved segment, while
              delivering financial services in a cost- effective way.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonal;
