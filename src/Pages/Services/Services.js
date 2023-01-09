import React, { useEffect, useState } from "react";
import useTitle from "../../Hooks/UseTitle";
import ServiceCard from "../Home/ServiceHome/ServiceCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Services = () => {
  useTitle("Services");
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.data);
        setIsLoading(false);
      });
  }, []);
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 bg-gray-200 p-8 my-10">
      {isLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : (
        <>
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </>
      )}
    </div>
  );
};

export default Services;
