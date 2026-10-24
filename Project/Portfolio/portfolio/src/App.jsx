import React from 'react'
import './App.css'

import Header from './Component/Header.jsx'
import Footer from './Component/Footer.jsx'
import Slider from './Component/Slider.jsx'
import Work from './Component/Work.jsx'
import Contact from './Component/Contact.jsx'
import About from './Component/About.jsx'


function App() {

  return (
    <div className="app">
      <Header />
      <Work />  
      <About />
      <Slider />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
