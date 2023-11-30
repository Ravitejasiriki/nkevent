import { Link } from 'react-router-dom'
import './About.css'
import React from 'react'
import react1 from '../assests/pixel pic.jpg'


const Aboutcontent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Introducing NK Photography, the premier photography service located in Visakhapatnam.With a passion for capturing moments that last a lifetime, we offer top-notch photography services for all occasions. Whether it's a wedding, corporate event, or a personal photoshoot, our skilled photographers will ensure that every frame tells a story. With an eye for detail and a commitment to excellence, NK Photography is dedicated to delivering stunning images that exceed your expectations. Trust us to capture your special moments with creativity and professionalism.</p>
            <Link to='/contact' className='btn'>Contact</Link>
            
        </div>
       
       
    </div>
  )
}

export default Aboutcontent
