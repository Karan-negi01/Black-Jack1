import React, { useState, useRef } from 'react';
import './Dropdown.css'

import { RxDashboard } from "react-icons/rx";







const Dropdown = () => {
 
    const [subMenuState, setSubMenuState] = useState({});

  
    
  
  

    const toggleSubMenu = (index) => {
      setSubMenuState((prevState) => {
        const isSubMenuCurrentlyOpen = !!prevState[index]; // Check if the current submenu is open
    
        // If the submenu is being opened, close all other submenus first
        if (!isSubMenuCurrentlyOpen) {
          return {
            ...closeAllSubMenus(),
            [index]: true,
          };
        }
    
        // Otherwise, just toggle the current submenu
        return {
          ...prevState,
          [index]: !prevState[index],
        };
      });
    };
    
    // Close all submenus by resetting the state
    const closeAllSubMenus = () => {
      return {};
    };
    

  
  
    return (
        <div>
          <nav id="sidebar">
            <ul>
            
             
              






              <li>
                <button
                  onClick={() => toggleSubMenu(0)}
                  className={`dropdown-btn ${subMenuState[0] ? 'rotate' : ''}`}
                >
                 <div className="sidebar-items">
                 <RxDashboard className='sidebar-icons' />
                 <p className='dashboard-sidebar-text'>Dashboard</p>
                 </div>
                </button>
                <ul className={`sub-menu ${subMenuState[0] ? 'show' : ''}`}>
                  <div>
                    <li onClick={() => handleMenuClick('Dashboard')}><a href="#">Performance Snapshot</a></li>
                    <li onClick={() => handleMenuClick('Dashboard')}><a href="#">Google Publishing</a></li>
                  
                  </div>
                </ul>
              </li>


              
              <li>
                <button
                  onClick={() => toggleSubMenu(1)}
                  className={`dropdown-btn ${subMenuState[1] ? 'rotate' : ''}`}
                >
                 <div className="sidebar-items">
                 <RxDashboard className='sidebar-icons' />
                 <p className='dashboard-sidebar-text'>ddjdjd</p>
                 </div>
                </button>
                <ul className={`sub-menu ${subMenuState[1] ? 'show' : ''}`}>
                  <div>
                    <li onClick={() => handleMenuClick('Dashboard')}><a href="#">Performance Snapshot</a></li>
                    <li onClick={() => handleMenuClick('Dashboard')}><a href="#">Google Publishing</a></li>
                  
                  </div>
                </ul>
              </li>




              
              <li>
                <button
                  onClick={() => toggleSubMenu(2)}
                  className={`dropdown-btn ${subMenuState[2] ? 'rotate' : ''}`}
                >
                 <div className="sidebar-items">
                 <RxDashboard className='sidebar-icons' />
                 <p className='dashboard-sidebar-text'>Dashboard</p>
                 </div>
                </button>
                <ul className={`sub-menu ${subMenuState[2] ? 'show' : ''}`}>
                  <div>
                    <li onClick={() => handleMenuClick('Dashboard')}><a href="#">Performance Snapshot</a></li>
                    <li onClick={() => handleMenuClick('Dashboard')}><a href="#">Google Publishing</a></li>
                  
                  </div>
                </ul>
              </li>
              






      
              
            
              
                
            </ul>
          </nav>
        </div>
      );
    };

export default Dropdown
