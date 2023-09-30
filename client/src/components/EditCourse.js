import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
// TODO: just copy over the ReviewEdit component from Word of Mouth, functionality is the same
// basically this form will be conditionally rendered by a local state toggle within a course's card
// TODO: import editCourse action to dispatch in handleSubmit

const EditCourse = () => {

  const [formData, setFormData] = useState({
    title: "",
    content: ""
  })

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = e.target.value
    setFormData({
      ...formData,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(editCourse(formData))
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
            value={formData.title}
          />
        </label>
        <br />
        <label>
          <p>Course Content</p>
          <textarea
            name="content"
            onChange={handleChange}
            placeholder='Paste the content of your course here!'
            value={formData.content}
          />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default EditCourse