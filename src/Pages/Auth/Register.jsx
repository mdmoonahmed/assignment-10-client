import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    displayName: "",
    photoURL: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Validation logic
  const validate = (name, value) => {
    switch (name) {
      case "displayName":
        return value ? "" : "Name is required";
      case "photoURL":
        return value ? "" : "Photo URL is required";
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? "" : "Invalid email format";
      case "password":
        if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter";
        if (!/[a-z]/.test(value)) return "Must contain at least one lowercase letter";
        if (value.length < 6) return "Must be at least 6 characters long";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const displayName = event.target.displayName.value.trim();
    const photoURL = event.target.photoURL.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    const newErrors = {
      displayName: validate("displayName", displayName),
      photoURL: validate("photoURL", photoURL),
      email: validate("email", email),
      password: validate("password", password),
    };
    setErrors(newErrors);

    if (Object.values(newErrors).some((err) => err)) return;

    toast.loading("Creating user...", { id: "register" });

    createUser(email, password)
      .then(() => {
        updateUserProfile(displayName, photoURL);
        toast.dismiss("register");
        Swal.fire({
          icon: "success",
          title: "Registration Successful 🎉",
          text: "Your account has been created successfully!",
          background: "#1f2937", // dark gray
          color: "#facc15", // yellow-500
          confirmButtonColor: "#facc15",
        }).then(() => navigate("/"));
      })
      .catch((error) => {
        toast.dismiss("register");
        if (error.code === "auth/email-already-in-use") {
          Swal.fire({
            icon: "error",
            title: "Email Already Exists",
            text: "This email is already registered. Please try logging in.",
            background: "#1f2937",
            color: "#f87171", // red tone for dark theme
            confirmButtonColor: "#facc15",
          });
        } else {
          toast.error(error.message, { id: "register" });
        }
      });
  };

  const handleGoogleSignIn = () => {
    toast.loading("Signing in...", { id: "register" });
    signInWithGoogle()
      .then(() => {
        toast.dismiss("register");
        Swal.fire({
          icon: "success",
          title: "Welcome!",
          text: "Logged in successfully with Google.",
          background: "#1f2937",
          color: "#facc15",
          confirmButtonColor: "#facc15",
        }).then(() => navigate("/"));
      })
      .catch((error) => toast.error(error.message, { id: "register" }));
  };

  return (
    <div className="flex items-center justify-center py-10 md:min-h-screen bg-gray-900 px-4 sm:px-6 md:px-8 animate-fadeIn">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-700">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-500 text-center mb-6 sm:mb-8 animate-bounce">
          Register
        </h1>

        <form onSubmit={handleRegister} className="space-y-3 sm:space-y-4">
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-semibold text-sm sm:text-base">Name</label>
            <input
              type="text"
              name="displayName"
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-gray-700 text-gray-200 focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-500 transition"
            />
            {errors.displayName && <span className="text-red-400 text-xs mt-1">{errors.displayName}</span>}
          </div>

          {/* Photo URL */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-semibold text-sm sm:text-base">Photo URL</label>
            <input
              type="text"
              name="photoURL"
              onChange={handleChange}
              placeholder="Enter photo URL"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-gray-700 text-gray-200 focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-500 transition"
            />
            {errors.photoURL && <span className="text-red-400 text-xs mt-1">{errors.photoURL}</span>}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-semibold text-sm sm:text-base">Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-gray-700 text-gray-200 focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-500 transition"
            />
            {errors.email && <span className="text-red-400 text-xs mt-1">{errors.email}</span>}
          </div>

         
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-semibold text-sm sm:text-base">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 rounded-xl bg-gray-700 text-gray-200 focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-500 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-500 transition"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={22} />
                ) : (
                  <AiOutlineEye size={22} />
                )}
              </button>
            </div>
            {errors.password && <span className="text-red-400 text-xs mt-1">{errors.password}</span>}
          </div>

        
          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-bold rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            Register
          </button>
        </form>

       
        <div className="flex items-center my-4 sm:my-5">
          <hr className="flex-grow border-gray-600" />
          <span className="px-2 sm:px-3 text-gray-400 text-sm sm:text-base">or</span>
          <hr className="flex-grow border-gray-600" />
        </div>

       
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 py-2 sm:py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition duration-300"
        >
          <FaGoogle className="text-yellow-500 text-lg sm:text-xl" />
          Register with Google
        </button>

       
        <p className="text-center text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base">
          Already have an account?{" "}
          <Link className="text-yellow-500 hover:text-yellow-400 font-semibold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
