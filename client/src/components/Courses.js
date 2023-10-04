import React, { useState } from 'react'
import CourseCard from './CourseCard'
import { useSelector } from 'react-redux'
import { Filter } from './Filter'

const Courses = () => {
  const courses = useSelector(state => state.courses.entities)
  const [filterValue, setFilterValue] = useState('')

  const courseFilter = courses.filter(course => course.title.toLowerCase().includes(filterValue.toLowerCase()))

  const displayCourses = courseFilter.map(c => <CourseCard key={c.id} course={c} />)

  if (!courses[0]) {
    return (
      <h2>There are no courses yet!</h2>
    )
  }
  return (
    <div>
      <Filter setFilterValue={setFilterValue} />
      <div className="course-grid">
        {displayCourses}
      </div>
    </div>
  )
}

export default Courses