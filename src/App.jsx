import React from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './routes/home'
import Project from './routes/project'
import About from './routes/about'
import Contact from './routes/contact'
import Wedding from './routes/Weddingim'
import Outdoor from './routes/outdoor'






const App = () => {
  return (
    <div>
    <>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/project" element={<Project/>}/>      
      <Route  path="/about" element={<About/>}/>
      <Route  path="/contact" element={<Contact/>}/>
      <Route  path="/wedding" element={<Wedding/>}/>
      <Route  path="/outdoor" element={<Outdoor/>}/>
    </Routes>
    </>
      
    </div>
  )
}

export default App

