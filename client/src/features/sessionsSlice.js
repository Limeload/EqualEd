import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//TODO: move OpenAiContext functions here, get rid of loading state reducers

export const fetchUser = createAsyncThunk("sessions/fetchUser", async () => {
  const response = await fetch("/api/me");
  const data = await response.json();
  return data;
});

export const logInPost = createAsyncThunk("sessions/logInPost", async (form) => {
  const r = await fetch("api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: form.username.toLowerCase(),
      password: form.password
    })
  });
  const user = await r.json();
  return user;
})

export const signUpPost = createAsyncThunk("sessions/signUpPost", async (form) => {
  const r = await fetch('/api/signup', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: form.email,
      username: form.username,
      password: form.password,
      password_confirmation: form.password_confirmation,
      instructor: form.instructor
    })
  });
  const user = await r.json();
  return user;
})

export const addEnrollment = createAsyncThunk("sessions/addEnrollment", async (id, { getState }) => {
  const state = getState();
  const r = await fetch("/api/enrollments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: state.sessions.currentUser.id,
      course_id: id,
      enrolled: true,
      created: false
    })
  })
  const enroll = await r.json();
  return enroll;
})

export const removeEnrollment = createAsyncThunk("sessions/removeEnrollment", async (id) => {
  const r = await fetch(`/api/enrollments/${id}`, { method: "DELETE" });
  return r.data;
})

export const courseCreated = createAsyncThunk("sessions/courseCreated", async (id, { getState }) => {
  const state = getState();
  const r = await fetch("/api/enrollments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: state.sessions.currentUser.id,
      course_id: id,
      enrolled: false,
      created: true
    })
  })
  const enroll = await r.json();
  return enroll;
})

export const editCourse = createAsyncThunk("sessions/editCourse", async ({ id, form }) => {
  const r = await fetch(`/api/courses/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  });
  const data = await r.json();
  return data;
})

export const deleteCourse = createAsyncThunk("sessions/deleteCourse", async (id) => {
  const r = await fetch(`/api/courses/${id}`, { method: "DELETE" });
  return r.data;
})

const sessionsSlice = createSlice({
  name: "sessions",
  initialState: {
    currentUser: {},
    loggedIn: false,
    edit: false, // boolean to be used when toggling edit form for a course
    status: "idle",
    errors: []
  },
  reducers: {
    logOut(state) {
      state.currentUser = {}
      state.loggedIn = false
    },
    resetEdit(state) {
      state.edit = false
    },
    resetSessErrors(state) {
      state.errors = []
    },
    setLoading(state) {
      state.status = "loading"
    },
    setIdle(state) {
      state.status = "idle"
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.status = "idle"
        }
        else {
          state.currentUser = action.payload;
          state.loggedIn = true;
          state.status = "idle";
        }
      })
      .addCase(logInPost.pending, (state) => {
        state.status = "loading"
      })
      .addCase(logInPost.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.errors = action.payload.error
          state.status = "idle"
        }
        else {
          state.currentUser = action.payload
          state.loggedIn = true
          state.status = "idle"
          state.errors = []
        }
      })
      .addCase(signUpPost.pending, (state) => {
        state.status = "loading"
      })
      .addCase(signUpPost.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.errors = action.payload.error
          state.status = "idle"
        }
        else {
          state.currentUser = action.payload
          state.loggedIn = true
          state.status = "idle"
          state.errors = []
        }
      })
      .addCase(addEnrollment.pending, (state) => {
        state.status = "loading"
      })
      .addCase(addEnrollment.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.errors = action.payload.error
          state.status = "idle"
        }
        else {
          state.currentUser.courses.enrolled.push(action.payload)
          state.status = "idle"
          state.errors = []
        }
      })
      .addCase(removeEnrollment.pending, (state) => {
        state.status = "loading"
      })
      .addCase(removeEnrollment.fulfilled, (state, action) => {
        state.currentUser.courses.enrolled = state.currentUser.courses.enrolled.filter(c => c.id !== action.meta.arg)
        state.status = "idle"
      })
      .addCase(courseCreated.pending, (state) => {
        state.status = "loading"
      })
      .addCase(courseCreated.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.errors = action.payload.error
          state.status = "idle"
        }
        else {
          state.currentUser.courses.created.push(action.payload)
          state.status = "idle"
          state.errors = []
        }
      })
      .addCase(editCourse.pending, (state) => {
        state.status = "loading"
      })
      .addCase(editCourse.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.errors = action.payload.error
          state.status = "idle"
        }
        else {
          // TODO: change to update edited instructor course
          state.currentUser.courses.created = state.currentUser.courses.created.map(c => c.id === action.payload.id ? action.payload : c)
          state.edit = true
          state.status = "idle"
          state.errors = []
        }
      })
      .addCase(deleteCourse.pending, (state) => {
        state.status = "loading"
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.currentUser.courses.created = state.currentUser.courses.created.filter(r => r.id !== action.meta.arg)
        state.status = "idle"
      })
  }
})

export const { setLoading, setIdle, logOut, resetEdit, resetSessErrors } = sessionsSlice.actions;

export default sessionsSlice.reducer;