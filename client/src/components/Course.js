import React, { useState, useEffect, useContext } from 'react'
import EditCourse from './EditCourse'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { addEnrollment, removeEnrollment, deleteCourse, setLoading, setIdle } from '../features/sessionsSlice'
import { courseDeleted } from '../features/coursesSlice'
import { OpenAiContext } from '../context/OpenAiContext'
import LoadingSpinner from './LoadingSpinner'

const Course = () => {

  let { courseId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { requestSummary, requestTranslation } = useContext(OpenAiContext)

  const loggedIn = useSelector(state => state.sessions.loggedIn)
  const userCourses = useSelector(state => state.sessions.currentUser.courses)
  const courses = useSelector(state => state.courses.entities)
  const course = courses.find(c => c.id === parseInt(courseId))
  const [edit, setEdit] = useState(false)
  const [translate, setTranslate] = useState(false)
  const [query, setQuery] = useState({
    text: "",
    lang: ""
  })

  useEffect(() => {
    if (course) {
      setQuery({
        ...query,
        text: course.content
      })
    }
  }, [course])

  if (!course) return <LoadingSpinner />


  const handleEnroll = () => dispatch(addEnrollment(course.id))

  const handleUnenroll = () => dispatch(removeEnrollment(course.id))

  const handleDelete = () => {
    dispatch(deleteCourse(course.id))
    dispatch(courseDeleted(course.id))
    navigate("/profile")
  }

  const handleChange = (e) => {
    const value = e.target.value
    setQuery({
      ...query,
      [e.target.name]: value
    })
  }

  const handleSummarize = async () => {
    dispatch(setLoading())
    let response = await requestSummary(query.text)
    setQuery({
      ...query,
      text: response
    })
    dispatch(setIdle())
  }

  const handleTranslate = async () => {
    dispatch(setLoading())
    let response = await requestTranslation(query)
    setQuery({
      ...query,
      text: response
    })
    setTranslate(!translate)
    dispatch(setIdle())
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

  return (

    <div className="course">
      {edit ?
        <EditCourse course={course} setEdit={setEdit} /> :
        <>
          <h2>{course.title}</h2>
          <p className="course-content">{query.text}</p>
          <button onClick={handleSummarize}>Summary</button>
          <button onClick={() => setTranslate(!translate)}>{translate ? "Cancel" : "Translate"}</button>
        </>
      }
      {renderLogic(course.id)}
      <br />
      {
        translate ?
          <>
            <input
              placeholder="Type language here"
              name="lang"
              value={query.lang}
              onChange={handleChange}
            />
            <br />
            <button onClick={handleTranslate}>Go!</button>
          </> :
          null
      }
    </div>
  )
}

export default Course