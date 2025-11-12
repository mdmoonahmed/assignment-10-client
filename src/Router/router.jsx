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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:4000/latest-cars"),
      },
      {
        path: "/add-car",
        element: <PrivateRoutes>
             <AddCar></AddCar>
        </PrivateRoutes> ,
      },
      {
        path: "/my-listing",
        element: <PrivateRoutes>
            <MyLIsting></MyLIsting>
        </PrivateRoutes>,
      },
      {
        path: "/my-bookings",
        element: <PrivateRoutes>
            <MyBookings></MyBookings>
        </PrivateRoutes>,
      },
      {
        path: "/browse-cars",
        element: <BrowseCar></BrowseCar>,
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
