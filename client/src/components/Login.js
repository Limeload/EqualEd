import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { logInPost } from '../features/sessionsSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logInPost({ username, password }))
    navigate("/")
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h3>Login</h3>
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