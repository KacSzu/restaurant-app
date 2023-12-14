import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signupUser(state, action) {
      state.user = action.payload;
    },
    logoutUser(state) {
      state.user = null;
    },
    loginUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { signupUser, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;

export const getCurrentUser = (state) => state.user.user;
export const getActiveTime = (state) => state.user.activeTime;
