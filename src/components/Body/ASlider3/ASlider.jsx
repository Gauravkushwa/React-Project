import React, { useEffect, useState } from "react";
import image1 from './image/ASlider3.1.webp'
import image2 from './image/ASlider3.2.webp'
import image3 from './image/ASlider3.3.jpg'
import image4 from './image/ASlider3.4.jpg'
import banner from './image/banner3.jpg'
 import './ASlider.css'

const images = [
  image1, image2, image3, image4, 
];

export const ASlider3 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        slideToNext();
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, [currentIndex]);
  
    const slideToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const slideToIndex = (index) => {
      setCurrentIndex(index);
    };
  
    return (
      <>
      <div className="slider-container">
        <div className="slider-wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Slide ${index}`} className="slider-image" />
          ))}
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => slideToIndex(index)}
            />
          ))}
        </div>
      </div>
      <img style={{marginTop:"20px"}} id="banner" src={banner} alt="" />
      </>
    );
  };

