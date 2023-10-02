import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signUpPost } from '../features/sessionsSlice'
import { useMatch } from 'react-router-dom'

const Signup = () => {

  const dispatch = useDispatch()
  const match = useMatch('/signup/*')
  const role = match.pathname === "/signup/student" ? "Student" : match.pathname === "/signup/instructor" ? "Instructor" : null
  const isInstructor = role === "Instructor" ? true : false

  const [signup, setSignup] = useState({
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
    instructor: isInstructor
  })

  const handleChange = (e) => {
    const value = e.target.value
    setSignup({
      ...signup,
      [e.target.name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signUpPost(signup))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h3>{`Sign up as a ${role}!`}</h3>
        <label>
          <p>Email Address</p>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={signup.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <p>Username</p>
          <input
            placeholder="Username"
            name="username"
            value={signup.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={signup.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          <p>Confirm Password</p>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password_confirmation"
            value={signup.password_confirmation}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Signup