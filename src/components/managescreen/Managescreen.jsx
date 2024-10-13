
import './Managescreen.css'

import React, { useState } from 'react';


const Managescreen = () => {



    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(() => {
        return localStorage.getItem('selectedOption') || 'Select Content';
    });



    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false); 
        localStorage.setItem('selectedOption', option);
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
                                <li onClick={() => handleOptionClick('Static Image')}>Static Image</li>
                                <li onClick={() => handleOptionClick('Video')}>Video</li>
                                <li onClick={() => handleOptionClick('Carousel')}>Carousel</li>
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
