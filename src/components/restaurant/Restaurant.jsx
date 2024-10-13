import React from 'react';
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
    const restaurantData = [
        { name: 'Englunt', screens: 5 },
        { name: 'Food Hunt', screens: 7 },
        { name: 'Cafe Delight', screens: 10 },
        { name: 'Route 65', screens: 3 },
        { name: 'Delicious', screens: 8 },
        { name: 'Veer JI', screens: 9 }
    ];
    
  return (
    <div>
            <div className="restaurant-details-container">
                {restaurantData.map((restaurant, index) => (
                    <div className="restaurant-box" key={index}>
                        <p className='restaurant-name'>{restaurant.name}</p>
                        <p className='restaurant-details'>Restaurant Details:-</p>
                        <p className='restaurant-screens'>Restaurant Screens: {restaurant.screens}</p>
                        <div className="restaurant-buttons">
                            <button onClick={handlemanage}>Manage</button>
                            <button onClick={handlescreen}>Manage Screens</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    
  )
}

export default Restaurant
