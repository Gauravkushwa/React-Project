import React, { useEffect, useState } from "react";
import image1 from './image/ASlider2.1.jpg'
import image2 from './image/ASlider2.2.jpg'
import image3 from './image/ASlider2.3.jpg'
import image4 from './image/ASlider2..4.jpg'
import image5 from './image/ASlider2.5.jpg'
import image6 from './image/ASlider2.6.jpg'
import image7 from './image/ASlider2.7.jpg'
import image8 from './image/ASlider2.8.jpg'
import image9 from './image/ASlider2.9.jpg'
import image10 from './image/ASlider2.10.jpg'
import image11 from './image/ASlider2.11.jpg'
import image13 from './image/ASlider2.13.jpg'
import image14 from './image/ASlider2.14.jpg'
import image15 from './image/ASlider2.15.jpg'
 import './ASlider.css'

const images = [
  image1, image2, image3, image4, image5,image6, image7,image8, image8, image9,
  image10, image11, image13, image14, image15
];

export const ASlider2 = () => {
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
    <div className="slider-container">
      <div className="slider-wrapper" style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt="" className="slider-image" />
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
  );
};


