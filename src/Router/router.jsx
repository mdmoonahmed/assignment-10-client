
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddCar from "../Pages/AddCar/AddCar";
import MyLIsting from "../Pages/My Listing/MyLIsting";
import MyBookings from "../Pages/My Bookings/MyBookings";
import BrowseCar from "../Pages/Browse Car/BrowseCar";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
               path: '/',
               element: <Home></Home>,
               loader: ()=> fetch('http://localhost:4000/cars')
            },
            {
               path: '/add-car',
               element: <AddCar></AddCar>
            },
            {
                path: '/my-listing',
                element: <MyLIsting></MyLIsting>
            },
            {
                path: '/my-bookings',
                element: <MyBookings></MyBookings>
            },
            {
                path: '/browse-cars',
                element: <BrowseCar></BrowseCar>
            }

        ]
    }
])
