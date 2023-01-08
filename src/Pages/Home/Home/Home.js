import React from "react";
import useTitle from "../../../Hooks/UseTitle";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";
import ServiceHome from "../ServiceHome/ServiceHome";
import Slider from "../Slider/Slider";

const Home = () => {
  useTitle('Home')
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
