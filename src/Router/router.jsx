import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddCar from "../Pages/AddCar/AddCar";
import MyLIsting from "../Pages/My Listing/MyLIsting";
import MyBookings from "../Pages/My Bookings/MyBookings";
import BrowseCar from "../Pages/Browse Car/BrowseCar";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import PrivateRoutes from "./PrivateRoutes";
import CarDetails from "../Pages/CarDetails/CarDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://rent-wheel-nine.vercel.app/latest-cars"),
      },
      {
        path: "/add-car",
        element: (
          <PrivateRoutes>
            <AddCar></AddCar>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-listing",
        element: (
          <PrivateRoutes>
            <MyLIsting></MyLIsting>
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoutes>
            <MyBookings></MyBookings>
          </PrivateRoutes>
        ),
      },
      {
        path: "/browse-cars",
        element: <BrowseCar></BrowseCar>,
        loader: () => fetch("https://rent-wheel-nine.vercel.app/cars"),
      },
      {
        path: "/car-details/:id",
        element: (
          <PrivateRoutes>
            <CarDetails></CarDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("https://rent-wheel-nine.vercel.app/cars"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
