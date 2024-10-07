import React, { useEffect, useState } from 'react';
import './slider.css'; 
import image1 from './images/slider1.1.webp'
import image2 from './images/slider1.2.webp'
import image3 from './images/slider1.3.webp'
import image4 from './images/slider1.4.jpg'
import image5 from './images/slider1.5.webp'
import image6 from './images/slider1.6.gif'
import banner from './images/banner1.gif'

const ImageSlider = () => {
  const images = [
    image1, image2, image3, image4, image5, image6
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // If at the last set of images, reset to the first index
        if (prevIndex >= images.length - 3) {
          return 0;
        }
        return prevIndex + 1;
      });
    }, 4000);

    return () => clearInterval(interval); 
  }, [images.length]);


  const displayedImages = [
    images[currentIndex],
    images[(currentIndex + 1) % images.length],
    images[(currentIndex + 2) % images.length],
  ];

  return (
    <>
     <div className="slider-container">
        {displayedImages.map((image, index) => (
          <div key={index} className="slider-image">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <img id='banner' src={banner} alt="" />
    </>
  );
};

export default ImageSlider;
