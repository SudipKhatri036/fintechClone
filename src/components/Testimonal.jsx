import React from "react";
import TestimonalSlider from "./TestimonalSlider";
import Slider from "react-slick";

function Testimonal() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonal relative min-h-[400px] bg-[#4b5660]">
      <div className="absolute top-0 h-full w-full">
        <video
          width="100%"
          height="240"
          className="h-full w-full object-cover"
          loop
          autoPlay
          muted
        >
          <source src="/video/Cubes_Update.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="slider container absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] px-4 sm:top-1/2 sm:translate-y-[-50%] lg:w-4/6">
        <Slider {...settings}>
          <TestimonalSlider />
          <TestimonalSlider />
          <TestimonalSlider />
          <TestimonalSlider />
          <TestimonalSlider />
          <TestimonalSlider />
        </Slider>
      </div>
    </section>
  );
}

export default Testimonal;
