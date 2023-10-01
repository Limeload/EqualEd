import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// TODO: update these accordingly when backend is finished

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

// TODO: add and remove course actions for enrollment

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

// TODO: add instructor created course actions

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
    // TODO: change to add instructor course
    // addUserReview(state, action) {
    //   state.currentUser.reviews.push(action.payload)
    // },
    logOut(state) {
      state.currentUser = {}
      state.loggedIn = false
    },
    resetEdit(state) {
      state.edit = false
    },
    resetSessErrors(state) {
      state.errors = []
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
          // state.currentUser.reviews = state.currentUser.reviews.map(r => r.id === action.payload.id ? action.payload : r)
          state.edit = true
          state.status = "idle"
          state.errors = []
        }
      })
      .addCase(deleteCourse.pending, (state) => {
        state.status = "loading"
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        // TODO: Change reviews to instructor courses array
        // state.currentUser.reviews = state.currentUser.reviews.filter(r => r.id !== action.meta.arg)
        state.status = "idle"
      })
  }
})
// TODO: remember to export new actions
export const { /* addUserReview, */ logOut, resetEdit, resetSessErrors } = sessionsSlice.actions;

export default sessionsSlice.reducer;