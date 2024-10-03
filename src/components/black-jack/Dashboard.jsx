import React from 'react'
import './Dashboard.css'
import logo from '../assests/jack.png'
import { TfiDashboard } from "react-icons/tfi";
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










const Dashboard = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  const data = {
    labels: ['January',   'February', 'March', 'April', 'May', 'June', 'July','August','September'],
    datasets: [
      {
        label: 'Blue Line', // Blue Line data
        data: [0, 120, 100, 80, 50, 30, 100,120,180,200],
        fill: true,
        backgroundColor: 'rgba(173, 216, 230, 0.3)', // Light blue fill under the line
        borderColor: 'blue',
        tension: 0.2, // Line tension for a smooth curve
        borderWidth: 2,
        pointRadius: 0, // Removes points
      },
      {
        label: 'Green Line', // Green Line data
        data: [100, 110, 95, 75, 55, 30, 90,120,150],
        fill: false,
        borderColor: 'green',
        tension: 0.1, // Line tension for smooth curve
        borderWidth: 2,
        pointRadius: 0, // Removes points
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
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
          display: false, // Hide x-axis grid lines
        },
      },
    },
  };

  return (
    <div>
      <div className="dashboard">
        <div className="left_dashboard">
          <img className='logo' src={logo} alt='logo' />
          <div className="dashboard-menu">
            <div className="dropdown-menu">
              <TfiDashboard className='menu-icons' />
              <p className='dashboard-menu-box'>Dashboard</p>
            </div>
            <div className="dropdown-menu">
              <IoFastFoodOutline className='menu-icons' />
              <p className='dashboard-menu-box'>Your Restaraunt</p>
            </div>

            <div className="dropdown-menu">
              <RiPlayList2Line className='menu-icons' />
              <p className='dashboard-menu-box'>Your Playlist</p>
            </div>

            <div className="dropdown-menu">
              <MdOutlineFeaturedPlayList className='menu-icons' />
              <p className='dashboard-menu-box'>Portfolio</p>
            </div>
            <div className="dropdown-menu">
              <FiActivity className='menu-icons' />
              <p className='dashboard-menu-box'>Recent Activity</p>
            </div>
            <div className="dropdown-menu">
              <IoMdNotificationsOutline className='menu-icons' />
              <p className='dashboard-menu-box'>Notifications</p>
            </div>



          </div>





        </div>
        <div className="right_dashboard">
          <div className="right-header">
            <div className="left-part">
              <div className="header-box">
                <p className='header-dashboard'>DashBoard</p>
                <p className='header-settings'>Settings</p>
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
            <div className="box1">
              <p className='box-number'>0 (48.2%)</p>
              <p className='box-text'>Total Restaraunt</p>
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
              <h2>Usage</h2>
              <p>January - September 2024</p>
            </div>
            <div className="toggle-buttons">
              <button>Day</button>
              <button className="active">Month</button>
              <button>Year</button>
            </div>
            <Line data={data} className='karan' options={options} />
            
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
