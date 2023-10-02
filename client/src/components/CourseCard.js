import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({ course }) => {
  const navigate = useNavigate()
  return (
    <div
      className="course-card"
      onClick={() => navigate(`/courses/${course.id}`)}
    >
      <h3>{course.title}</h3>
      {/* shorten the content with css - just want to make the cards uniform and relatively square */}
      <div className="card-body">{course.content}</div>
    </div>
  )
}

export default CourseCard