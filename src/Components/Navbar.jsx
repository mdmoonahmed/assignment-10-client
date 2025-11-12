import React, { useContext, useState, useRef, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { LogIn, LogOut } from "lucide-react";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogIn = () => navigate("/login");
  const handleLogOut = () => {
    signOutUser().then(() => {
      navigate("/login");
      setIsOpen(false);
    });
  };
  const handleLogo = () => navigate("/");

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <button
          onClick={handleLogo}
          className="btn btn-ghost text-xl heading-text"
        >
          Rent{" "}
          <span className="italic">
            <span className="text-primary">W</span>heel
          </span>
        </button>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end relative">
        {user ? (
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setIsOpen(!isOpen)}>
              <img
                src={user.photoURL}
                alt="User Avatar"
                className="h-12 w-12 rounded-full border-2 border-yellow-500 object-cover hover:scale-105 transition-transform duration-300"
              />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg bg-gray-900 text-white shadow-lg ring-1 ring-yellow-500 z-20">
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="text-sm font-semibold">{user.displayName}</p>
                  <p className="text-xs text-gray-400 truncate">{user.email}</p>
                </div>
                <button
                  onClick={handleLogOut}
                  className="w-full flex items-center gap-1 justify-center  text-center px-4 py-3 text-sm font-semibold hover:bg-white bg-yellow-500 hover:text-black transition duration-200"
                >
                  <LogOut/> <span>Log Out</span> 
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            onClick={handleLogIn}
            className="group btn-hover relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-yellow-500 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-lg font-semibold text-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            <span className="relative z-10 flex items-center justify-center gap-1"> <LogIn/> Login</span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
