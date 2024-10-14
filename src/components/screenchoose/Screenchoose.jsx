import React, { useState } from 'react';
import './Screenchoose.css';
import menu from '../assests/menu.png'; // Assuming all images are the same

const Screenchoose = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    // Array of images (in this case, all are 'menu')
    const menuImages = Array(20).fill(menu); // Array with 20 'menu' images

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
