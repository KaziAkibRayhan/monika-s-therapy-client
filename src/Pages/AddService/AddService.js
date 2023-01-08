import React from "react";
import { toast } from "react-toastify";

const AddService = () => {
  const handleAddService = (event) => {
    event.preventDefault();
    const form = event.target;
    const serviceName = form.serviceName.value;
    const img = form.img.value;
    const price = form.price.value;
    const description = form.description.value;
    const service = {
      serviceName,
      img,
      price,
      description,
    };

    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(data.message);
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="card rounded-xl p-5 w-1/2 mx-auto shadow-2xl bg-base-100">
      <h4 className="text-center text-3xl text-violet-500 font-bold">
        Please add a Service.
      </h4>
      <form onSubmit={handleAddService} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input
            required
            type="text"
            name="serviceName"
            placeholder="Service Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            required
            name="img"
            placeholder="Image URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            required
            name="price"
            placeholder="Price"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            type="text"
            required
            name="description"
            placeholder="Description"
            cols="15"
            rows="5"
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary capitalize">
            Add a Service
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
