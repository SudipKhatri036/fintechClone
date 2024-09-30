import React from "react";

function CustomerCount() {
  return (
    <section className="bg-primered">
      <div className="container m-auto grid w-4/5 items-center justify-center gap-3 py-4 align-baseline sm:grid-cols-3">
        <div className="count-box w-40 rounded-l-lg rounded-t-lg bg-white py-4 text-center md:w-full">
          <p className="text-2xl font-medium">800+</p>
          <p>Fintechs</p>
        </div>
        <div className="count-box w-40 rounded-l-lg rounded-t-lg bg-white py-4 text-center md:w-full">
          <p className="text-2xl font-medium">300+</p>
          <p>Banks</p>
        </div>
        <div className="count-box w-40 rounded-l-lg rounded-t-lg bg-white py-4 text-center md:w-full">
          <p className="text-2xl font-medium">100+</p>
          <p>NBFcs</p>
        </div>
        <div className="count-box w-40 rounded-l-lg rounded-t-lg bg-white py-4 text-center md:w-full">
          <p className="text-2xl font-medium">20</p>
          <p>Markets</p>
        </div>
        <div className="count-box w-40 rounded-l-lg rounded-t-lg bg-white py-4 text-center md:w-full">
          <p className="text-2xl font-medium">35+</p>
          <p>Million Customer</p>
        </div>
        <div className="count-box w-40 rounded-l-lg rounded-t-lg bg-white py-4 text-center md:w-full">
          <p className="text-2xl font-medium">35+</p>
          <p>Million Customer</p>
        </div>
      </div>
      <div className="">
        <video width="320" height="240" loop autoPlay>
          <source
            src="https://m2p-website-static-files.s3.ap-south-1.amazonaws.com/images/counter-bg.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default CustomerCount;
