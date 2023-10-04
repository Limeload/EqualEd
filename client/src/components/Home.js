import React from 'react'
import instructor from '../assets/instructor.png'
import student from '../assets/student.png'

const Home = () => {
  return (
    <div>
      <img className="home-img" src={student} alt="Student at a computer" />
      <img className="home-img" src={instructor} alt="Instructor biting a pencil" />
    </div>
  )
}

export default Home