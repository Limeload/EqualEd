import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Courses from './components/Courses';
import Course from './components/Course';
import NewCourse from './components/NewCourse';
import Header from './components/Header';
import Footer from './components/Footer';
import Accessibility from './components/Accessibility';
import { ColorRing } from 'react-loader-spinner'
import { Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { fetchUser, courseCreated, resetSessErrors } from './features/sessionsSlice';
import { fetchCourses, resetNew, resetCourseErrors } from './features/coursesSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()

  const loading = useSelector(state => state.sessions.status === "loading" ? true : false)
  const errors = useSelector(state => state.sessions.errors.concat(state.courses.errors))
  const newCourse = useSelector(state => state.courses.newCourse)

  const [showErrors, setShowErrors] = useState(false)

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchCourses())
  }, [])

  useEffect(() => {
    if (errors[0]) {
      setShowErrors(true)
    }
  }, [errors[0]])

  useEffect(() => {
    if (newCourse) {
      dispatch(courseCreated(newCourse))
      dispatch(resetNew())
    }
  }, [newCourse])

  const displayErrors = errors.map((e, i) => <li key={i} >{e}</li>)
  const handleClick = () => {
    dispatch(resetSessErrors())
    dispatch(resetCourseErrors())
    setShowErrors(false)
  }

  return (
    <div className="App">
      <Header />
      {
        loading ?
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="color-ring-loading"
            wrapperClass="loading-wrapper"
            colors={['#8cfff4', '#8cedff', '#8cc4ff', '#8c9cff', '#a58cff']}
          /> :
          null
      }
      {
        showErrors ?
          <div id="errors">
            <h3>Your request could not be completed. Here's why:</h3>
            <ul>
              {displayErrors}
            </ul>
            <button onClick={handleClick}>Got it!</button>
          </div> :
          null
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/student" element={<Signup />} />
        <Route path="/signup/instructor" element={<Signup />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<Course />} />
        <Route path="/courses/new" element={<NewCourse />} />
      </Routes>
      <Accessibility />
      <Footer />
    </div>
  );
}

export default App;