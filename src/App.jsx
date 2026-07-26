import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Home from './components/Home'
import Hero from './components/Hero'
import './App.css';
import { useState } from 'react'
import Skill from './components/Skill'
import Project from './components/Project'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  
  
  const [dark, setDark] = useState(true)
  return (
    <div className= {`relative
      ${dark ? "bg-[#EEF4F1] text-black min-h-screen  w-full" : "bg-[#111827] text-white min-h-screen  w-full "}
      `} 
    >
    <Navbar  dark={dark} setDark={setDark}/>
    <Home    dark={dark} setDark={setDark}/>
    <About    dark={dark} setDark={setDark}/>
    <Skill    dark={dark} setDark={setDark}/>
    <Education   dark={dark} setDark={setDark}/>
     <Contact   dark={dark} setDark={setDark}/>
     <Footer   dark={dark} setDark={setDark}/>

   
    </div>
  )
}

export default App