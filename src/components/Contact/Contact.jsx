import React from 'react'
import './Contact.css'
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import { FaPaperPlane } from "react-icons/fa";
import { motion } from 'framer-motion';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => { 
    e.preventDefault();

    emailjs
      .sendForm('service_tx86csq', 'template_1zfqq5o', form.current, {
        publicKey: 'PveSRlnKfuXh16JSl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id='contact' className='contact'>
       <div className='services-top'>
        <motion.h1 className='main-heading'
             initial={{opacity:0, x:-50}}
             whileInView={{opacity:1, x:0}}
             transition={{
               duration: 0.8,
               delay: 0.3
             }}
        >Contact <span className='me'>ME</span></motion.h1>
        <motion.p
             initial={{opacity:0, x:50}}
             whileInView={{opacity:1, x:0}}
             transition={{
               duration: 0.8,
               delay: 0.3
             }}
        >Let's Connect!</motion.p>
      </div>

      <div className='contact-container'>
        <motion.div className='contact-left'
             initial={{opacity:0, y:35}}
             whileInView={{opacity:1, y:0}}
             transition={{
               duration: 0.8,
               delay: 0.3
             }}
        >
          <div className='first-sub-contact-left'>
            <p className='first-p'>Wanna talk? </p>
            <p className='sec-p'>Please, feel free to reach me out, I am always available for opportunities and for project contribution.</p>
            <p className='third-p'>You can use any of the contact methods here to reach me.Welcome all[KARIBU!]</p>
          </div>
          <div className='second-sub-contact-left'>
            <div className='contact-social-items'>
              <IoMdMail className='c-icon'/>
              <p>amosramdev@gmail.com</p>
            </div>
            <div className='contact-social-items'>
              <FaPhoneAlt className='c-icon'/>
              <p>+254 752943240</p>
            </div>
            <div className='contact-social-items'>
              <FaLocationDot className='c-icon'/>
              <p>Nairobi, Kenya</p>
            </div>
            <div className='contact-social-items'>
              <div className='quick-links'>
                  <ul className='contact-icons-list'>
                    <li>
                      <a href="https://www.linkedin.com/in/amosram-developer1/"><FaLinkedin className='s-icon'/></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/a.m.o.s.r.a.m"><FaInstagram className='s-icon'/></a>
                    </li>
                    <li>
                      <a href="https://github.com/Amosram"><FaGithub className='s-icon'/></a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div className='contact-right'
          initial={{opacity:0, y:35}}
          whileInView={{opacity:1, y:0}}
          transition={{
            duration: 0.8,
            delay: 0.3
          }}
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className='input-box'>
              <label>Full Name</label>
              <input type="text" name="user_name" placeholder='Your name' required/>
            </div>
           
            <div className='input-box'>
              <label>Email</label>
              <input type="email" name="user_email"  placeholder='Your email' required/>
            </div>

            <div className='input-box'>
              <label>Message</label>
              <textarea name="message" placeholder='Your message...' cols={30} rows={5} required/>
            </div>
            <button className='button' type="submit">Submit <FaPaperPlane className='icon-plane'/></button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact