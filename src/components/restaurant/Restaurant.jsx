import React, { useState } from 'react';
import './Restaurant.css'
import { useNavigate } from 'react-router-dom';

const Restaurant = () => {
    const navigate = useNavigate();
    const handlemanage = ()=>{
        navigate('/Managerestaurant')
    };
    const handlescreen = ()=>{
        navigate('/Screen')
    };
    
  return (
    <div>
      <div className="restaurant-details-container">
        
            <div className="restaurant-box">
                <p className='restaurant-name'>Restaurant Name</p>
                <p className='restaurant-details'>Restaurant Details:-</p>
                <p className='restaurant-Screens'>Restaurant Screens: 19</p>
                <div className="restaurant-buttons">
                    <button onClick={handlemanage}>Manage</button>
                    <button onClick={handlescreen} >Manage Screens</button>
                </div>
            </div>
            <div className="restaurant-box">
                <p className='restaurant-name'>Restaurant Name</p>
                <p className='restaurant-details'>Restaurant Details:-</p>
                <p className='restaurant-Screens'>Restaurant Screens: 19</p>
                <div className="restaurant-buttons">
                    <button>Manage</button>
                    <button onClick={handlescreen}>Manage Screens</button>
                </div>
            </div>
            <div className="restaurant-box">
                <p className='restaurant-name'>Restaurant Name</p>
                <p className='restaurant-details'>Restaurant Details:-</p>
                <p className='restaurant-Screens'>Restaurant Screens: 19</p>
                <div className="restaurant-buttons">
                    <button>Manage</button>
                    <button onClick={handlescreen}>Manage Screens</button>
                </div>
            </div>
            <div className="restaurant-box">
                <p className='restaurant-name'>Restaurant Name</p>
                <p className='restaurant-details'>Restaurant Details:-</p>
                <p className='restaurant-Screens'>Restaurant Screens: 19</p>
                <div className="restaurant-buttons">
                    <button>Manage</button>
                    <button onClick={handlescreen}>Manage Screens</button>
                </div>
            </div>
            <div className="restaurant-box">
                <p className='restaurant-name'>Restaurant Name</p>
                <p className='restaurant-details'>Restaurant Details:-</p>
                <p className='restaurant-Screens'>Restaurant Screens: 19</p>
                <div className="restaurant-buttons">
                    <button>Manage</button>
                    <button onClick={handlescreen}>Manage Screens</button>
                </div>
            </div>
            <div className="restaurant-box">
                <p className='restaurant-name'>Restaurant Name</p>
                <p className='restaurant-details'>Restaurant Details:-</p>
                <p className='restaurant-Screens'>Restaurant Screens: 19</p>
                <div className="restaurant-buttons">
                    <button>Manage</button>
                    <button onClick={handlescreen}>Manage Screens</button>
                </div>
            </div>
        </div>

      </div>
    
  )
}

export default Restaurant
