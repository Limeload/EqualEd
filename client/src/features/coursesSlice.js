import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
  const response = await fetch("/api/courses");
  const data = await response.json();
  return data;
});

export const addCourse = createAsyncThunk("courses/addCourse", async (form) => {
  const r = await fetch("/api/courses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: form.title,
      content: form.content
    })
  });
  const data = await r.json();
  return data;
})

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    entities: [], // array of courses
    status: "idle", // loading state
    newCourse: false,
    errors: []
  },
  reducers: {
    courseAdded(state, action) {
      state.entities.push(action.payload);
    },
    courseUpdated(state, action) {
      const course = state.entities.find((r) => r.id === action.payload.id);
      course.title = action.payload.title;
      course.content = action.payload.content;
    },
    courseDeleted(state, action) {
      state.entities = state.entities.filter(c => c.id !== action.payload)
    },
    resetNew(state) {
      state.newCourse = false
    },
    resetCourseErrors(state) {
      state.errors = []
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.entities = action.payload;
        state.status = "idle";
      })
      .addCase(addCourse.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.errors = action.payload.error
          state.status = "idle"
        }
        else {
          state.entities.push(action.payload);
          state.newCourse = action.payload.id
          state.errors = []
          state.status = "idle";
        }
      })
  }
})

export const { courseAdded, courseUpdated, courseDeleted, resetNew, resetCourseErrors } = coursesSlice.actions;

export default coursesSlice.reducer;