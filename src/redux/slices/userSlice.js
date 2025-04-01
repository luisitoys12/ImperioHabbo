// src/redux/slices/userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 🔄 Async action (API Habbo)
export const fetchUserByName = createAsyncThunk(
  "user/fetchUserByName",
  async (username) => {
    const res = await fetch(`https://www.habbo.com/api/public/users?name=${username}`);
    return await res.json();
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserByName.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserByName.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserByName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
