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
import { Route, Routes } from 'react-router-dom'
import { useEffect } from 'react';
import { fetchUser } from './features/sessionsSlice';
import { fetchCourses } from './features/coursesSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const courses = useSelector(state => state.courses.entities)

  useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchCourses())
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* change later to use user.username */}
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