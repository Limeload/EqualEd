import React from 'react'
import { useNavigate } from 'react-router-dom'

const CourseCard = ({ course }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/courses/${course.id}`)}>
      <h3>{course.title}</h3>
      {/* shorten the content with css - just want to make the cards uniform and relatively square */}
      <p>{course.content}</p>
    </div>
  )
}

export default CourseCard