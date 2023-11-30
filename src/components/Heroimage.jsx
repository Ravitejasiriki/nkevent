import './Heroimage.css'
import React from 'react'
import Introimg from "../assests/light.webp"
import { Link } from 'react-router-dom'

const Heroimage = () => {
  return (
    <div>
      <div className="hero">
        <div className="mask">
          <img className='into-img' src={Introimg} alt='intro'></img>
        </div>
        <div className="content">
            <h1>Capture Memories That Last Forever</h1>
            <p>Professional photography services in Andhra. Freeze moments, cherish memories.</p>
            <div>
                <Link to="/contact" className='btn-light'>Book Now</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Heroimage
