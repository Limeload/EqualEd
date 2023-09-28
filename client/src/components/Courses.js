import React from 'react'
import { useSelector } from 'react-redux'

const Courses = () => {
  const courses = useSelector(state => state.courses.entities)
  return (
    <div>Courses</div>
  )
}

export default Courses