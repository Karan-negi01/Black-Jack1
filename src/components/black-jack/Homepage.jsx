import React from 'react';
import './Homepage.css';
import logo from '../assests/jack.png';
import { RxDashboard } from "react-icons/rx";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";

import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { BsBrightnessHigh } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";

import { BiFoodMenu } from "react-icons/bi";  




import { MdOutlineOndemandVideo } from "react-icons/md";
import { GoRepoTemplate } from "react-icons/go";


import {Routes, Route, useNavigate } from 'react-router-dom';
import Addrestaurant from '../addrestaurant/Addrestaurant';
import Managerestaurant from '../managerestaurant/Managerestaurant';
import Dashboard from '../dashboard/Dashboard';
import Menus from '../menus/Menus';
import Caraousel from '../caraousel/Caraousel';
import Restaurant from '../restaurant/Restaurant';
import Screen from '../screens/Screen';
import Managescreen from '../managescreen/Managescreen';







const Homepage = () => {


  const navigate = useNavigate();
  
  const handleMenuClick = (item) => {
    if (item === 'Dashboard') {
      navigate('/Dashboard');
    } else if (item === 'Add Your Restaurant') {
      navigate('/addrestaurant');
    }
    else if (item === 'Manage Restaurant') {
      navigate('/Restaurant');
    }
    else if (item === 'Menus') {
      navigate('/Menus');
    }
    else if (item === 'Caraousel') {
      navigate('/Caraousel');
    }
  };

  



  








  

  return (
    <div className="dashboard">
      <div className="left_dashboard">
        <img className='logo' src={logo} alt='logo' />
        <div className="dashboard-sidebar">
          <div className="dashboard-sidebar-box" onClick={() => handleMenuClick('Dashboard')}>
            <RxDashboard className='sidebar-icons' />
            <p className='dashboard-sidebar-box'>Dashboard</p>
          </div>
          <div className="dashboard-sidebar-box" onClick={() => handleMenuClick('Add Your Restaurant')}>
            <IoFastFoodOutline className='sidebar-icons' />
            <p className='dashboard-sidebar-box'>Add Your Restaurant</p>
          </div>
          <div className="dashboard-sidebar-box" onClick={() => handleMenuClick('Manage Restaurant')}>
            <IoMdCheckboxOutline className='sidebar-icons' />
            <p className='dashboard-sidebar-box'>Manage Restaurant</p>
          </div>
          <div className="dashboard-sidebar-box" onClick={() => handleMenuClick('Menus')}>
            <BiFoodMenu className='sidebar-icons' />
            <p className='dashboard-sidebar-box'>Menus</p>
          </div>
          <div className="dashboard-sidebar-box" onClick={() => handleMenuClick('Caraousel')}>
            <MdOutlineOndemandVideo className='sidebar-icons' />
            <p className='dashboard-sidebar-box'>Caraousel</p>
          </div>
          <div className="dashboard-sidebar-box" onClick={() => handleMenuClick('Template')}>
            <GoRepoTemplate className='sidebar-icons' />
            <p className='dashboard-sidebar-box'>Templates</p>
          </div>
          <div className="dashboard-sidebar-box" onClick={() => handleMenuClick('Portfolio')}>
            <MdOutlineFeaturedPlayList className='sidebar-icons' />
            <p className='dashboard-sidebar-box'>Portfolio</p>
          </div>
          <div className="dashboard-sidebar-box" onClick={() => handleMenuClick('Recent Activity')}>
            <FiActivity className='sidebar-icons' />
            <p className='dashboard-sidebar-box'>Recent Activity</p>
          </div>
          <div className="dashboard-sidebar-box" onClick={() => handleMenuClick('Notifications')}>
            <IoMdNotificationsOutline className='sidebar-icons' />
            <p className='dashboard-sidebar-box'>Notifications</p>
          </div>
        </div>
      </div>

      <div className="right_dashboard">
        <div className="right-header">
          <div className="left-part">
            <div className="header-box">

              <p className='header-dashboard'>Profile</p>
              <p className='header-dashboard'>Settings</p>

            </div>
          </div>
          <div className="right-part">
            <IoMdNotificationsOutline className='header-icons' />
            <CiCircleList className='header-icons' />
            <CiMail className='header-icons' />
            <BsBrightnessHigh className='header-icons' />
          </div>
        </div>

        <div className="right-box">
          <Routes>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Addrestaurant" element={<Addrestaurant />} />
            <Route path="/Managescreen" element={<Managescreen/>} />
            <Route path="/Restaurant" element={<Restaurant/>} />
            <Route path="/Managerestaurant" element={<Managerestaurant />} />
            <Route path="/Screen" element={<Screen/>} />
            <Route path="/Menus" element={<Menus/>} />
            <Route path="/Caraousel" element={<Caraousel />} />
          </Routes>
        </div>

        





         

          


      


        </div>
      </div>
    
  );
}

export default Homepage;
