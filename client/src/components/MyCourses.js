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
    <div id="my-courses">
      <div>
        <h2>Enrolled Courses</h2>
        {
          !user.courses.enrolled[0] ?
            <p>You are not currently enrolled in any courses. Check out our Course Catalog!</p> :
            <div className="course-grid">
              {displayEnrolled}
            </div>
        }
      </div>
      {user.instructor ?
        <div>
          <h2>Created Courses</h2>
          {
            !user.courses.created[0] ?
              <p>You haven't created any courses yet. Click on 'Add Course' to get started!</p> :
              <div className="course-grid">
                {displayCreated}
              </div>
          }
        </div> :
        null
      }
    </div>
  )
}

export default MyCourses