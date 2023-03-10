import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import ServiceCard from "./ServiceCard";

const ServiceHome = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://monika-s-therapy-server.vercel.app/homeService")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="my-10 bg-gray-200 p-8">
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-10">
        <Link to={"/services"}>
          <Button gradientDuoTone="purpleToBlue">See All Services</Button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceHome;
