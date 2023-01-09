import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const EditMyReviews = () => {
  const { user } = useContext(AuthContext);
  const [myReview, setMyReview] = useState(null);
  const router = useParams();
  const { id } = router;

  useEffect(() => {
    fetch(`https://monika-s-therapy-server.vercel.app/myReview/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReview(data.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  console.log(myReview);

    const handleEditReview = (event) => {
      event.preventDefault();
      const form = event.target;
      const text = form.text.value;
      const name = form.name.value;
      const email = form.email.value;

      const review = {
        name: name,
        text: text,
        email: email,
      };
      console.log(review);

      fetch(`https://monika-s-therapy-server.vercel.app/myReview/${id}`,{
        method: "PATCH",
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
    <div className=" w-1/2 mx-auto card flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
      <h4 className="text-3xl text-center">Please Edit Your Review</h4>
      <form onSubmit={handleEditReview} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
          defaultValue={myReview?.name}
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
          defaultValue={myReview?.text}
            placeholder="Please edit your review"
            name="text"
            id=""
            cols="15"
            rows="5"
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary capitalize">
            Edit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditMyReviews;
