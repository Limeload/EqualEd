import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logInPost } from '../features/sessionsSlice'
import { useNavigate, useMatch } from 'react-router-dom'

const Login = () => {
  /* this allows us to render a different version of the form depending on the value of match.pathname
  (either '/login/student' or '/login/instructor') */
  const match = useMatch('/login/*')
  console.log(match)
  const test = match.pathname === "/login/student" ? "Student" : match.pathname === "/login/instructor" ? "Instructor" : null

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logInPost({ username, password }))
    // TODO: POST will include {instructor: true} if sent from instructor login
    navigate("/")
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h3>{test + " Login"}</h3>
        <label>
          <p>Username/Email</p>
          <input
            placeholder="Username/email"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          <p>Password</p>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Login