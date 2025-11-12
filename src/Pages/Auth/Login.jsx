import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();


  const validatePassword = (password) => {
    const errors = [];
    if (!/[A-Z]/.test(password))
      errors.push("Must contain at least one uppercase letter");
    if (!/[a-z]/.test(password))
      errors.push("Must contain at least one lowercase letter");
    if (password.length < 6) errors.push("Must be at least 6 characters long");
    return errors;
  };


  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value.trim();
    const password = event.target.password.value;

    const errors = validatePassword(password);
    if (errors.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        html: errors.join("<br/>"),
        background: "#1f2937",
        color: "#facc15",
        confirmButtonColor: "#facc15",
      });
      return;
    }

    signInUser(email, password)
      .then((result) => {
        event.target.reset();
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${result.user.email}!`,
          background: "#1f2937",
          color: "#facc15",
          confirmButtonColor: "#facc15",
        }).then(() => {
          navigate(location.state || "/");
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
          background: "#1f2937",
          color: "#facc15",
          confirmButtonColor: "#facc15",
        });
      });
  };


  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${
            result.user.displayName || result.user.email
          }!`,
          background: "#1f2937",
          color: "#facc15",
          confirmButtonColor: "#facc15",
        }).then(() => {
          navigate(location?.state || "/");
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
          background: "#1f2937",
          color: "#facc15",
          confirmButtonColor: "#facc15",
        });
      });
  };

  return (
    <div className="flex items-center justify-center py-10 md:min-h-screen bg-linear-to-r from-black via-gray-900 to-black px-4 sm:px-6 md:px-8 animate-fadeIn">
      <div className="w-full max-w-md bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-700">
        <h1 className="text-3xl sm:text-4xl font-bold text-yellow-500 text-center mb-6 sm:mb-8 animate-bounce">
          Login
        </h1>

        <form onSubmit={handleLogIn} className="space-y-3 sm:space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-semibold text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-xl bg-gray-700 text-gray-200 focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-500 transition"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 mb-1 font-semibold text-sm sm:text-base">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 sm:px-4 sm:py-3 pr-10 rounded-xl bg-gray-700 text-gray-200 focus:outline-yellow-500 focus:ring-2 focus:ring-yellow-500 transition"
                required
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
          </div>

          <button
            type="submit"
            className="w-full py-2 sm:py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-gray-900 font-bold rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4 sm:my-5">
          <hr className="flex-grow border-gray-600" />
          <span className="px-2 sm:px-3 text-gray-400 text-sm sm:text-base">
            or
          </span>
          <hr className="flex-grow border-gray-600" />
        </div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 py-2 sm:py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-xl transition duration-300"
        >
          <FaGoogle className="text-yellow-500 text-lg sm:text-xl" />
          Login with Google
        </button>

        <p className="text-center text-gray-400 mt-4 sm:mt-6 text-sm sm:text-base">
          New to our platform?{" "}
          <Link
            className="text-yellow-500 hover:text-yellow-400 font-semibold"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
