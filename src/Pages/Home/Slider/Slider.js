import { Carousel } from "flowbite-react";
import React from "react";
import slide1 from "../../../assets/slider-img/slider1.jpg";
import slide2 from "../../../assets/slider-img/slider2.jpg";

const Slider = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <div className="flex h-full relative items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className="opacity-50" src={slide2} alt="" />
          <div className="absolute top-16">
            <h1 className="text-6xl text-center text-gray-800">
              You Deserve <br /> To Be <span className="text-orange-500">Happy.</span>
            </h1>
          </div>
        </div>
        <div className="flex h-full relative items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          <img className="opacity-50" src={slide1} alt="" />
          <div className="absolute top-16">
            <h1 className="text-6xl text-center text-gray-800">
              20 Years Experience <br /> Representing Clients <br /> <span className="text-orange-500">Like You.</span>
            </h1>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
