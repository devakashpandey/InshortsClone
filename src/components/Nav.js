import React from 'react'
import "./Nav.css"
import {FaBars, FaTimes} from "react-icons/fa"
import HamburgerDrawer from "./HamburgerDrawer.js"


const Nav = () => {
  return (
     <>
      <div className='nav'>
        <div className='menu'>
                      <HamburgerDrawer />
        </div>
        <img src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png" 
        alt="" className='logo'></img>
      </div>
     </>
  )
}

export default Nav;
