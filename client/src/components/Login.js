import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logInPost } from '../features/sessionsSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const dispatch = useDispatch()
  const loggedIn = useSelector(state => state.sessions.loggedIn)

  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    if (loggedIn) {
      navigate("/profile")
    }
  }, [loggedIn])

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(logInPost({ username, password }))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <h3>Login</h3>
        <label>
          <p>Username</p>
          <input
            placeholder="Username"
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