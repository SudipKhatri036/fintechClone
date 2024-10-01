import React from "react";

function ServingList() {
  return (
    <section className="serving-list relative h-full">
      <div className="container m-auto h-auto pt-4">
        <div className="m-auto grid w-full grid-cols-1 items-center md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-5 text-center text-4xl font-normal tracking-wide text-primered">
              We serve the world
            </h2>

            <ul className="custom-list flex list-inside list-disc flex-wrap items-center justify-center gap-2 space-x-0 space-y-2 text-sm font-light lg:space-y-0">
              <li>Nepal</li>
              <li>UAE</li>
              <li>India</li>
              <li>Egypt</li>
              <li>Qatar</li>
              <li>Bahrin</li>
              <li>Oman</li>
              <li>Philippines</li>
              <li>Australia</li>
              <li>Sri Linka</li>
              <li>Indonesia</li>
              <li>Vietnam</li>
              <li>Myanmar</li>
              <li>South Africa</li>
              <li>Cambodia</li>
              <li>Kenya</li>
              <li>Nigeria</li>
              <li>Lebanon</li>
            </ul>
          </div>

          <div className="globe-video relative z-0 m-auto w-full">
            <video
              loop
              autoPlay
              muted
              className="w-100 h-auto"
              width="100%"
              height="240"
            >
              <source src="/video/globe.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[-3px] z-[2] w-full">
        <img src="/images/Shape-TP-1.svg" alt="svg" className="w-full" />
      </div>
    </section>
  );
}

export default ServingList;
