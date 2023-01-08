import { Button } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData().data;
  const { _id, serviceName, img, price, description } = service;
  const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?service_id=${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.data);
        setRefresh(!refresh);
      })
      .catch((error) => console.error(error));
  }, [_id, refresh]);

  console.log(reviews);

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const text = form.text.value;
    const name = form.name.value;
    const email = form.email.value;
    const photo = user?.photoURL || "Unregisterd";

    const review = {
      name: name,
      text: text,
      email: email,
      photo: photo,
      service_id: _id,
      serviceName: serviceName,
    };
    console.log(review);

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(data.message);
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      {/* service details section start */}
      <section className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-300 dark:dark:text-gray-100">
        <div className="flex flex-col max-w-3xl bg-slate-500 p-6 mx-auto overflow-hidden rounded">
          <img
            src={img}
            alt=""
            className="w-full h-60 sm:h-96 dark:dark:bg-gray-500"
          />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:dark:bg-gray-900">
            <div className="space-y-2">
              <p className="inline-block text-2xl font-semibold sm:text-3xl">
                {serviceName}
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
                  <span className="font-semibold text-gray-200">Price: </span>$
                  {price}.
                </p>
              </div>
              <div>
                <Button color={"purple"}>Make an Appointment</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* service details section end */}

      {/* Review section start */}
      <section>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 text-center lg:text-left">
              {reviews.length === 0 && (
                <h1 className="text-6xl">No Reviews This Service</h1>
              )}
              <h1 className="text-5xl font-bold">Reviews for this service!</h1>
              {reviews?.map((review) => (
                <div
                  key={review._id}
                  className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 dark:dark:bg-gray-900 dark:dark:text-gray-100"
                >
                  <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                      <div>
                        <img
                          src={review.photo}
                          alt=""
                          className="object-cover w-12 h-12 rounded-full dark:dark:bg-gray-500"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{review.name}</h4>
                        <span className="text-xs dark:dark:text-gray-400">
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:dark:text-yellow-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-5 h-5 fill-current"
                      >
                        <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                      </svg>
                      <span className="text-xl font-bold">4.5</span>
                    </div>
                  </div>
                  <div className="p-4 space-y-2 text-sm dark:dark:text-gray-400">
                    <p>{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
            {user?.email ? (
              <>
                <div className=" w-1/2 card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleReview} className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        required
                        type="text"
                        name="name"
                        placeholder="name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        defaultValue={user?.email}
                        readOnly
                        required
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Reviewer Text</span>
                      </label>
                      <textarea
                        placeholder="Please add a review"
                        name="text"
                        id=""
                        cols="30"
                        rows="8"
                      ></textarea>
                    </div>
                    <div className="form-control mt-6">
                      <button
                        type="submit"
                        className="btn btn-primary capitalize"
                      >
                        Place your Review
                      </button>
                    </div>
                  </form>
                </div>
              </>
            ) : (
              <>
                <p>
                  Please sign in to add a review{" "}
                  <Link className="btn btn-primary" to={"/signin"}>
                    Sign In
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </section>
      {/* Review section end */}
    </div>
  );
};

export default ServiceDetails;
