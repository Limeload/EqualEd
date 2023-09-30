import React from 'react'
import { useSelector } from 'react-redux'

const MyCourses = () => {
  const user = useSelector(state => state.sessions.currentUser)

  // TODO: functions to display course collections
  return (
    <div>
      <div className="courseGrid">
        <h2>Enrolled Courses</h2>
      </div>
      {user.instructor ?
        <div className="courseGrid">
          <h2>Owned Courses</h2>
        </div> :
        null
      }
    </div>
  )
}

export default MyCourses