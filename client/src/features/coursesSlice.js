import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// TODO: update these accordingly when backend is finished
// ** This one may just be a fetch, all other course actions go through the user object. We can just fetch every time the course catalog
// is visited via a useEffect call to handle new, updated, or deleted courses. **

export const fetchCourses = createAsyncThunk("courses/fetchCourses", async () => {
  const response = await fetch("/courses");
  const data = await response.json();
  return data;
});

export const addCourse = createAsyncThunk("courses/addCourse", async (formData) => {
  const r = await fetch("/courses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: formData.title,
      content: formData.content
      // TODO: creating user's id - this one may just go to SessionsController
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
    errors: [],
    selectedCourse: null // id of course in review
  },
  reducers: {
    courseAdded(state, action) {
      state.entities.push(action.payload);
    },
    courseUpdated(state, action) {
      const course = state.entities.find((r) => r.id === action.payload.id);
      course.name = action.payload.name;
      course.address = action.payload.address;
    },
    setCourse(state, action) {
      state.selectedCourse = parseInt(action.payload) // dispatched with the id of clicked course or null after review submission
    },
    resetRestErrors(state) {
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
          state.selectedCourse = action.payload.id
          state.errors = []
          state.status = "idle";
        }
      })
  }
})

export const { courseAdded, courseUpdated, setCourse, resetRestErrors } = coursesSlice.actions;

export default coursesSlice.reducer;