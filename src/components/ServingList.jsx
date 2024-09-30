import React from "react";

function ServingList() {
  return (
    <section className="serving-list">
      <div className="container m-auto py-4">
        <div className="m-auto grid w-full grid-cols-1 items-center md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-primered mb-5 text-center text-4xl font-normal tracking-wide">
              We serve the world
            </h2>

            <ul className="custom-list flex list-inside list-disc flex-wrap items-center justify-center gap-2 space-x-0 space-y-2 text-sm">
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
              <li>Nepal</li>
            </ul>
          </div>

          <div className="globe-video m-auto w-full">
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
    </section>
  );
}

export default ServingList;
