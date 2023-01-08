import { Button } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo/physical-therapy-logo.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error.message));
  };

  const menuItems = (
    <>
      <li className="font-bold">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="font-bold">
        <Link to={"/services"}>Services</Link>
      </li>
      <li className="font-bold">
        <Link to={"/blogs"}>Blogs</Link>
      </li>
      {user?.email ? (
        <>
          <li className="font-bold">
            <Link to={"/myReviews"}>My Reviews</Link>
          </li>
          <li className="font-bold">
            <Link to={"/addService"}>Add Service</Link>
          </li>
          <li className="font-bold">
            <Link onClick={handleLogOut} className="btn btn-warning">
              Sign Out
            </Link>
          </li>
        </>
      ) : (
        <li className="font-bold">
          <Link to={"/signin"}>Sign In</Link>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <img className="rounded-lg w-12" src={Logo} alt="" />
          <span> Monika's Therapy</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        {user?.photoURL && (
          <img className="w-12 h-12 rounded-2xl" src={user.photoURL} alt="" />
        )}
      </div>
    </div>
  );
};

export default Header;
