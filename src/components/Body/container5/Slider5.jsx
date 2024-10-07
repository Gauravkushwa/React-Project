import { useState } from "react";
import image1 from './image/image5.1.webp'
import image2 from './image/image5.2.webp'
import image3 from './image/image5.3.webp'
import image4 from './image/image5.4.webp'
import image5 from './image/image5.5.webp'
import image6 from './image/image5.6.webp'
import image7 from './image/image5.7.webp'
import image8 from './image/image5.8.webp'
import image9 from './image/image5.9.webp'
import image10 from './image/image5.10.webp'
import image11 from './image/image5.11.webp'
import image12 from './image/image5.12.webp'
import image13 from './image/image5.13.webp'
import image14 from './image/image5.14.webp'
import image15 from './image/image5.15.webp'
import  './Slider5.css'

export const Slider5 = () => {
    const images = [ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11,
        image12, image13, image14, image15
   ];
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 5;

    const handleRight = () =>{
        setStartIndex((prev) =>
            prev < images.length-visibleCount ? prev+5 : prev
        )
    };

    const handleLeft = () => {
        setStartIndex((prev) =>
            prev >= 5 ? prev -5 : prev
        )
    };

    return(
        <>
        <h4 style={{textAlign: "center", fontFamily: "sans-serif", textTransform: "uppercase", fontWeight: "200", marginTop: "20px"}}>Must Have Deals: Min 75% off</h4>
           <div className="slider-container">
        <button onClick={handleLeft} disabled={startIndex === 0} className="slider-button left">
          &#8249; 
        </button>
        <div className="slider">
          {images.slice(startIndex, startIndex + visibleCount).map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image} alt="" className="slider-image" />
            </div>
          ))}
        </div>
        <button onClick={handleRight} disabled={startIndex === images.length - visibleCount} className="slider-button right">
          &#8250;
        </button>
      </div>
      <h4 style={{fontFamily:"sans-serif", textAlign: "center", textDecoration:"underline", cursor:"pointer",color:"#42A2A2"}}>Explore more &#8250;</h4>
      {/* <img style={{width: "100%"}} sr alt="" /> */}
      <h3 style={{textAlign:"center",fontFamily:"sans-serif",textTransform:"uppercase",margin: "20px 0"}}>Shop by Category- Men</h3>
        </>
    )
}