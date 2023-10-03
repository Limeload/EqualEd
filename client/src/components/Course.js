import React, { useState } from 'react'
import EditCourse from './EditCourse'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { addEnrollment, removeEnrollment, deleteCourse } from '../features/sessionsSlice'
import { courseDeleted } from '../features/coursesSlice'

const Course = () => {
  let { courseId } = useParams()
  const navigate = useNavigate()

  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const userCourses = useSelector(state => state.sessions.currentUser.courses)
  const courses = useSelector(state => state.courses.entities)
  const course = courses.find(c => c.id === parseInt(courseId))
  const [edit, setEdit] = useState(false)

  const dispatch = useDispatch()
  const handleEnroll = () => {
    dispatch(addEnrollment(course.id))
  }
  const handleUnenroll = () => {
    dispatch(removeEnrollment(course.id))
  }
  const handleDelete = () => {
    dispatch(deleteCourse(course.id))
    dispatch(courseDeleted(course.id))
    navigate("/profile")
  }

  const renderLogic = (courseId) => {
    if (!loggedIn) return <h3>Log in or sign up to enroll!</h3>
    else if (userCourses.enrolled.find(c => c.id === courseId)) return <button onClick={() => handleUnenroll()}>Unenroll</button>
    else if (userCourses.created.find(c => c.id === courseId)) {
      return (
        <>
          <button onClick={() => setEdit(!edit)}>{edit ? "Cancel" : "Edit Course"}</button>
          <button onClick={handleDelete}>Delete</button>
        </>
      )
    }
    else return <button onClick={() => handleEnroll()}>Enroll</button>
  }

  if (!course) return <h1>Loading...</h1>

  return (

    <div className="course">
      {edit ?
        <EditCourse course={course} setEdit={setEdit} /> :
        <>
          <h2>{course.title}</h2>
          <p className="course-content">{course.content}</p>
        </>
      }
      {renderLogic(course.id)}
    </div>
  )
}

export default Course