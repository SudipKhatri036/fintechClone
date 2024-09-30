import React from "react";

function HomeHero() {
  return (
    <section className="pt-10 md:pt-2">
      <div className="img-cont container m-auto flex w-full items-center justify-center text-center">
        <img
          src="/images/m2p-header-mob.png"
          alt="M2p logo"
          className="md:hidden"
        />

        <video
          className="hidden w-full md:block"
          width="100%"
          height="240"
          autoPlay
          muted
        >
          <source
            src="https://m2p-website-static-files.s3.ap-south-1.amazonaws.com/images/home.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="px-4 pb-10 text-center lg:mt-[-80px]">
        <h1 className="mb-3 text-center text-2xl font-medium tracking-tight md:text-4xl">
          Fintech happens here
        </h1>
        <p className="text-sm leading-snug">
          We empower fintechs, banks, and businesses with custom APIs for a wide
          range of financial services
        </p>
      </div>
    </section>
  );
}

export default HomeHero;
