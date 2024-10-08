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
import menu from '../assests/menu.png'
import { MdAddToPhotos } from "react-icons/md";
import caraousel from '../assests/caraousel.png'





const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const [openSubMenu, setOpenSubMenu] = useState(null); // To track which submenu is open



  const toggleSubMenu = (index) => {
    // If the clicked submenu is already open, close it
    if (openSubMenu === index) {
      setOpenSubMenu(null);
    } else {
      closeAllSubMenus();
      setOpenSubMenu(index);
    }
  };

  const closeAllSubMenus = () => {
    setOpenSubMenu(null);
  };


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
        <div className="dashboard-sidebar">
          <ul className='sidebar-items'>
            <li onClick={() => handleMenuClick('Dashboard')}><RxDashboard className='sidebar-icons' /><p className='sidebar-heading'>Dashboard</p></li>
            <li onClick={() => handleMenuClick('Add Your Restaurant')}><IoMdCheckboxOutline className='sidebar-icons' /><p className='sidebar-heading'>Add Your Restaurant</p></li>
            <li onClick={() => handleMenuClick('Manage Restaurant')}><IoFastFoodOutline className='sidebar-icons' /><p className='sidebar-heading'>Manage Restaurant</p></li>
            <li onClick={() => toggleSubMenu(1)}><RiPlayList2Line className='sidebar-icons' /><p className='sidebar-heading'>Your Playlist</p>
            </li>
            <div className={`sub-menu ${openSubMenu === 1 ? 'show' : ''}`}>


              <p onClick={() => handleMenuClick('Menus')}>Menus</p>
              <p onClick={() => handleMenuClick('Caraousel')}>Caraousel</p>

            </div>

            <li onClick={() => handleMenuClick('Portfolio')}><MdOutlineFeaturedPlayList className='sidebar-icons' /><p className='sidebar-heading'>Portfolio</p></li>
            <li onClick={() => handleMenuClick('Recent Activity')}><FiActivity className='sidebar-icons' /><p className='sidebar-heading'>Recent Activity</p></li>
            <li onClick={() => handleMenuClick('Notifications')}><IoMdNotificationsOutline className='sidebar-icons' /><p className='sidebar-heading'>Notifiations</p></li>
          </ul>
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
              <div className="dashboard-boxes">

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
                <Line data={data} options={options} height={420} />
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
            <Form className="update-form">

              <h2 className="update-form-heading">Update Restaurant Details</h2>

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

              <Button variant="primary" type="submit" className='update-form-button'>
                Add Restaurant Details
              </Button>
            </Form>
          )}

          {selectedItem === 'Menus' && (
            <div>
              <div className="playlist-container">

                <div className="restro-menu-header">

                  <p className='restro-menu-heading'>Menus</p>
                  <MdAddToPhotos className='restro-menu-icons' />
                </div>
                <div className="restro-menu-box">
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                  <img src={menu} className='menu-image' alt='menu'></img>
                </div>


              </div>
            </div>
          )}

          {selectedItem === 'Caraousel' && (
            <div>
              <div className="playlist-container">

                <div className="restro-menu-header">

                  <p className='restro-menu-heading'>Caraousel</p>
                  <MdAddToPhotos className='restro-menu-icons' />
                </div>
                <div className="restro-menu-box">
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                  <img src={caraousel} className='caraousel-image' alt='caraousel'></img>
                </div>






              </div>
            </div>
          )}


          {selectedItem === 'Portfolio' && (
            <div>
              <h3>Portfolio</h3>
              <p>Check Number of screens of your restaurants.</p>
            </div>
          )}
          {selectedItem === 'Recent Activity' && (
            <div>
              <h3>Recent Activity</h3>
              <p>Check recent Activity related to your restaurants.</p>
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
