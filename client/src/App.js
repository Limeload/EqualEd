import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Courses from './components/Courses';
import Course from './components/Course';
import MyCourses from './components/MyCourses';
import NewCourse from './components/NewCourse';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/student" element={<Login />} />
        <Route path="/login/instructor" element={<Login />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<Course />} />
        <Route path="/courses/new" element={<NewCourse />} />
      </Routes>
    </div>
  );
}

export default App;