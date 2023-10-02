import React from 'react'
import EditCourse from './EditCourse'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addEnrollment, removeEnrollment } from '../features/sessionsSlice'

const Course = () => {
  let { courseId } = useParams()
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const userCourses = useSelector(state => state.sessions.currentUser.courses)
  const courses = useSelector(state => state.courses.entities)
  const course = courses.find(c => c.id === parseInt(courseId))


  const dispatch = useDispatch()
  const handleEnroll = () => {
    dispatch(addEnrollment(course.id))
  }
  const handleUnenroll = () => {
    dispatch(removeEnrollment(course.id))
  }

  const renderLogic = (courseId) => {
    if (!loggedIn) return <h3>Log in or sign up to enroll!</h3>
    else if (userCourses.enrolled.find(c => c.id === courseId)) return <button onClick={() => handleUnenroll()}>Unenroll</button>
    else if (userCourses.created.find(c => c.id === courseId)) return <EditCourse course={course} />
    else return <button onClick={() => handleEnroll()}>Enroll</button>
  }

  if (!course) return <h1>Loading...</h1>

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.content}</p>
      {renderLogic(course.id)}
    </div>
  )
}

export default Course