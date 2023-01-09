import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SignUpPhoto from "../../assets/Sign-in-up-image/SignUp.jpg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/UseTitle";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  useTitle("Sign Up");
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        ProfileUpdate(name, photoURL);
        navigate(from, { replace: true });
        form.reset();
        setIsLoading(false);
      })
      .catch((error) => console.error(error.message));
  };
  // profile update
  const ProfileUpdate = (name, photoURL) => {
    updateUserProfile(name, photoURL)
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content justify-between flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:w-1/2 sm:w-full lg:text-left">
          <img className="rounded-xl" src={SignUpPhoto} alt="" />
        </div>
        <div className="card sm:w-full lg:w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl text-center font-bold pt-4">Sign Up Now!</h1>
          <form onSubmit={handleSignUp} className="card-body">
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
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                required
                name="photoURL"
                placeholder="PhotoURL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                required
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary capitalize">
                Sign Up
              </button>
            </div>
            <p>
              Already have an account?{" "}
              {isLoading ? (
                <LoadingSpinner></LoadingSpinner>
              ) : (
                <Link className="btn btn-primary capitalize" to={"/signin"}>
                  Sign In
                </Link>
              )}
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
