import React from 'react'
import { useState ,useEffect } from 'react';
import './slider.css'
import image1 from '../assests/image1.jpg'
import image2 from '../assests/image2.jpg'
import image3 from '../assests/image3.jpg'
import image4 from '../assests/image4.jpg'
import image5 from '../assests/image5.jpg'
import image6 from '../assests/image6.jpg'
import image7 from '../assests/image7.jpg'
import image8 from '../assests/image8.jpg'
import image9 from '../assests/image9.jpg'
import image10 from '../assests/image10.jpg'
import image11 from '../assests/image11.jpg'
import image12 from '../assests/image12.jpg'
import image13 from '../assests/image13.jpg'
import image14 from '../assests/image14.jpg'
import image15 from '../assests/image15.jpg'
import image16 from '../assests/image16.jpg'
import image17 from '../assests/image17.jpg'
import image18 from '../assests/image18.jpg'
import image19 from '../assests/image19.jpg'
import image20 from '../assests/image20.jpg'


const Slider = () => {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
      image1, // Provide your image URLs here
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8,
      image9,
      image10,
      image11,
      image12,
      image13,
      image14,
      image15,
      image16,
      image17,
      image18,
      image19,
      image20
    ];
  
    const nextImage = () => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    };
  
    const previousImage = () => {
      setCurrentImageIndex(
        currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
      );
    };

    useEffect(() => {
        const sliderInterval = setInterval(() => {
          nextImage();
        }, 3000); // Change the duration (in milliseconds) between slides
    
        return () => {
          clearInterval(sliderInterval);
        };
      }, [currentImageIndex]);
    

  return (
    <div>
       <div className="slider-container">
      {/* <button onClick={previousImage} className="slider-button">
        Previous
      </button> */}
      <div className="slider">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      {/* <button onClick={nextImage} className="slider-button">
        Next
      </button> */}
    </div>
    </div>
  )
}

export default Slider
