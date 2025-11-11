import React from 'react';
import { ToastContainer } from 'react-toastify';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
    <>
      <div className=''>
        <div className="sticky top-0 z-10">
          <Navbar></Navbar>
        </div>
        <div className='overflow-x-hidden'>
          <Outlet></Outlet>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </>
    );
};

export default MainLayout;