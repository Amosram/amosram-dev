import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {  

  return (
    <div className='app'>
      
      <Navbar/>
      <Hero/>
      <About/>
      <Services />
      <Projects/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
