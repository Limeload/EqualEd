import React from 'react'
import CourseCard from './CourseCard'
import { useSelector } from 'react-redux'

const Courses = () => {
  const courses = useSelector(state => state.courses.entities)
  const displayCourses = courses.map(c => <CourseCard key={c.id} course={c} />)
  if (!courses[0]) {
    return (
      <h2>There are no courses yet!</h2>
    )
  }
  return (
    <div>
      <h2>Here is a list of all available EqualEd courses. Click on one for more info!</h2>
      <div className="course-grid">
        {displayCourses}
      </div>
    </div>
  )
}

export default Courses