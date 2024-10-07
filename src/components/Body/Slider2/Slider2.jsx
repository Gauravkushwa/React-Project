import { useState } from "react";
import image1 from './image2/slider2.1.webp'
import image2 from './image2/slider2.2.webp'
import image3 from './image2/slider2.3.webp'
import image4 from './image2/slider2.4.webp'
import image5 from './image2/slider2.5.webp'
import image6 from './image2/slider2.6.webp'
import image7 from './image2/slider2.7.webp'
import image8 from './image2/slider2.8.webp'
import image9 from './image2/slider2.9.webp'
import image10 from './image2/slider2.10.webp'
import heart from './image2/heart.png'
import  './slider2.css'

export const Slider2 = () => {
    const images = [{
       src: image1,
       title: "Bewakoof@",
       heart: heart,
       discription: "Men's Navy Blue Joggers",
       currentPrice: "₹849",
       actualPrice: "₹1699",
       discount: "50% OFF"                             
    },
    {
        src: image2,
        title: "Bewakoof Air@1.0",
        heart: heart,
        discription: "Men's Brown Super Loose Fit Joggers",
        currentPrice: "₹749",
        actualPrice: "₹2099",
        discount: "64% OFF"                             
     },
     {
        src: image3,
        title: "Bewakoof Air@ 1.0",
        heart: heart,
        discription: "Men's Grey Oversized Cargb Joggers",
        currentPrice: "₹899",
        actualPrice: "₹2199",
        discount: "59% OFF"                             
     },
     {
        src: image4,
        title: "Bewakoof@",
        heart: heart,
        discription: "Men's Blue Casual Joggers",
        currentPrice: "₹664",
        actualPrice: "₹899",
        discount: "28% OFF"                             
     },
     {
        src: image5,
        title: "Bewakoof@",
        heart: heart,
        discription: "Women's Grey Slim Fit Joggers",
        currentPrice: "₹599",
        actualPrice: "₹899",
        discount: "50% OFF"                             
     },
     {
        src: image6,
        title: "Bewakoof@",
        heart: heart,
        discription: "Women's Grey Slim Fit Joggers",
        currentPrice: "₹599",
        actualPrice: "₹899",
        discount: "50% OFF"                             
     },
     {
        src: image7,
        title: "Bewakoof Air@ 1.0",
        heart: heart,
        discription: "Men's Brown Oversized Cafgo Joggers",
        currentPrice: "₹809",
        actualPrice: "₹1949",
        discount: "50% OFF"                             
     },
     {
        src: image8,
        title: "Bewakoof Air@ 1.0",
        heart: heart,
        discription: "Men's Black Oversized Joggers",
        currentPrice: "₹849",
        actualPrice: "₹1999",
        discount: "52% OFF"                             
     },
     {
        src: image9,
        title: "Bewakoof Heavy Duty@ 1.0",
        heart: heart,
        discription: "Men's Grey Super Loose Fit Cargo Joggers",
        currentPrice: "₹899",
        actualPrice: "₹2149",
        discount: "58% OFF"                             
     },
     {
        src: image10,
        title: "Bewakoof Air@ 1.0",
        heart: heart,
        discription: "Women's Blue Oversized Cargo Joggers",
        currentPrice: "₹639",
        actualPrice: "₹1599",
        discount: "60% OFF"                             
     },
   ];
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 5;

    const handleRight = () =>{
        setStartIndex((prev) =>
            prev < images.length-visibleCount ? prev+1 : prev
        )
    };

    const handleLeft = () => {
        setStartIndex((prev) =>
            prev > 0 ? prev -1 : prev
        )
    };

    return(
        <>
        <h4 style={{textAlign: "center", fontFamily: "sans-serif", textTransform: "uppercase", fontWeight: "200"}}>Joggers under Rs 899</h4>
           <div className="slider-container">
        <button onClick={handleLeft} disabled={startIndex === 0} className="slider-button left">
          &#8249; 
        </button>
        <div className="slider">
          {images.slice(startIndex, startIndex + visibleCount).map((image, index) => (
            <div key={index} className="slider-item">
              <img src={image.src} alt={image.title} className="slider-image" />
              <div className="slider-info">
                <img src={image.heart} alt="heart" className="heart-icon" />
                <h3 className="product-title">{image.title}</h3>
                <p className="product-description">{image.discription}</p>
                <div className="price-info">
                  <span className="current-price">{image.currentPrice}</span>
                  <span className="actual-price">{image.actualPrice}</span>
                  <span className="discount">{image.discount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={handleRight} disabled={startIndex === images.length - visibleCount} className="slider-button right">
          &#8250;
        </button>
      </div>
      <h4 style={{fontFamily:"sans-serif", textAlign: "center", textDecoration:"underline", cursor:"pointer",color:"#42A2A2"}}>Explore more &#8250;</h4>
        </>
    )
}