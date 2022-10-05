import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/lookbynsm.png'
import HeaderSocial from './HeaderSocial'
import {BsFillCaretRightFill} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div id='header' className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Germán Rico</h1>
        <h5 className='text-light'>Fullstack Developer jr</h5>
        <CTA/>
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="profile avatar" />
        </div>

        <a href="#contact" className='scroll__down'>Take me down! <BsFillCaretRightFill/></a>

      </div>
    </header>
  )
}

export default Header