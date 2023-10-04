import React from 'react'
import instructor from '../assets/instructor.png'
import student from '../assets/student.png'
import anatomy from '../assets/anatomy.png'
import architecture from '../assets/architecture.png'
import business from '../assets/business.png'
import calculus from '../assets/calculus.png'
import chemistry from '../assets/chemistry.png'
import cybersec from '../assets/cybersec.png'
import marketing from '../assets/marketing.png'
import sketching from '../assets/sketching.png'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ImageCarousel from './ImageCarousel'

const Home = () => {

  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const images = [anatomy, architecture, business, calculus, chemistry, cybersec, marketing, sketching]

  return (
    <div id="home">
      <p>
        Welcome to EqualEd, an educational platform dedicated to promoting accessibility for students with disabilities. This project aims to provide a seamless learning experience for all users by ensuring that educational resources and features are inclusive and adhere to accessibility standards. <br />
        <span className="color-text">What will you learn today?</span>
      </p>
      {
        loggedIn ?
          <ImageCarousel images={images} /> :
          <div className="image-wrapper">
            <div className="image-link">
              <Link to="/signup/student">
                <img className="home-img" src={student} alt="Student at a computer" />
                <h2>Student Signup</h2>
              </Link>
            </div>
            <div className="image-link">
              <Link to="/signup/instructor">
                <img className="home-img" src={instructor} alt="Instructor biting a pencil" style={{ transform: "scaleX(-1)" }} />
                <h2>Instructor Signup</h2>
              </Link>
            </div>
          </div>
      }
    </div>
  )
}

export default Home