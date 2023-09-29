import React from 'react'
import { NavLink } from 'react-router-dom'

// TODO: User Profile NavLink?
// TODO: Only render Create Course link if user is instructor
// TODO: Different styling and position for login links; they shouldn't be a tab per se

const NavBar = () => {
  return (
    <nav id="navbar">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/courses"
        end
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Course Catalog
      </NavLink>
      <NavLink
        to="/courses/new"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Create Course
      </NavLink>
      <NavLink
        to="/login/student"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Student Login
      </NavLink>
      <NavLink
        to="/login/instructor"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Instructor Login
      </NavLink>
    </nav>
  )
}

export default NavBar