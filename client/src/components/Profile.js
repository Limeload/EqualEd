import React from 'react'

const Profile = ({ user }) => {

  return (
    <div>
      <b>Username:</b> {user.username}
      <br />
      <b>Account email:</b> {user.email}
      <br />
      <b>Account type:</b> {user.instructor ? "Instructor" : "Student"}
    </div>
  )
}

export default Profile