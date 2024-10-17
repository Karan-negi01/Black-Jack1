
import './Managescreen.css'

import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';


const Managescreen = () => {

    const navigate = useNavigate();
    const handleoptions = (path) => {
        navigate(path);
      };

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(() => {
        return localStorage.getItem('selectedOption') || 'Select Content';
    });



    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option, path) => {
        setSelectedOption(option);
        setIsOpen(false);
        localStorage.setItem('selectedOption', option);
        handleoptions(path); 
      };
    return (

        <div className="manage-screen-container">
            <div className="manage-screen-box">
                <div className="manage-screen-background"></div>
                <div className="manage-screen-name">
                    <p className='manage-screen-text'>Reception</p>
                    <div className="manage-screen-dropdown">
                        <div className="select" onClick={toggleDropdown}>
                            <span className='Selected'>{selectedOption}</span>
                            <div className={`caret ${isOpen ? 'caret-rotate' : ''}`}></div>

                        </div>
                        {isOpen && (
                             <ul className={`manage-screen-dropdown-menu ${isOpen ? 'show' : ''}`}>
                                <li onClick={() => handleOptionClick('Static Image','/Screenchoose')}>Static Image</li>
                                <li onClick={() => handleOptionClick('Video', '/Choosevideo' )}>Video</li>
                                <li onClick={() => handleOptionClick('Carousel', '/Choosecaraousel')}>Carousel</li>
                                <li onClick={() => handleOptionClick('Template')}>Template</li>
                            </ul>
                        )}
                    </div>

                </div>


            </div>
        </div>
    )
}

export default Managescreen
