import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCourse } from '../features/coursesSlice'

const NewCourse = () => {

  const [form, setForm] = useState({
    title: "",
    content: ""
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleChange = (e) => {
    const value = e.target.value
    setForm({
      ...form,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCourse(form))
    navigate("/profile")
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

export default NewCourse