import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    user: null,
    role: null,
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.userDetails.name;
      state.role = action.payload.userDetails.role;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
    },
    verify: (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.userDetails.name;
        state.role = action.payload.userDetails.role;
    }
  },
});

export const { login, logout, verify } = authSlice.actions;
export default authSlice.reducer;
