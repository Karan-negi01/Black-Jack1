import React from 'react'
import './Screen.css'
import {  useNavigate } from 'react-router-dom'

const Screen = () => {

    const navigate = useNavigate();
    const handlescreenmanage=()=>{
        navigate('/Managescreen')
    }

  return (
    <div>
      <div className="screen-container">
        <div className="screen-box">
            <div className="screen-text">
                Screen Name
            </div>
            <div className="screen-buttons">
                <button className='restrict'>RESTRICT</button>
                <button className='Manage' onClick={handlescreenmanage}>MANAGE</button>
            </div>
        </div>
        <div className="screen-box">
            <div className="screen-text">
                Screen Name
            </div>
            <div className="screen-buttons">
                <button className='restrict'>RESTRICT</button>
                <button className='Manage' onClick={handlescreenmanage}>MANAGE</button>
            </div>
        </div>
        <div className="screen-box">
            <div className="screen-text">
                Screen Name
            </div>
            <div className="screen-buttons">
                <button className='restrict'>RESTRICT</button>
                <button className='Manage' onClick={handlescreenmanage}>MANAGE</button>
            </div>
        </div>
        <div className="screen-box">
            <div className="screen-text">
                Screen Name
            </div>
            <div className="screen-buttons">
                <button className='restrict'>RESTRICT</button>
                <button className='Manage' onClick={handlescreenmanage}>MANAGE</button>
            </div>
        </div>
        <div className="screen-box">
            <div className="screen-text">
                Screen Name
            </div>
            <div className="screen-buttons">
                <button className='restrict'>RESTRICT</button>
                <button className='Manage' onClick={handlescreenmanage}>MANAGE</button>
            </div>
        </div>
        <div className="screen-box">
            <div className="screen-text">
                Screen Name
            </div>
            <div className="screen-buttons">
                <button className='restrict'>RESTRICT</button>
                <button className='Manage' onClick={handlescreenmanage}>MANAGE</button>
            </div>
        </div>
        <div className="screen-box">
            <div className="screen-text">
                Screen Name
            </div>
            <div className="screen-buttons">
                <button className='restrict'>RESTRICT</button>
                <button className='Manage' onClick={handlescreenmanage}>MANAGE</button>
            </div>
        </div>
        <div className="screen-box">
            <div className="screen-text">
                Screen Name
            </div>
            <div className="screen-buttons">
                <button className='restrict'>RESTRICT</button>
                <button className='Manage' onClick={handlescreenmanage}>MANAGE</button>
            </div>
        </div>
        <div className="screen-box">
            <div className="screen-text">
                Screen Name
            </div>
            <div className="screen-buttons">
                <button className='restrict'>RESTRICT</button>
                <button className='Manage' onClick={handlescreenmanage}>MANAGE</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Screen
