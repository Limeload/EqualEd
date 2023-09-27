import React from 'react'
import { useMatch } from 'react-router-dom'

const Login = () => {
  /* this allows us to render a different version of the form depending on the value of match.pathname
  (either '/login/student' or '/login/instructor') */
  const match = useMatch('/login/*')
  console.log(match)
  const test = match.pathname === "/login/student" ? "Student" : match.pathname === "/login/instructor" ? "Instructor" : null

  return (
    <div>{test + " Login"}</div>
  )
}

export default Login