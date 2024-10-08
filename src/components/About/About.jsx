import React from 'react'
import './About.css'
import amosImg from '../../assets/images/aboutImg.png'
import django from '../../assets/images/django-logo-icon.svg'
import { Link } from 'react-scroll'
import { skillData } from '../../data.js/data'
import { motion } from 'framer-motion'


const About = () => {
  return (
    <section className='about'>
      <motion.h1 className='main-heading'
           initial={{opacity:0, x:-50}}
           whileInView={{opacity:1, x:0}}
           viewport={{once:true}}
           transition={{
             duration: 0.8,
             delay: 0.3
           }}
      >About <span className='me'>ME</span></motion.h1>
      <div className='about-content flexBox3'>
        <div className='about-left'>
          <motion.div className='intro-area flexBox2'
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                viewport={{once:true}}
                transition={{duration:1, delay: 0.5}}
          >
            <img src={amosImg} alt="Amos Image" className='about-img'/>
            <h2>Amos Rama</h2>
          </motion.div>
        
          <motion.p
                initial={{opacity:0.5, y:35}}
                whileInView={{opacity:1, y:0}}
                viewport={{once:true}}
                transition={{duration:0.8, delay: 0.3}}
          >
            Welcome to my portfolio! I’m Amos Rama, a passionate web developer with a keen eye for design and a knack for creating responsive and user-friendly websites. With a background in web development, I have honed my skills in both front-end and back-end development, ensuring that every project I undertake is both functional and visually appealing. My journey into web development began when i became a programming enthusiast after having developed a keen interest in technology at an early age. Over the past three years, I’ve worked on various projects ranging from simple landing pages to complex web applications. Each project has taught me something new, allowing me to continuously grow and improve my skills.
          </motion.p>

          <motion.button className='button' type='button'
              initial={{opacity:0, y:30}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.8, delay: 0.3}}
          >
            <Link to="contact" className='about-btn '>Reach Me Now</Link>
          </motion.button>
        </div>
        <div className='about-right'>
          <motion.h2
               initial={{opacity:0, x:50}}
               whileInView={{opacity:1, x:0}}
               viewport={{once:true}}
               transition={{
                 duration: 0.8,
                 delay: 0.3
               }}
          >Technologies Used</motion.h2>
          <div className='skill-container'>
              {skillData.map((skillDATA) => (
                <motion.div 
                  initial={{ y:35}}
                  whileHover={{scale: 1.1}}
                  viewport={{once:true}}
                  className='skill-icons' 
                  whileInView={{y:0}}
                  transition={{duration:0.8, delay: 0.3}}
                  key={skillDATA.id} >
                  <img src={skillDATA.img} alt="skill Image" />
                  <p>{skillDATA.title}</p>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About