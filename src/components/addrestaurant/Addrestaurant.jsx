import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Addrestaurant = () => {

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
    
      const navigate = useNavigate();



    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
          const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzA0ZmZjYTMyNWZjMjhiNzQ3M2E5NmIiLCJpYXQiOjE3MjgzODEzNzR9.6GyQCpxiKzrER0o46qhSIAIiJWYByaLKCkyPWIvjmdc';
    
          const response = await axios.post('https://tv-app-cloud-backend.onrender.com/restaurant/add', restaurantDetails, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': "application/json",
            }
          });
          console.log("response:", response.data);
          setSuccessMessage('Restaurant added successfully!');
          setRestaurantDetails({ name: '', email: '', password: '' });
          setErrorMessage(""); 
          alert("Restaurant Added Sucessfully");
          navigate('/Restaurant');
    
        } catch (error) {
          setErrorMessage('Failed to add restaurant!!! Please try again.');
          setSuccessMessage("");
          console.log("failed")
          console.error("Error details:", error.response ? error.response.data : error.message);
        }
      };
    



  return (
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
  )
}

export default Addrestaurant
