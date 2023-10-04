import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  return (
    <div id="footer">
      <hr />
      <nav className="bottom-nav">
        <Link to="/about">
          About
        </Link>
        <Link to="/features">
          Features
        </Link>
        <Link to="/accessibility">
          Accessibility
        </Link>
        <Link to="/careers">
          Careers
        </Link>
        <Link to="/resources">
          Resources
        </Link>
        <Link to="/support">
          Support
        </Link>
      </nav>
      <div className="bottom">
        <p>© 2023 EqualEd. All rights reserved.</p>
        <nav className="mini-nav">
          <Link to="/terms">
            Terms
          </Link>
          <Link to="/privacy">
            Privacy
          </Link>
          <Link to="/cookies">
            Cookies
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Footer