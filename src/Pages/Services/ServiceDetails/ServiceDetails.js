import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData().data;
  const { _id, name, img, price, description } = service;

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
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
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
                    {/* <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo Reviewer</span>
                      </label>
                      <input
                        defaultValue={user?.photoURL}
                        type="text"
                        required
                        name="photoURL"
                        placeholder="Photo Reviewer"
                        className="input input-bordered"
                      />
                    </div> */}
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
