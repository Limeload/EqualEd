import React from 'react'
import EqualEd from '../assets/EqualEd.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {

  return (
    <div id="footer">
      <nav id="navbar">
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/features">
          Features
        </NavLink>
        <NavLink to="/accessibility">
          Accessibility
        </NavLink>
        <NavLink to="/careers">
          Careers
        </NavLink>
        <NavLink to="/resources">
          Resources
        </NavLink>
        <NavLink to="/support">
          Support
        </NavLink>
      </nav>
    </div>
  )
}

export default Footer