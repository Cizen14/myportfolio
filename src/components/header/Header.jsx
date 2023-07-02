import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/IMG_8483.PNG'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="comtainer header_container">
        <h5> Hello It's Me</h5>
        <h1> Cizen Maharjan</h1>
        <h5 className="text-light"> Front End Developer</h5>
        <CTA />
        <HeaderSocials/>
        

        <div className="ME">
          <img src={ME} alt='ME' />
        </div>

        <a href='#contact' className='scroll_down'> Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
