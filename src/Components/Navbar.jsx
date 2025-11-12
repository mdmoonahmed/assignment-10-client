import React from "react";
import { NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const handleLogIn = () => {
      navigate('/login')
  }
  const handleLogo = () => {
    navigate("/");
  };
  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/add-car"}>Add Car</NavLink>
      </li>
      <li>
        <NavLink to={"/my-listing"}>My Listing</NavLink>
      </li>
      <li>
        <NavLink to={"/my-bookings"}>My Bookings</NavLink>
      </li>
      <li>
        <NavLink to={"/browse-cars"}>Browse Cars</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a onClick={handleLogo} className="btn btn-ghost text-xl heading-text">
          Rent{" "}
          <span className=" italic">
            <span className="text-primary">W</span>heel
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a
          onClick={handleLogIn}
          className="btn-hover relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-yellow-500 px-6 py-3 text-base sm:text-lg font-semibold text-black transition-all duration-200 ease-out hover:scale-105 hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
        >
          <span className="relative z-10">Login</span>

          <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </a>
      </div>

    </div>
  );
};

export default Navbar;
