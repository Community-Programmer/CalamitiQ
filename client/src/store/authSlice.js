import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    role: null,
    profileUrl: null
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.userDetails.name;
      state.role = action.payload.userDetails.role;
      state.profileUrl = action.payload.userDetails.profileUrl
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.profileUrl= null;
    },
    verify: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.userDetails.name;
        state.role = action.payload.userDetails.role;
        state.profileUrl = action.payload.userDetails.profileUrl;
    }
  },
});

export const { login, logout, verify } = authSlice.actions;
export default authSlice.reducer;
