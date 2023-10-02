import React from 'react'
import CourseCard from './CourseCard'
import { useSelector } from 'react-redux'

const MyCourses = () => {
  const user = useSelector(state => state.sessions.currentUser)
  const loggedIn = useSelector(state => state.sessions.loggedIn)
  if (!loggedIn) return <h1>Loading...</h1>

  const displayEnrolled = user.courses.enrolled.map(c => <CourseCard key={c.id} course={c} />)
  const displayCreated = user.courses.created.map(c => <CourseCard key={c.id} course={c} />)
  return (
    <div>
      <div className="courseGrid">
        <h2>Enrolled Courses</h2>
        {displayEnrolled}
      </div>
      {user.instructor ?
        <div className="courseGrid">
          <h2>Owned Courses</h2>
          {displayCreated}
        </div> :
        null
      }
    </div>
  )
}

export default MyCourses