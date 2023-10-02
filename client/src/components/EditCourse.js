import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editCourse, resetEdit } from '../features/sessionsSlice'
import { courseUpdated } from '../features/coursesSlice'
// TODO: just copy over the ReviewEdit component from Word of Mouth, functionality is the same
// basically this form will be conditionally rendered by a local state toggle within a course's card
// TODO: import editCourse action to dispatch in handleSubmit

const EditCourse = ({ course, setEdit }) => {

  const { id, title, content } = course
  const [form, setForm] = useState({
    title: title,
    content: content
  })

  const dispatch = useDispatch()

  const success = useSelector(state => state.sessions.edit)

  useEffect(() => {
    if (success) {
      dispatch(courseUpdated({
        ...course,
        title: form.title,
        content: form.content
      }))
      dispatch(resetEdit())
      setEdit(false)
    }
  }, [success])

  const handleChange = (e) => {
    const value = e.target.value
    setForm({
      ...form,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(editCourse({ id, form }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Course Title</p>
          <input
            name="title"
            onChange={handleChange}
            placeholder='Title of your course'
            value={form.title}
          />
        </label>
        <br />
        <label>
          <p>Course Content</p>
          <textarea
            name="content"
            onChange={handleChange}
            placeholder='Paste the content of your course here!'
            value={form.content}
          />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default EditCourse