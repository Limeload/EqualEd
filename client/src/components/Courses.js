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
      <h2>Here is a list of all available EqualEd courses. Click on one for more info!</h2>
      <Filter setFilterValue={setFilterValue} />
      <div className="course-grid">
        {displayCourses}
      </div>
    </div>
  )
}

export default Courses