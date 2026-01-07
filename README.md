# RentWheel – Car Rental Web Application
[![Live Demo](public/Screenshot%202026-01-01%20024239.png)](https://rentwheel-moon.vercel.app/)
RentWheel is a modern, full-stack car rental platform where users can browse, book, and list cars for rent. The application focuses on clean UI, real-world rental logic, and smooth user experience using a dark-themed design.

## Live Website

[https://rentwheel-moon.vercel.app/]

## Project Purpose

This project was developed as part of a web development assignment to demonstrate frontend and backend integration, authentication, database operations, private routes, and real-world booking workflows.

## Key Features

### Home Page

- Hero banner with car name search
- Displays latest 6 added cars
- Featured Cars section
- Why Rent With Us section
- Compare Cars section
- Testimonials section

### Search Functionality

- Search implemented on Home page
- Search works by car name
- Redirects users to Browse Cars page with filtered results

### Browse Cars

- View all available cars
- Search-based filtering
- Responsive card layout
- Dark theme design

### Car Details Page

- Full car information
- Car specifications (fuel type, transmission, engine, seats, mileage, top speed, year)
- Provider information
- Real-time car availability status
- Book Now button (disabled if unavailable)

### Authentication

- Email and password authentication
- Google login
- Private routes for protected pages

### Add Car (Private Route)

- Car name
- Description
- Category (Sedan, SUV, Hatchback, Luxury, Electric)
- Rent price per day
- Location
- Hosted image URL
- Provider name (read-only)
- Provider email (read-only)
- Car specifications input
- Data saved to database with success toast

### My Listings (Private Route)

- Displays all cars added by logged-in provider
- Shows car name, category, rent price, status
- Update car information
- Delete car
- Status badge (Available / Unavailable)

### Update Car

- Pre-filled form with existing car data
- Provider name and email are read-only
- Optional image update
- Updates database and shows success toast
- Implemented using a modal

### Booking System

- Users can book available cars
- Booking data stored with user information
- Car status updates to Unavailable after booking
- Success confirmation toast shown

### My Bookings (Private Route)

- Displays all bookings made by logged-in user
- Shows booked car details and booking status

### UI & Design

- Fully responsive
- Dark theme interface
- Yellow primary color
- Smooth animations using Framer Motion
- Modern and professional layout

## Tech Stack

### Frontend

- React
- React Router
- Tailwind CSS
- Framer Motion
- Swiper
- React Hot Toast

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Authentication

- Firebase Authentication

### Hosting

- Frontend: Vercel
- Backend: Vercel

## Conclusion

RentWheel provides a complete car rental solution with authentication, booking logic, and provider management. The project follows best practices for modern web applications and fulfills all the assignment requirements successfully.
