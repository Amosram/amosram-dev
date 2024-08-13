import React from 'react'
import './Footer.css'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <div className='footer'>
     <footer>
      <hr/>
      <p>&copy; {year} Amos Rama. All Rights Reserved</p>
    </footer>      
    </div>
  )
}

export default Footer