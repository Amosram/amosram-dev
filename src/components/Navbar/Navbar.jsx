import React, { useState } from 'react'
import './Navbar.css'
import { FaEnvelope } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll';
import { CgMenuRightAlt } from "react-icons/cg";




const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className='navbar-container'>
      <header className='header flexBox'>
        <div className='logo-container'>
          <h1 className='logo'>.AMOSRAM.
        </h1>
        </div>
        <CgMenuRightAlt className='menu-icon' onClick={handleClick}/>
        <nav className={`navbar ${menuOpen && 'active'}`}>
          <ul className='flexBox list'>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="about">about</Link>
            </li>
            <li>
              <Link to="services">services</Link>
            </li>
            <li>
              <Link to="projects">projects</Link>
            </li>
            {/* <li>
              <Link to="blog">blog</Link>
            </li> */}
            <li>
              <Link to="contact">contact</Link>
            </li>
          </ul>
        </nav>

        <ul className='icons-list'>
          <li>
            <a href="#"><FaFacebook className='s-icon'/></a>
          </li>
          <li>
            <a href="#"><FaLinkedin className='s-icon'/></a>
          </li>
          <li>
            <a href="#"><FaInstagram className='s-icon'/></a>
          </li>
          <li>
            <a href="#"><FaGithub className='s-icon'/></a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar