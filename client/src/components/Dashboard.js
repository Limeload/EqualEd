import React, { useState } from 'react'
import Profile from './Profile'
import EditProfile from './EditProfile'
import MyCourses from './MyCourses'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const user = useSelector(state => state.sessions.currentUser)
  const navigate = useNavigate()
  const [edit, setEdit] = useState(false)

  return (
    <div id="dashboard">
      <div id="profile">
        {edit ? <EditProfile user={user} /> : <Profile user={user} />}
        <button onClick={() => setEdit(!edit)}>{edit ? "Cancel" : "Edit Profile"}</button>
        <br />
        {user.instructor ? <button onClick={() => navigate("/courses/new")}>Add Course</button> : null}
      </div>
      <MyCourses />
    </div>
  )
}

export default Dashboard