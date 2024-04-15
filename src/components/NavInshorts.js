import React from 'react'
import HamburgerDrawer from './HamburgerDrawer'
import { LOGO } from '../constant'
import "./NavInshorts.css";

const NavInshorts = ({setCategory}) => {
  return (
    <header>
      <div className='menu'>
        <HamburgerDrawer setCategory={setCategory} />
      </div>
      
      <img src={LOGO} alt="Logo" style={{cursor: 'pointer'}} height="80%" />
    </header>
  )
}

export default NavInshorts
