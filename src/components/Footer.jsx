import {  FaHome, FaInstagram, FaYoutube, FaMailBulk, FaPhone } from 'react-icons/fa'
import './Footerstyle.css'
import React from 'react'



const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:'#fff',marginRight:"2rem"}}/>
                <div>
                    <p>Visakhapatnam</p>
                    <p>Andhra Pradesh</p>
                    <p>INDIA.</p>
                </div>
            </div>

            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:'#fff',marginRight:"2rem"}}/> 91+9121838276
                </h4>
            </div>

          <div className="email">
            <h4>
                <FaMailBulk size={20} style={{color:'#fff',marginRight:"2rem",marginTop:"0.8rem"}}/>
                nagendrakalla2001@gmail.com
            </h4>
          </div>
            </div>
            <div className="right">
                <h4>About Me</h4><br></br>
             <h4><p>In the world of photography, Nagendra is a true luminary, a visual storyteller whose work goes beyond capturing images; it encapsulates the spirit and essence of every subject. With an exceptional blend of creativity, technical expertise, and unwavering dedication, they turn every click of the shutter into a timeless work of art.</p>
            </h4><br></br>
            <div className="social">

              <a href='https://youtube.com/@nkphotography8405?si=Ojl3dC-mFH9REvcl'>
              <FaYoutube size={30} style={{color:'#fff',marginRight:"1rem"}} />
              </a>
              
               
                <a href="https://www.instagram.com/nk__events_and_photography/">

                <FaInstagram size={30} style={{color:'#fff',marginRight:"1rem"}} />
                </a>
           
               
            </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Footer
