import React from 'react'
import './Services.css'
import serviceImg from '../../assets/images/service-img.jpg'
import { serviceData } from '../../data.js/data'
import { motion } from 'framer-motion'

const Services = () => {
  return (
    <section className='services' id='services'>
      <div className='services-top'>
        <motion.h1 className='main-heading'
             initial={{opacity:0, x:-50}}
             whileInView={{opacity:1, x:0}}
             transition={{
               duration: 0.8,
               delay: 0.3
             }}
        >Services</motion.h1>
        <motion.p
            initial={{opacity:0, x:50}}
            whileInView={{opacity:1, x:0}}
            transition={{
              duration: 0.8,
              delay: 0.3
            }}
        >What i can do for you</motion.p>
      </div>
  
      <div className='service-content flexBox'>
        <div className='service-left'>
          <motion.p
              initial={{opacity:0, y:35}}
              whileInView={{opacity:1, y:0}}
              transition={{
                duration: 0.8,
                delay: 0.3
              }}
          >I deliver comprehensive development solutions, including frontend and backend development, cross-platform mobile app creation, and database modeling and development. </motion.p>
          <motion.img src={serviceImg} alt=""
              initial={{opacity:0, y:35}}
              whileInView={{opacity:1, y:0}}
              transition={{
                duration: 0.8,
                delay: 0.3
              }}
          />
        </div>
        <div className='service-right'>
          {serviceData.map((servicesData) => (
            <motion.div 
              whileHover={{y:-8}}
              className='service-items' 
              initial={{opacity:0, y:35}}
              whileInView={{opacity:1, y:0}}
              transition={{
                duration: 0.8,
                delay: 0.3
              }}
              key={servicesData.id}>
              <img src={servicesData.img} alt=""/>
              <h3>{servicesData.title}</h3>
              <p>{servicesData.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services