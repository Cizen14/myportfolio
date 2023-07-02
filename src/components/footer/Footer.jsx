import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
const Footer = () => {
  return (
    <footer>
        <a href='# ' className='footer_logo'>Cizen Maharjan</a>

        <ul className='permalinks'>
            <li> <a href='#'>Home </a></li>
            <li> <a href='#about'>About</a></li>
            <li> <a href='#experience'>Experience</a></li>
            <li> <a href='#contact'>Contact</a></li>
            <li> <a href='#services'>Services</a></li>
        </ul>

        <div className='footer_socials'>
            <a href='https://facebook.com'> <FaFacebook/></a>
            <a href='https://instagram.com'><FiInstagram/></a>
        </div>
        <div className='footer_copyright'>
            <small> &copy; Cizen Maharjan. All rights reserved.</small>
        </div>

    </footer>
  )
}

export default Footer
