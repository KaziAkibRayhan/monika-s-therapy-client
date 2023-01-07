import React from "react";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import ServiceHome from "../ServiceHome/ServiceHome";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <ServiceHome></ServiceHome>
      {/* 2 extra section site related */}
      <ContactMe></ContactMe>
      <AboutMe></AboutMe>
    </div>
  );
};

export default Home;
