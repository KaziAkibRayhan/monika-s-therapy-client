import React from "react";
import { BsCardChecklist, BsTelephonePlusFill } from "react-icons/bs";
import { RiMentalHealthFill } from "react-icons/ri";
import { ImCheckmark } from "react-icons/im";
import Photo from "../../../assets/About Me/About Me.jpg";
import Photo2 from "../../../assets/About Me/About Me 2.jpg";
const AboutMe = () => {
  return (
    <div className="p-5 relative mx-auto sm:p-10 md:p-16 bg-gray-300 text-gray-50 my-10">
      <div className="absolute top-28 ml-2 z-50">
        <h1 className="text-6xl font-bold text-orange-500">About Me</h1>
        <p className="font-semibold text-black mt-4">
          A therapist is a broad designation that refers to professionals who{" "}
          <br />
          are trained to provide treatment and rehabilitation.
        </p>
      </div>
      <div className="flex flex-col w-full mx-auto overflow-hidden rounded">
        <img src={Photo} alt="" className="bg-gray-500 h-96 opacity-50" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24 z-50">
          <div className="p-6 pb-12 m-4 mx-auto -mt-20 space-y-6 w-full lg:rounded-md bg-gray-100">
            <div className="space-y-2">
              <div class="text-center">
                <div className="flex justify-center">
                  <BsTelephonePlusFill className="text-gray-600 w-8 h-8" />
                </div>
                <div>
                  <h6 class="text-5xl font-bold text-rose-500 mt-1">1,820 +</h6>
                </div>
                <div>
                  <p class="font-bold text-black mt-4">
                    Messages, chat, video sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pb-12 m-4 mx-auto -mt-20 space-y-6 w-full  lg:rounded-md bg-gray-100">
            <div className="space-y-2">
              <div class="text-center">
                <div className="flex justify-center">
                  <BsCardChecklist className="text-gray-600 w-8 h-8" />
                </div>
                <div>
                  <h6 class="text-5xl font-bold text-rose-500 mt-1">385 +</h6>
                </div>
                <div>
                  <p class="font-bold text-black mt-4">People got help.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 pb-12 m-4 mx-auto -mt-20 space-y-6 w-full  lg:rounded-md bg-gray-100">
            <div className="space-y-2">
              <div class="text-center">
                <div className="flex justify-center">
                  <RiMentalHealthFill className="text-gray-600 w-8 h-8" />
                </div>
                <div>
                  <h6 class="text-5xl font-bold text-rose-500 mt-1">1,000 +</h6>
                </div>
                <div>
                  <p class="font-bold text-black mt-4">clients worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="dark:dark:bg-gray-800 dark:dark:text-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:dark:text-gray-50">
                  Psy.D. Monika
                </h3>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">
                      <ImCheckmark className="w-6 h-6"></ImCheckmark>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:dark:text-gray-50">
                        Anxiety and Depression
                      </h4>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">
                        <ImCheckmark className="w-6 h-6"></ImCheckmark>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:dark:text-gray-50">
                        Trauma/Abuse/PTSD
                      </h4>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">
                        <ImCheckmark className="w-6 h-6"></ImCheckmark>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:dark:text-gray-50">
                        Relationships Issues
                      </h4>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:dark:bg-violet-400 dark:dark:text-gray-900">
                        <ImCheckmark className="w-6 h-6"></ImCheckmark>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:dark:text-gray-50">
                      Stress and Lifestyle Management
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src={Photo2}
                  alt=""
                  className="mx-auto rounded-lg shadow-lg dark:dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
