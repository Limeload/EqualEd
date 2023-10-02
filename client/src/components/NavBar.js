import React from 'react'
import { NavLink } from 'react-router-dom'
import { logOut } from '../features/sessionsSlice'
import { useDispatch, useSelector } from 'react-redux'


const NavBar = () => {

  const dispatch = useDispatch()
  const user = useSelector(state => state.sessions.currentUser)
  const loggedIn = useSelector(state => state.sessions.loggedIn)

  const handleClick = () => {
    fetch('/api/logout', {
      method: "DELETE"
    })
    dispatch(logOut())
  }

  if (!loggedIn) {
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
      </nav>
    )
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
      {
        user.instructor ?
          <NavLink
            to="/courses/new"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            Create Course
          </NavLink> :
          null
      }
      <NavLink
        to="/profile"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "pending" : ""
        }
      >
        {user.username || "My Profile"}
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "pending" : ""
        }
        onClick={handleClick}
      >
        Log Out
      </NavLink>
    </nav>
  )
}

export default NavBar