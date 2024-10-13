import React from 'react'
import './Screen.css'
import {  useNavigate } from 'react-router-dom'

const Screen = () => {

    const navigate = useNavigate();
    const handlescreenmanage=()=>{
        navigate('/Managescreen')
    }
    
    const screensdata=[
        { name: 'Reception'},
        { name: 'Counter 1'},
        { name: 'Counter 2'},
        { name: 'Counter 3'},
        { name: 'Counter 4'},
        { name: 'Kitchen'},
        { name: 'Left Gallery'},
        { name: 'Mid Gallery'},
        { name: 'Right Gallery'},

    ]
  return (
    
    <div className="screen-container">
    {screensdata.map((screen, index) => (
        <div className="screen-box" key={index}>
            <div className="screen-text">{screen.name}</div>
            <div className="screen-buttons">
                <button className="restrict">RESTRICT</button>
                <button className="manage" onClick={handlescreenmanage}>MANAGE</button>
            </div>
        </div>
    ))}
</div>
            
           
        
   
    
   
  )
}

export default Screen
