import React, { useState } from 'react';
import './Dashboard.css';
import logo from '../assests/jack.png';
import { RxDashboard } from "react-icons/rx";
import { IoMdCheckboxOutline } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiPlayList2Line } from "react-icons/ri";
import { MdOutlineFeaturedPlayList } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { BsBrightnessHigh } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';





const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);


  const handleMenuClick = (item) => {
    setSelectedItem(item);
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [
      {
        label: 'Blue Line',
        data: [0, 120, 100, 80, 50, 30, 100, 120, 180, 200],
        fill: true,
        backgroundColor: 'rgba(173, 216, 230, 0.3)',
        borderColor: 'blue',
        tension: 0.2,
        borderWidth: 2,
        pointRadius: 0,
      },
      {
        label: 'Green Line',
        data: [100, 110, 95, 75, 55, 30, 90, 120, 150],
        fill: false,
        borderColor: 'green',
        tension: 0.1,
        borderWidth: 2,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        max: 300,
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="dashboard">
      <div className="left_dashboard">
        <img className='logo' src={logo} alt='logo' />
        <div className="dashboard-menu">
          <div className="dropdown-menu" onClick={() => handleMenuClick('Dashboard')}>
            <RxDashboard className='menu-icons' />
            <p className='dashboard-menu-box'>Dashboard</p>
          </div>
          <div className="dropdown-menu" onClick={() => handleMenuClick('Add Your Restaurant')}>
            <IoFastFoodOutline className='menu-icons' />
            <p className='dashboard-menu-box'>Add Your Restaurant</p>
          </div>
          <div className="dropdown-menu" onClick={() => handleMenuClick('Manage Restaurant')}>
            <IoMdCheckboxOutline  className='menu-icons' />
            <p className='dashboard-menu-box'>Manage Restaurant</p>
          </div>
          <div className="dropdown-menu" onClick={() => handleMenuClick('Your Playlist')}>
            <RiPlayList2Line className='menu-icons' />
            <p className='dashboard-menu-box'>Your Playlist</p>
          </div>
          <div className="dropdown-menu" onClick={() => handleMenuClick('Portfolio')}>
            <MdOutlineFeaturedPlayList className='menu-icons' />
            <p className='dashboard-menu-box'>Portfolio</p>
          </div>
          <div className="dropdown-menu" onClick={() => handleMenuClick('Recent Activity')}>
            <FiActivity className='menu-icons' />
            <p className='dashboard-menu-box'>Recent Activity</p>
          </div>
          <div className="dropdown-menu" onClick={() => handleMenuClick('Notifications')}>
            <IoMdNotificationsOutline className='menu-icons' />
            <p className='dashboard-menu-box'>Notifications</p>
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
          {selectedItem === 'Dashboard' && (
            <>
              <div className="box1">
                <p className='box-number'>0 (48.2%)</p>
                <p className='box-text'>Total Restaurants</p>
              </div>
              <div className="box2">
                <p className='box-number'>0</p>
                <p className='box-text'>Total Screens</p>
              </div>
              <div className="box3">
                <p className='box-number'>0</p>
                <p className='box-text'>Active Screens</p>
              </div>
              <div className="box4">
                <p className='box-number'>0</p>
                <p className='box-text'>Total Menus</p>
              </div>
              <div className="chart-container">
                <div className="chart-header">
                  <div className="chart-heading">
                    <h2>Usage</h2>
                    <p>January - September 2024</p>
                  </div>
                  <div className="toggle-buttons">
                    <button>Day</button>
                    <button className="active">Month</button>
                    <button>Year</button>
                  </div>
                </div>
                <Line data={data} options={options} height={430} />
              </div>
            </>
          )}
          {selectedItem === 'Add Your Restaurant' && (
            <div>
              <div className="wrapper">
                <h2>Add Your Restaurant</h2>
                <form action="#">
                  <div className="input-box">
                    <input type="text" placeholder="Restaurant Name" required />
                  </div>
                  <div className="input-box">
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="input-box">
                    <input type="password" placeholder="Password" required />
                  </div>

                  <div className="input-box button">
                    <input type="submit" value="Add Restaurant" />
                  </div>
                </form>
              </div>
            </div>
          )}


          {selectedItem === 'Manage Restaurant' && (
           <Form className="update-details">

           <h2 className="detail-heading">Update Restaurant Details</h2>
     
           <Form.Group className="detail" controlId="restaurantName">
             <Form.Label>Restaurant Name</Form.Label>
             <Form.Control placeholder="Abcd" />
           </Form.Group>
     
           <Form.Group className="detail" controlId="aboutRestaurant">
             <Form.Label>About Restaurant</Form.Label>
             <Form.Control as="textarea" rows={3} placeholder="Describe your restaurant..." />
           </Form.Group>
     
           <Form.Group className="detail" controlId="location">
             <Form.Label>Location</Form.Label>
             <Form.Control placeholder="India" />
           </Form.Group>
     
           <Form.Group className="detail" controlId="site">
             <Form.Label>Site</Form.Label>
             <Form.Control placeholder="https://www.xyz.com" />
           </Form.Group>
     
           <Form.Group className="detail-2" controlId="menuImage">
             <Form.Label>Menus</Form.Label>
             <Form.Control type="file" accept="image/*" />
           </Form.Group>
     
           <Button variant="primary" type="submit" className='details'>
             Add Restaurant Details
           </Button>
         </Form>
          )}

          {selectedItem === 'Your Playlist' && (
            <div>
              <h3>Your Playlist Details</h3>
              <p>Manage your playlists and see the content being played.</p>
            </div>
          )}

          {selectedItem === 'Notifications' && (
            <div>
              <h3>Notifications</h3>
              <p>Check recent notifications related to your restaurants.</p>
            </div>
          )}
         

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
