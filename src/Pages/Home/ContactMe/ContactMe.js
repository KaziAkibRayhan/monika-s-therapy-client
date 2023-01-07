import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { FcCellPhone } from "react-icons/fc";
import Photo from "../../../assets/About Me/Anxiety Treatment.jpg";

const ContactMe = () => {
  return (
    <div className="bg-gray-300 p-3">
      <div className="text-center p-4">
        <div>
          <h3 className="text-xl text-rose-500 font-semibold mb-2">
            Contact Me
          </h3>
          <h2 className="text-3xl mb-3">
            I'm Here For You 24 Hours A Day,
            <br /> 7 Days A Week!
          </h2>
        </div>
        <div className="flex justify-center">
          <Button color={"purple"}>
            {" "}
            <FcCellPhone className="w-9 h-9" /> 1-800-643-4300
          </Button>
        </div>
      </div>
      <div className="relative">
        <img
          src={Photo}
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-center xl:flex-row">
              <div className="w-full text-center max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                <h2 className="max-w-lg mb-6 capitalize font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Speak me About your problem <br className="hidden md:block" />
                  and schedule a
                  <span className="text-teal-accent-400"> visit now!</span>
                </h2>
                <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                  We will look after your every problem with care, we will try
                  everything for your health, so that you get well soon.
                </p>
                <Link className="flex justify-center">
                  <Button>Make an Appointment</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
