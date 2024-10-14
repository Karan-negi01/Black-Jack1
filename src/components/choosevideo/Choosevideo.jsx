import React, { useState } from 'react'
import caraousel from '../assests/caraousel.png'
import './Choosevideo.css'


const Choosevideo = () => {
    const [selectedvideo, setSelectedvideo] = useState(null);

    const handleImageClick = (video) => {
        setSelectedvideo(video);
    };

    const videos = Array(20).fill(caraousel); 


  return (
    <div>
            <div className="static-video-container">
                <div className="video-preview">
                    <div className="video-container">
                        {selectedvideo ? (
                            <img src={selectedvideo} alt="Selected" className="selected-video" />
                        ) : (
                            <p>No video selected</p>
                        )}
                    </div>
                    <div className="video-name">Preview</div>
                </div>
                <div className="uploaded-video">
                   
                    <div className="static-video-box">
                        {videos.map((video, index) => (
                            <img
                                key={index}
                                src={video}
                                className="caraousel-image"
                                alt="video"
                                onClick={() => handleImageClick(video)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Choosevideo
