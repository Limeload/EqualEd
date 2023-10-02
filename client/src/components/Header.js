import React from 'react'
import NavBar from './NavBar'
import EqualEd from '../assets/EqualEd.png'

const Header = () => {
  return (
    <div id="header">
      <img src={EqualEd} alt="Equal Ed" className="header-img" />
      <NavBar />
    </div>
  )
}

export default Header