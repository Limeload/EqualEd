import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOut } from '../features/sessionsSlice'
import { useDispatch } from 'react-redux'

// TODO: User Profile NavLink?
// TODO: Only render Create Course link if user is instructor
// TODO: Render Logout link instead of login/signup when there is a user
// TODO: Different styling and position for login, signup, logout links; they shouldn't be a tab per se

const NavBar = () => {

  const dispatch = useDispatch()

  const handleClick = () => {
    fetch('/logout', {
      method: "DELETE"
    })
    dispatch(logOut())
  }

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
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Login
      </NavLink>
      <NavLink
        to="/signup/student"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Student Signup
      </NavLink>
      <NavLink
        to="/signup/instructor"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Instructor Signup
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "pending" : ""
        }
        onClick={handleClick}>
        Log Out
      </NavLink>
    </nav>
  )
}

export default NavBar