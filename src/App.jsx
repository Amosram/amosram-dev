import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AllProjects from './pages/Project/AllProjects'


function App() {  

  return (
    <div className='app'>
      
      <Navbar/>
      <Hero/>
      <About/>
      <Services />
      <BrowserRouter>
        <Projects/>
        <Routes>
          <Route path="all-projects"/>
        </Routes>
      </BrowserRouter>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
