import { Button, Card } from "flowbite-react";
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <Card imgAlt={service.name} imgSrc={service.img}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {service.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {service.description.length > 100
          ? service.description.slice(0, 100) + "..."
          : service.description}
      </p>
      <Button gradientDuoTone="cyanToBlue">Service Details</Button>
    </Card>
  );
};

export default ServiceCard;
