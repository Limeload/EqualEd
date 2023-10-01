import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Course = () => {
  let { courseId } = useParams()
  const courses = useSelector(state => state.courses.entities)
  const course = courses.find(c => c.id === parseInt(courseId))
  if (!course) return <h1>Loading...</h1>
  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.content}</p>
      { /* enroll button that dispatches enrollCourse action */}
    </div>
  )
}

export default Course