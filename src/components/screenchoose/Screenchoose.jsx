import React, { useState } from 'react';
import './Screenchoose.css';
import menu from '../assests/menu.png'; 

const Screenchoose = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    
    const menuImages = Array(20).fill(menu); 

    return (
        <div>
            <div className="static-image-container">
                <div className="image-preview">
                    <div className="image-container">
                        {selectedImage ? (
                            <img src={selectedImage} alt="Selected" className="selected-image" />
                        ) : (
                            <p>No image selected</p>
                        )}
                    </div>
                    <div className="image-name">Preview</div>
                </div>
                <div className="uploaded-static-images">
                   
                    <div className="static-image-box">
                        {menuImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                className="menu-image"
                                alt="menu"
                                onClick={() => handleImageClick(image)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screenchoose;
