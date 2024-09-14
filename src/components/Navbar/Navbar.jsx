import React, { useState } from 'react'
import './Navbar.css'
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll';
import { CgMenuRightAlt } from "react-icons/cg";
import { MdOutlineClose } from "react-icons/md";





const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const handleClick = (e) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  }

  return (
    <div className='navbar-container'>
      <header className='header flexBox'>
        <div className='logo-container'>
          <a href="">
            <h1 className='logo'>.AMOSRAM.</h1>
          </a>
        </div>
        <div className={`bars `}>
          
          <CgMenuRightAlt className='menu-icon 'onClick={handleClick}/>
          <MdOutlineClose className='menu-close-icon'  onClick={handleClick}/>
        </div>
      
        <nav className={`navbar ${menuOpen && 'active'}`}>
          <ul className='flexBox list'>
            <li>
              <Link onClick={handleClick} to="/">home</Link>
            </li>
            <li>
              <Link onClick={handleClick} to="about">about</Link>
            </li>
            <li>
              <Link onClick={handleClick} to="services">services</Link>
            </li>
            <li>
              <Link onClick={handleClick} to="projects">projects</Link>
            </li>
            {/* <li>
              <Link to="blog">blog</Link>
            </li> */}
            <li>
              <Link onClick={handleClick} to="contact">contact</Link>
            </li>
          </ul>
        </nav>

        <ul className='icons-list'>
          <li>
            <a href="https://www.facebook.com/profile.php?id=61559019293315" target='_blank'><FaFacebook className='s-icon'/></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/amosram-developer1/" target='_blank'><FaLinkedin className='s-icon'/></a>
          </li>
          <li>
            <a href="https://www.instagram.com/a.m.o.s.r.a.m" target='_blank'><FaInstagram className='s-icon'/></a>
          </li>
          <li>
            <a href="https://github.com/Amosram" target='_blank'><FaGithub className='s-icon'/></a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar