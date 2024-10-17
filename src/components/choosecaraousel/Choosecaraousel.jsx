import React, { useState, useEffect } from 'react';
import './Choosecaraousel.css';
import menu from '../assests/menu.png'; 
import menu1 from '../assests/menu1.png'; 
import menu2 from '../assests/menu2.png'; 
import menu3 from '../assests/menu3.png'; 
import menu4 from '../assests/menu4.png'; 
import menu5 from '../assests/menu5.png'; 
import menu6 from '../assests/menu6.png'; 
import menu7 from '../assests/menu7.png';
import menu8 from '../assests/menu8.png'; 
import menu9 from '../assests/menu9.png';  
import menu10 from '../assests/menu10.png';  
import menu11 from '../assests/menu11.png';  

const Choosecaraousel = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = (image) => {
        if (selectedImages.includes(image)) {
            setSelectedImages(selectedImages.filter((img) => img !== image));
        } else {
            setSelectedImages([...selectedImages, image]);
        }
    };

    useEffect(() => {
        if (selectedImages.length > 0) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === selectedImages.length - 1 ? 0 : prevIndex + 1
                );
            }, 3000); 

            return () => clearInterval(interval); 
        }
    }, [selectedImages]);

   
    const menuImages = [menu, menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8, menu9,menu10,menu11];

    return (
        <div>
            <div className="choosecaraousel-image-container">
                <div className="choosecaraousel-image-preview">
                    <div className="choosecaraousel-imagee-container">
                        {selectedImages.length > 0 ? (
                            selectedImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Selected ${index}`}
                                    className={`selected-image ${
                                        index === currentImageIndex ? 'active' : ''
                                    }`}
                                />
                            ))
                        ) : (
                            <p>No images selected</p>
                        )}
                    </div>
                    <div className="choosecaraousel-image-name">Preview</div>
                </div>
                <div className="choosecaraousel-uploaded-static-images">
                    <div className="choosecaraousel-image-box">
                        {menuImages.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                className={`menu-image ${selectedImages.includes(image) ? 'selected' : ''}`}
                                alt={`menu-${index}`}
                                onClick={() => handleImageClick(image)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Choosecaraousel;
