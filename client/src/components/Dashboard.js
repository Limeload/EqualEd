import React, { useState } from 'react'
import Profile from './Profile'
import EditProfile from './EditProfile'
import MyCourses from './MyCourses'

const Dashboard = () => {

  const [edit, setEdit] = useState(false)

  return (
    <div>
      {edit ? <EditProfile /> : <Profile />}
      <button onClick={() => setEdit(!edit)}>{edit ? "Cancel" : "Edit Profile"}</button>
      <MyCourses />
    </div>
  )
}

export default Dashboard