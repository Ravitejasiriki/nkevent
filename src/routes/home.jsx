import React from 'react'
import Navbar from '../components/Navbar'
import Heroimage from '../components/Heroimage'
import Footer from '../components/Footer'
import Work from '../components/Work'
import Slider from '../components/slider'


const Home = () => {
  return (
    <div>
     <Navbar/>
     <Heroimage/>
     <Slider/>
     <Work/>
     <Footer/>
    </div>
  )
}

export default Home
