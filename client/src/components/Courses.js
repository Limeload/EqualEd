import React from 'react'
import CourseCard from './CourseCard'
import { useSelector } from 'react-redux'

const Courses = () => {
  const courses = useSelector(state => state.courses.entities)
  const displayCourses = courses.map(c => <CourseCard key={c.id} course={c} />)
  return (
    <div>
      {displayCourses}
    </div>
  )
}

export default Courses