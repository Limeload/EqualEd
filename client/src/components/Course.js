import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Course = () => {
  let { courseId } = useParams()
  const course = useSelector(state => state.courses.entities.find(c => c.id === courseId))
  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.content}</p>
      {/* enroll button that dispatches enrollCourse action */}
    </div>
  )
}

export default Course