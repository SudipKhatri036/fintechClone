import React from "react";

function CustomerCount() {
  return (
    <section className="relative mt-[-180px] grid min-h-96 items-center pt-44">
      <div className="container relative z-20 m-auto grid w-4/5 items-center justify-center gap-3 py-8 pb-44 align-baseline sm:grid-cols-3">
        <div className="count-box w-40 rounded-l-lg rounded-t-lg bg-white py-4 text-center md:w-full lg:py-8">
          <p className="text-2xl font-medium lg:text-3xl"> 800+</p>
          <p>Fintechs</p>
        </div>
        <div className="count-box w-40 rounded-l-lg rounded-t-lg bg-white py-4 text-center md:w-full lg:py-8">
          <p className="text-2xl font-medium lg:text-3xl"> 300+</p>
          <p>Banks</p>
        </div>
        <div className="count-box w-40 rounded-l-lg rounded-t-lg bg-white py-4 text-center md:w-full lg:py-8">
          <p className="text-2xl font-medium lg:text-3xl"> 100+</p>
          <p>NBFcs</p>
        </div>
        <div className="count-box w-40 rounded-l-lg rounded-t-lg bg-white py-4 text-center md:w-full lg:py-8">
          <p className="text-2xl font-medium lg:text-3xl">20</p>
          <p>Markets</p>
        </div>
        <div className="count-box w-40 rounded-l-lg rounded-t-lg bg-white py-4 text-center md:w-full lg:py-8">
          <p className="text-2xl font-medium lg:text-3xl">35+</p>
          <p>Million Customer</p>
        </div>
        <div className="count-box w-40 rounded-l-lg rounded-t-lg bg-white py-4 text-center md:w-full lg:py-8">
          <p className="text-2xl font-medium lg:text-3xl">35+</p>
          <p>Million Customer</p>
        </div>
      </div>
      <div className="absolute left-0 top-0 z-0 h-full w-full">
        <video
          loop
          autoPlay
          muted
          width="320"
          height="240"
          className="h-full w-full object-cover"
        >
          <source
            src="https://m2p-website-static-files.s3.ap-south-1.amazonaws.com/images/counter-bg.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="relative bottom-0 z-[2] mb-[-2px] h-full w-full">
        <img src="/images/Shape-TP.svg" alt="Shape" className="w-full" />
      </div>
    </section>
  );
}

export default CustomerCount;
