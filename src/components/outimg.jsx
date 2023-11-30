import React from 'react'
import './wedding.css'
import image1 from '../assests/oudoor/image14.jpg'
import image2 from '../assests/oudoor/image23.jpg'
import image3 from '../assests/oudoor/image27.jpg'
import image4 from '../assests/oudoor/image28.jpg'
import image5 from '../assests/oudoor/image29.jpg'
import image6 from '../assests/oudoor/image36.jpg'
import image7 from '../assests/oudoor/image39.jpg'
const Outimg = () => {
  return (
    <div>
      <div className="image-category">
      <img
        src={image1}
        alt="Category - Small"
        className="category-image small"
      />
      <img
        src={image2}
        alt="Category - Medium"
        className="category-image medium"
      />
        </div>
    
          <div><img
        src={image3}
        alt="Category - Large"
        className="category-image large"
      /></div>
          
        <div className="image-category">
      <img
        src={image4}
        alt="Category - Medium"
        className="category-image medium"
      />
      <img
        src={image5}
        alt="Category - Medium"
        className="category-image medium"
      />
        
      
    </div>
    <div><img
        src={image6}
        alt="Category - Large"
        className="category-image large"
      /></div>
    </div>
  )
}

export default Outimg
