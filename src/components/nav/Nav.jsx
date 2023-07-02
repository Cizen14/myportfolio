import React from 'react'
import './nav.css'
import {HiHome} from 'react-icons/hi'
import {HiUserCircle} from 'react-icons/hi'
import {BiBook} from 'react-icons/bi'
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdContactPhone} from 'react-icons/md'
import{useState} from 'react'
const Nav = () => {
  const [activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href='#'onClick={() => setActiveNav('#')} className={activeNav==='#'? 'active': ''}>'<HiHome/></a>
      <a href='#about'onClick={() => setActiveNav('#about')} className={activeNav==='#about'? 'active': ''}>'<HiUserCircle/></a>
      <a href='#experience'onClick={() => setActiveNav('#experience')} className={activeNav==='#experience'? 'active': ''}>'<BiBook/></a>
      <a href='#services'onClick={() => setActiveNav('#services')} className={activeNav==='#serives'? 'active': ''}>'<MdMiscellaneousServices/></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')} className={activeNav==='#contact'? 'active': ''}>'<MdContactPhone/></a>

    </nav>
  )
}

export default Nav
