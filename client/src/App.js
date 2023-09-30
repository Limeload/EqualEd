import './App.css';
import Home from './components/Home';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Courses from './components/Courses';
import Course from './components/Course';
import MyCourses from './components/MyCourses';
import NewCourse from './components/NewCourse';
import Header from './components/Header';
import Footer from './components/Footer';
import Accessibility from './components/Accessibility';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* change later to use user.username */}
        <Route path="/me" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup/student" element={<Signup />} />
        <Route path="/signup/instructor" element={<Signup />} />
        <Route path="/my-courses" element={<MyCourses />} />
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