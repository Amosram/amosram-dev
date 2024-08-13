import React from 'react'
import './Projects.css'
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import { BiSolidQuoteSingleRight } from "react-icons/bi";
import { projectData } from '../../data.js/data';
import { FiExternalLink } from "react-icons/fi";
import { FaExpand } from "react-icons/fa";
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { IoClose } from "react-icons/io5";




const Projects = () => {
  return (
    <section id='projects' className='projects'>
      <div className='projects-top'>
        <motion.h1 className='main-heading'
             initial={{opacity:0, x:-50}}
             whileInView={{opacity:1, x:0}}
             transition={{
               duration: 0.8,
               delay: 0.3
             }}
        >Projects</motion.h1>
        <motion.p
             initial={{opacity:0, x:50}}
             whileInView={{opacity:1, x:0}}
             transition={{
               duration: 0.8,
               delay: 0.3
             }}
        >What i have done</motion.p>
      </div>

      <motion.p className='quote'
           initial={{opacity:0}}
           whileInView={{opacity:1}}
           transition={{
             duration: 0.8,
             delay: 0.3
           }}
      >
        <BiSolidQuoteSingleLeft className='quote-icon'/>
        Design is not just what it looks like and feels like. Design is how it works.
        <BiSolidQuoteSingleRight className='quote-icon'/>
        <span>--- Steve Jobs</span></motion.p>

      <div className='projects-container flexBox'>
        <motion.div className='projects-content'
             initial={{opacity:0, y:35}}
             whileInView={{opacity:1, y:0}}
             transition={{
               duration: 0.8,
               delay: 0.3
             }}
        >
          {projectData.map((projectDatas) => (
            <div key={projectDatas.id} className='projects-items'>
              <img src={projectDatas.img} alt="Project Images"/>

              <div className='project-sub-content'>
                <p>{projectDatas.description}</p>
                <div className='project-btns'>
                  <button type='button'>
                    <a href={projectDatas.link} target='_blank'>Demo  <FiExternalLink/></a>
                  </button>
                  <button type='button'>
                    <Link  to="">
                       Details
                      <FaExpand className='expand-icon' />
                    </Link >
                    {/* <div className='details'>
                      <IoClose className='details-close'/>
                      <div className='sub-details'>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JacaScript</p>
                      </div>
                    </div> */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects