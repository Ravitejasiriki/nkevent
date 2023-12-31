import './navstyle.css'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react'

import React from 'react'

const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick= () => setClick(!click);

    const [color,setColor]=useState(false);
    const changeColor= ()=>{
      if(window.scrollY >=100){
        setColor(true);
      }else{
        setColor(false);
      }
    }
    window.addEventListener("scroll",changeColor);
  return (
    <div className={color?"Header Header-bg" : "Header"}>
      <Link to="/">  
      <h1>NK Photography </h1>
      </Link>

      <ul className={click ? "nav-menu active" :"nav-menu"}>
      <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/wedding">Wedding</Link>
        </li>

            <li>
      
             <Link to="/outdoor">Candid</Link>
            </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">contact</Link>
        </li>
       
      </ul>
      <div className="hamburger" onClick={handleClick}>
      {click ? ( <FaTimes size={20} style={{color:"#fff"}}/>) : ( <FaBars size={20} style={{color:"#fff"}}/>)}
       
       
      </div>
    </div>
  )
}

export default Navbar
