import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// TODO: import addCourse action to dispatch in handleSubmit

const NewCourse = () => {

  const [formData, setFormData] = useState({
    title: "",
    content: ""
    // TODO: incorporate instructor id
  })

  const navigate = useNavigate()
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
    // dispatch(addCourse(formData))
    navigate("/me")
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

export default NewCourse