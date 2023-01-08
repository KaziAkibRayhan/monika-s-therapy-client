import { Button, Card } from "flowbite-react";
import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <Card>
      <PhotoProvider>
        <div className="foo">
          <PhotoView src={service.img}>
            <img src={service.img} alt="" />
          </PhotoView>
        </div>
      </PhotoProvider>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {service.serviceName}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 capitalize">
        {service.description.length > 100
          ? service.description.slice(0, 100) + "..."
          : service.description}
      </p>
      <div className="flex justify-between items-center">
        <p className="font-bold"><span className="text-violet-600">Price: $</span>{service.price}</p>
        <Link to={`/services/${service._id}`}>
          <Button gradientDuoTone="cyanToBlue">Service Details</Button>
        </Link>
      </div>
    </Card>
  );
};

export default ServiceCard;
