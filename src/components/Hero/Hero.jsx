import React from 'react'
import './Hero.css'
import { IoEarth } from "react-icons/io5";
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import AIimg from '../../assets/images/ai.png'



const Hero = () => {
  const variants = {
    hidden:{
      opacity: 0,
      y: 20
    },
    visible:{
      opacity: 1,
      y: 0,
      transition:{
        duration: 0.5,
        delay:0.8
      }
    },
    hidden2:{
      opacity: 0,
      y: 20
    },
    visible2:{
      opacity: 1,
      y: 0,
      transition:{
        duration: 0.4,
        delay:1.4
      }
    },
    hidden3:{
      opacity: 0,
      y: 20
    },
    visible3:{
      opacity: 1,
      y: 0,
      transition:{
        duration: 0.3,
        delay:2
      }
    },
    hidden4:{
      opacity: 0,
   
    },
    visible4:{
      opacity: 1,
      
      transition:{
        duration: 0.5,
        delay:2.6
      }
    },
    hidden5:{
      opacity: 0,
    },
    visible5:{
      opacity: 1,
      transition:{
        duration: 0.5,
        delay:3.2
      }
    }
  }

  return (
    <section className='hero flexBox' id='/'>
      <div className='hero-left'>
        <div className='my-name'>
          <div className='title-top'>
            <motion.h1 className='hello'
              variants={variants}
              initial='hidden'
              animate='visible'
            >HELLO</motion.h1>
            <IoEarth className='earth'/>
          </div>
       
          <div className='title-middle'>
            <motion.h1 className='h2'
              variants={variants}
              initial='hidden'
              animate='visible'
            >I AM  <span> AMOS RAMA</span>
            </motion.h1>
          </div>
        </div>
        <motion.h3 
           variants={variants}
           initial='hidden2'
           animate='visible2'
        >And I am a <span>Full Stack Developer</span></motion.h3>
        <motion.p
           variants={variants}
           initial='hidden3'
           animate='visible3'
        >I craft innovative and responsive websites and turn ideas into interactive digital experiences</motion.p>

        <div className='btns'
        >
          <motion.button className='btn-to-about button' type='button'
                variants={variants}
                initial='hidden4'
                animate='visible4'
          >
            <Link to='about'>Read More</Link>
          </motion.button>
          <motion.button className='btn-to-about button' type='button'
                variants={variants}
                initial='hidden5'
                animate='visible5'
          >
            <Link to='projects'>See Work</Link>
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default Hero