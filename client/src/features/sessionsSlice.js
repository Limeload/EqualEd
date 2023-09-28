import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk("sessions/fetchUser", async () => {
  const response = await fetch("/api/me");
  const data = await response.json();
  return data;
});

export const logInPost = createAsyncThunk("sessions/logInPost", async (form) => {
  const r = await fetch("/api/login", {
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
      username: form.username,
      password: form.password,
      password_confirmation: form.password_confirmation
    })
  });
  const user = await r.json();
  return user;
})

export const editReview = createAsyncThunk("sessions/editReview", async ({ id, form }) => {
  const r = await fetch(`/api/reviews/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  });
  const data = await r.json();
  return data;
})

export const deleteReview = createAsyncThunk("sessions/deleteReview", async (id) => {
  const r = await fetch(`/api/reviews/${id}`, { method: "DELETE" });
  return r.data;
})

const sessionsSlice = createSlice({
  name: "sessions",
  initialState: {
    currentUser: {},
    loggedIn: false,
    edit: false,
    status: "idle",
    errors: []
  },
  reducers: {
    addUserReview(state, action) {
      state.currentUser.reviews.push(action.payload)
    },
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
      .addCase(editReview.pending, (state) => {
        state.status = "loading"
      })
      .addCase(editReview.fulfilled, (state, action) => {
        if (action.payload.error) {
          state.errors = action.payload.error
          state.status = "idle"
        }
        else {
          state.currentUser.reviews = state.currentUser.reviews.map(r => r.id === action.payload.id ? action.payload : r)
          state.edit = true
          state.status = "idle"
          state.errors = []
        }
      })
      .addCase(deleteReview.pending, (state) => {
        state.status = "loading"
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.currentUser.reviews = state.currentUser.reviews.filter(r => r.id !== action.meta.arg)
        state.status = "idle"
      })
  }
})

export const { addUserReview, logOut, resetEdit, resetSessErrors } = sessionsSlice.actions;

export default sessionsSlice.reducer;