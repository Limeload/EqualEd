import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addEnrollment } from '../features/sessionsSlice'

const Course = () => {
  let { courseId } = useParams()
  const courses = useSelector(state => state.courses.entities)
  const course = courses.find(c => c.id === parseInt(courseId))

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(addEnrollment(course.id))
  }

  if (!course) return <h1>Loading...</h1>

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.content}</p>
      <button onClick={() => handleClick()}>Enroll</button>
    </div>
  )
}

export default Course