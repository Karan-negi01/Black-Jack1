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
import { BiFoodMenu } from "react-icons/bi";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import menu from '../assests/menu.png'
import { MdAddToPhotos } from "react-icons/md";
import caraousel from '../assests/caraousel.png'
import { MdOutlineOndemandVideo } from "react-icons/md";
import { GoRepoTemplate } from "react-icons/go";







// const [openSubMenu, setOpenSubMenu] = useState(null); // To track which submenu is open



// const toggleSubMenu = (index) => {
//   // If the clicked submenu is already open, close it
//   if (openSubMenu === index) {
//     setOpenSubMenu(null);
//   } else {
//     closeAllSubMenus();
//     setOpenSubMenu(index);
//   }
// };

// const closeAllSubMenus = () => {
//   setOpenSubMenu(null);
// };


const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const [restaurantDetails, setRestaurantDetails] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRestaurantDetails({ ...restaurantDetails, [name]: value });
  };




  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzA0ZmZjYTMyNWZjMjhiNzQ3M2E5NmIiLCJpYXQiOjE3MjgzODEzNzR9.6GyQCpxiKzrER0o46qhSIAIiJWYByaLKCkyPWIvjmdc';
      const response = await axios.post('https://tv-app-cloud-backend.onrender.com/restaurant/add', restaurantDetails, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log("API response:", response);

      if (response.status === 200) {
        setSuccessMessage('Restaurant added successfully!');
        setSuccessMessage('');
        setRestaurantDetails({ name: '', email: '', password: '' }); // Clear form
      }
    } catch (error) {
      setErrorMessage('Failed to add restaurant. Please try again.');
      setErrorMessage('');
      console.log("failed")
    }
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
                <form onSubmit={handleFormSubmit}>
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="Restaurant Name"
                      name="name"
                      value={restaurantDetails.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={restaurantDetails.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={restaurantDetails.password}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="input-box button">
                    <input type="submit" value="Add Restaurant" />
                  </div>
                </form>
                {successMessage && <p className="success-message">{successMessage}</p>}
                {errorMessage && <p className="error-message">{errorMessage}</p>}

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

          
              <Button variant="primary" type="submit" className='update-form-button'>
                Add Restaurant Details
              </Button>
            </Form>
          )}


          {selectedItem === 'Menus' && (
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
