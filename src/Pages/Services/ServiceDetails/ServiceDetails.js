import { Button } from "flowbite-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const service = useLoaderData().data;
  const { name, img, price, description } = service;

  return (
    <div>
      <section className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-300 dark:dark:text-gray-100">
        <div className="flex flex-col max-w-3xl bg-slate-500 p-6 mx-auto overflow-hidden rounded">
          <img
            src={img}
            alt=""
            className="w-full h-60 sm:h-96 dark:dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:dark:bg-gray-900">
            <div className="space-y-2">
              <p className="inline-block text-gray-200 text-2xl font-semibold sm:text-3xl">
                {name}
              </p>
            </div>
            <div className="dark:dark:text-gray-100">
              <p>
                <span className="font-bold text-gray-200">
                  Service Description:
                </span>{" "}
                {description}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">
                  <span className="font-semibold text-gray-200">Price: </span>${price}.
                </p>
              </div>
              <div>
                <Button color={"purple"}>Make an Appointment</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default ServiceDetails;
