import { configureStore } from '@reduxjs/toolkit'
import sessionsReducer from "./features/sessionsSlice"
import coursesReducer from "./features/coursesSlice"

const store = configureStore({
  reducer: {
    sessions: sessionsReducer,
    courses: coursesReducer
  }
})

export default store