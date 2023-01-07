import React, { useContext } from "react";
import { Link } from "react-router-dom";
import SignUpPhoto from "../../assets/Sign-in-up-image/SignUp.jpg";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);
  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
    console.log(email, password);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content justify-between flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:w-1/2 sm:w-full lg:text-left">
          <img className="rounded-xl" src={SignUpPhoto} alt="" />
        </div>
        <div className="card sm:w-full lg:w-1/2 flex-shrink-0 max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl text-center font-bold pt-4">Sign In Now!</h1>
          <form onSubmit={handleSignIn} className="card-body">
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
              <label className="label">
                <Link className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary capitalize">Sign In</button>
            </div>
            <p>
              New to this site?{" "}
              <Link className="btn btn-primary capitalize" to={"/signup"}>
                Sign Up
              </Link>
            </p>
          </form>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
