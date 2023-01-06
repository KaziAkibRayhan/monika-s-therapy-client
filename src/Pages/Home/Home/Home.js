import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import ServiceHome from "../ServiceHome/ServiceHome";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ServiceHome></ServiceHome>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
